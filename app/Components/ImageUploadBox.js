"use client";

import { PatientInfoContext } from '../Contexts/PatientInfoContext';
import '../globals.css';
import { useContext, useState, useRef } from "react";

const MAX_IMAGES = 5;
const MAX_SIZE_MB = 10;
const ACCEPTED = "image/png, image/jpeg, image/jpg";

function getObjectUrl(f) {
    if (!f) return null;
    if (f instanceof File) return URL.createObjectURL(f);
    if (typeof f === "string") return f;
    return null;
}

function validateFile(f) {
    if (!["image/png", "image/jpeg", "image/jpg"].includes(f.type))
        return "Only PNG and JPG files are allowed.";
    if (f.size > MAX_SIZE_MB * 1024 * 1024)
        return `File size must be under ${MAX_SIZE_MB}MB.`;
    return null;
}

export default function ImageUploadBox({ time, type, fileData, setFileData, readOnly = false }) {
    const { generalData, setGeneralData } = useContext(PatientInfoContext);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState(null);
    const inputRef = useRef(null);

    const isXray = type === "xray";

    const fieldName = isXray ? "xRay" : time === "pre" ? "prePatientImage" : "postPatientImage";

    const label = isXray
        ? "X-Ray Image (Optional)"
        : time === "pre" ? "Pre-Patient Images" : "Post-Patient Images";

    // In edit mode (fileData provided): read directly from fileData prop so React re-renders drive the UI.
    // In create mode: read from generalData.
    const rawValue = fileData ? fileData[fieldName] : generalData[fieldName];
    const contextValue = rawValue;

    const images = isXray
        ? []
        : !contextValue
            ? []
            : Array.isArray(contextValue) ? contextValue : [contextValue];

    const pushToContext = (newArr) => {
        // Spread into new array to guarantee a new reference, forcing React to re-render
        const value = Array.isArray(newArr) ? [...newArr] : [];
        if (setFileData) {
            setFileData((prev) => ({ ...prev, [fieldName]: value }));
        } else {
            setGeneralData((prev) => ({ ...prev, [fieldName]: value }));
        }
    };

    const pushXrayToContext = (f) => {
        if (setFileData) {
            setFileData((prev) => ({ ...prev, [fieldName]: f }));
        } else {
            setGeneralData((prev) => ({ ...prev, [fieldName]: f }));
        }
    };

    const addFiles = (fileList) => {
        setError(null);

        if (isXray) {
            const f = fileList[0];
            if (!f) return;
            const err = validateFile(f);
            if (err) { setError(err); return; }
            pushXrayToContext(f);
            return;
        }

        const remaining = MAX_IMAGES - images.length;
        if (remaining <= 0) {
            setError(`Maximum ${MAX_IMAGES} images allowed.`);
            return;
        }

        const toAdd = Array.from(fileList).slice(0, remaining);
        const errs = toAdd.map(validateFile).filter(Boolean);
        if (errs.length) { setError(errs[0]); return; }

        pushToContext([...images, ...toAdd]);
    };

    const removeImage = (idx) => {
        if (isXray) { pushXrayToContext(null); return; }
        const next = images.filter((_, i) => i !== idx);
        pushToContext(next);
    };

    const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
    const handleDragLeave = () => setIsDragging(false);
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        addFiles(e.dataTransfer.files);
    };
    const handleFileSelect = (e) => {
        addFiles(e.target.files);
        e.target.value = "";
    };

    const xrayValue = isXray ? contextValue : null;
    const xrayUrl = isXray ? getObjectUrl(xrayValue) : null;

    if (isXray) {
        return (
            <div className="upload-container">
                <h4 className="mb-3">{label}</h4>

                {xrayUrl ? (
                    <div className="d-flex justify-content-center position-relative">
                        <img
                            src={xrayUrl}
                            alt="X-Ray Preview"
                            className="img-fluid rounded"
                            style={{ maxHeight: 420, maxWidth: "100%", objectFit: "contain" }}
                        />
                        {!readOnly && (
                            <button
                                type="button"
                                className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle"
                                style={{ width: 28, height: 28, padding: 0, lineHeight: 1 }}
                                onClick={() => removeImage(0)}
                                aria-label="Remove image"
                            >✕</button>
                        )}
                    </div>
                ) : readOnly ? (
                    <p className="text-muted small">No X-ray uploaded.</p>
                ) : (
                    <DropZone
                        isDragging={isDragging}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => inputRef.current?.click()}
                        hint="PNG, JPG up to 10MB"
                    />
                )}

                {!readOnly && (
                    <input
                        ref={inputRef}
                        type="file"
                        accept={ACCEPTED}
                        className="d-none"
                        onChange={handleFileSelect}
                    />
                )}
                {error && <p className="text-danger small mt-2">{error}</p>}
            </div>
        );
    }

    const canAddMore = !readOnly && images.length < MAX_IMAGES;

    return (
        <div className="upload-container">
            <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="mb-0">{label}</h4>
                <span className="badge bg-secondary">{images.length} / {MAX_IMAGES}</span>
            </div>

            {images.length > 0 && (
                <div className="row g-2 mb-3">
                    {images.map((img, idx) => {
                        const url = getObjectUrl(img);
                        const isExisting = typeof img === "string"; // server URL
                        return (
                            <div key={idx} className="col-6 col-sm-4 col-md-3 position-relative">
                                <img
                                    src={url}
                                    alt={`Preview ${idx + 1}`}
                                    className="w-100 rounded border"
                                    style={{ height: 120, objectFit: "cover" }}
                                />
                                {/* Badge to distinguish saved vs new */}
                                <span
                                    className={`position-absolute top-0 start-0 m-1 badge ${isExisting ? "bg-success" : "bg-primary"}`}
                                    style={{ fontSize: 9 }}
                                >
                                    {isExisting ? "Saved" : "New"}
                                </span>
                                {!readOnly && (
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle"
                                        style={{ width: 24, height: 24, padding: 0, lineHeight: 1, fontSize: 11 }}
                                        onClick={() => removeImage(idx)}
                                        aria-label={`Remove image ${idx + 1}`}
                                    >✕</button>
                                )}
                                <span
                                    className="position-absolute bottom-0 start-0 m-1 badge bg-dark bg-opacity-75"
                                    style={{ fontSize: 10 }}
                                >
                                    {idx + 1}
                                </span>
                            </div>
                        );
                    })}

                    {canAddMore && (
                        <div className="col-6 col-sm-4 col-md-3">
                            <button
                                type="button"
                                className="w-100 rounded border border-dashed bg-light d-flex flex-column align-items-center justify-content-center"
                                style={{ height: 120, border: "2px dashed #adb5bd", cursor: "pointer" }}
                                onClick={() => inputRef.current?.click()}
                            >
                                <i className="bi bi-plus-lg fs-4 text-secondary" />
                                <span className="small text-muted mt-1">Add more</span>
                            </button>
                        </div>
                    )}
                </div>
            )}

            {images.length === 0 && !readOnly && (
                <DropZone
                    isDragging={isDragging}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => inputRef.current?.click()}
                    hint={`PNG, JPG up to ${MAX_SIZE_MB}MB · max ${MAX_IMAGES} images`}
                />
            )}

            {images.length === 0 && readOnly && (
                <p className="text-muted small">No images uploaded.</p>
            )}

            {!readOnly && (
                <input
                    ref={inputRef}
                    type="file"
                    accept={ACCEPTED}
                    multiple
                    className="d-none"
                    onChange={handleFileSelect}
                />
            )}

            {error && <p className="text-danger small mt-2">{error}</p>}

            {!readOnly && !canAddMore && images.length > 0 && (
                <p className="text-muted small mt-1">
                    Maximum of {MAX_IMAGES} images reached.
                </p>
            )}
        </div>
    );
}

function DropZone({ isDragging, onDragOver, onDragLeave, onDrop, onClick, hint }) {
    return (
        <div
            className={`upload-box d-flex flex-column align-items-center justify-content-center rounded border ${isDragging ? "dragging border-primary bg-light" : "border-secondary"}`}
            style={{ minHeight: 160, cursor: "pointer", borderStyle: "dashed" }}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={onClick}
        >
            <i className="bi bi-cloud-upload fs-1 text-secondary mb-2" />
            <p className="fw-semibold mb-1">Click or drag to upload</p>
            <p className="text-muted small mb-0">{hint}</p>
        </div>
    );
}