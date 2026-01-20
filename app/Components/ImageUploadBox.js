"use client";

import { PatientInfoContext } from '../Contexts/PatientInfoContext';
import '../globals.css';
import { useContext, useState } from "react";

export default function ImageUploadBox({ time, type, fileData, setFileData }) {
    const { generalData, setGeneralData } = useContext(PatientInfoContext);
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState(null);
    const { isEditing } = useContext(PatientInfoContext);

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
            if (type === 'xray') {
                setGeneralData({ ...generalData, xRay: droppedFile });
                return;
            }
            if (isEditing) {
                time === 'pre' ? setFileData({ ...fileData, prePatientImage: droppedFile }) : setFileData({ ...fileData, postPatientImage: droppedFile });
            } else {
                time === 'pre' ? setGeneralData({ ...generalData, prePatientImage: droppedFile }) : setGeneralData({ ...generalData, postPatientImage: droppedFile });
            }
        }
    }

    function handleFileSelect(e) {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            if (type === 'xray') {
                setGeneralData({ ...generalData, xRay: selectedFile });
                return;
            }
            time === 'pre' ? setGeneralData({ ...generalData, prePatientImage: selectedFile }) : setGeneralData({ ...generalData, postPatientImage: selectedFile });
        }
    }

    return (
        <div className="upload-container">
            {
                type === 'xray' ? <h4 className="mb-3">X-Ray Image (Optional)</h4> : time === 'pre' ? <h4 className="mb-3">Pre-Patient Image</h4> : <h4 className="mb-3">Post-Patient Image</h4>
            }

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