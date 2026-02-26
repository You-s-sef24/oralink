"use client";

import Image from 'next/image';
import { PatientInfoContext } from '../Contexts/PatientInfoContext';
import '../globals.css';
import { useContext, useState, useEffect } from "react";

export default function ImageUploadBox({ time, type, fileData, setFileData }) {
    const { generalData, setGeneralData } = useContext(PatientInfoContext);
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState(null);

    // Determine the field in state
    const getFieldName = () => {
        if (type === 'xray') return 'xRay';
        return time === 'pre' ? 'prePatientImage' : 'postPatientImage';
    }

    // Sync internal file state if editing existing fileData
    useEffect(() => {
        const field = getFieldName();
        if (fileData && fileData[field]) {
            setFile(fileData[field]);
        } else if (generalData[field]) {
            setFile(generalData[field]);
        }
    }, [fileData, generalData]);

    // Update file in both context and fileData
    const updateFileState = (selectedFile) => {
        if (!selectedFile) return;

        setFile(selectedFile);
        const field = getFieldName();

        // Always update generalData
        setGeneralData({ ...generalData, [field]: selectedFile });

        // Also update fileData if provided (editing mode)
        if (setFileData && fileData) {
            setFileData({ ...fileData, [field]: selectedFile });
        }

        console.log(`Updated ${field}:`, selectedFile);
    }

    // Drag and drop handlers
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
        if (droppedFile) updateFileState(droppedFile);
    }

    // File input select
    function handleFileSelect(e) {
        const selectedFile = e.target.files[0];
        if (selectedFile) updateFileState(selectedFile);
    }

    // Cancel / remove image
    const handleCancel = () => {
        setFile(null);
        const field = getFieldName();
        setGeneralData({ ...generalData, [field]: null });
        if (setFileData && fileData) {
            setFileData({ ...fileData, [field]: null });
        }
    }

    return (
        <div className="upload-container">
            <h4 className="mb-3">
                {type === 'xray' ? 'X-Ray Image (Optional)' : time === 'pre' ? 'Pre-Patient Image' : 'Post-Patient Image'}
            </h4>

            {file ? (
                <div className="d-flex justify-content-center position-relative">
                    <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        className="img-fluid w-100"
                        style={{ maxHeight: "420px", maxWidth: "100%", objectFit: "contain" }}
                    />
                    <button className="cancel-button btn btn-danger rounded-circle" onClick={handleCancel}>X</button>
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
                        name={getFieldName()}
                        className="d-none"
                        required={type !== 'xray'}
                        onChange={handleFileSelect}
                    />
                    <div className="upload-content">
                        <i className="bi bi-upload fs-1 text-secondary"></i>
                        <p className="fw-semibold mt-2">Click to upload image</p>
                        <p className="text-muted small">PNG, JPG up to 10MB</p>
                    </div>
                </label>
            )}
        </div>
    );
}
