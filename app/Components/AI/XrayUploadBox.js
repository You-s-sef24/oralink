"use client";

import { useState } from "react";
import AIResults from "./AIResults";
import LoadingResult from "./LoadingResult";

export default function XrayUploadBox() {
    const [isDragging, setIsDragging] = useState(false);
    const [isAnalyzed, setIsAnalyzed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

    function handleDragOver(e) {
        e.preventDefault();
        setIsDragging(true);
    }

    function handleDragLeave() {
        setIsDragging(false);
    }

    function handleDrop(e) {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
        }
    }

    function handleFileSelect(e) {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    }

    function handleUpload() {
        if (file === null) {
            return;
        }
        if (file) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setIsAnalyzed(true);
            }, 3000);
            return;
        }
    }

    function handleUploadNew() {
        setFile(null);
        setIsAnalyzed(false);
    }

    function handleExport() {

    }

    return (
        <div className="upload-container mt-4">
            <h4 className="mb-3">Upload X-ray Image</h4>

            {file ? (
                <div className="d-flex justify-content-center">
                    <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        className="img-fluid w-100"
                        style={{ maxHeight: "420px", maxWidth: "100", objectFit: "contain" }}
                    />
                </div>
            ) : (
                <label
                    className={`upload-box ${isDragging ? "dragging" : ""}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <input
                        type="file"
                        accept="image/png, image/jpeg, .dcm"
                        className="d-none"
                        onChange={handleFileSelect}
                    />

                    <div className="upload-content">
                        <i className="bi bi-upload fs-1 text-secondary"></i>
                        <p className="fw-semibold mt-2">Drop your X-ray image here</p>
                        <p className="text-muted small">or click to browse</p>
                        <p className="text-muted small">PNG, JPG, DICOM up to 20MB</p>
                    </div>
                </label>
            )}

            {loading ? (
                <LoadingResult />
            ) : ('')
            }

            {isAnalyzed ? (
                <AIResults />
            ) : ('')
            }

            <div className="d-flex justify-content-end gap-2">
                {loading ? null : file && !isAnalyzed ? (
                    <>
                        <button className="btn btn-danger mt-3" onClick={() => setFile(null)}>
                            Cancel
                        </button>
                        <button
                            className="btn btn-primary mt-3"
                            onClick={handleUpload}
                            disabled={!file}
                        >
                            Analyze with AI
                        </button>
                    </>
                ) : file && isAnalyzed ? (
                    <div className="d-flex gap-2 mt-4">
                        <button className="btn btn-lg btn-light" onClick={handleUploadNew}>Upload New X-ray</button>
                        <button className="btn btn-lg btn-primary" onClick={handleExport}>Export Results</button>
                    </div>
                ) : (
                    <button
                        className="btn btn-primary mt-3"
                        onClick={handleUpload}
                        disabled={!file}
                    >
                        Analyze with AI
                    </button>
                )}
            </div>
        </div>
    );
}