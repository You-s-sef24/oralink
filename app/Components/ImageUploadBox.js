"use client";

import { PatientInfoContext } from '../Contexts/PatientInfoContext';
import '../globals.css';
import { useContext, useState } from "react";

export default function ImageUploadBox() {
    const { generalData, setGeneralData } = useContext(PatientInfoContext);
    const [isDragging, setIsDragging] = useState(false);
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
            setGeneralData({ ...generalData, patientImage: file });
        }
    }

    function handleFileSelect(e) {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    }

    return (
        <div className="upload-container">
            <h4 className="mb-3">Patient Image</h4>

            {file ? (
                <div className="d-flex justify-content-center position-relative">
                    <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        className="img-fluid w-100"
                        style={{ maxHeight: "420px", maxWidth: "100", objectFit: "contain" }}
                    />
                    <button className="cancel-button btn btn-danger rounded-circle" onClick={() => {
                        setFile(null);
                        setGeneralData({ ...generalData, prePatientImage: null });
                    }}>X</button>
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
                        <p className="fw-semibold mt-2">Click to upload image</p>
                        <p className="text-muted small">PNG, JPG up to 10MB</p>
                    </div>
                </label>
            )}
        </div>
    );
}