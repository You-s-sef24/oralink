"use client";

import { useState } from "react";
import axios from "axios";
import AIResults from "./AIResults";
import LoadingResult from "./LoadingResult";

export default function XrayUploadBox() {
    const [isDragging, setIsDragging] = useState(false);
    const [isAnalyzed, setIsAnalyzed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [resultImage, setResultImage] = useState(null); // store image URL

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
        if (droppedFile) setFile(droppedFile);
    }

    function handleFileSelect(e) {
        const selectedFile = e.target.files[0];
        if (selectedFile) setFile(selectedFile);
    }

    async function handleUpload() {
        if (!file) return;

        setLoading(true);
        setIsAnalyzed(false);
        setResultImage(null);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await axios.post(
                "https://mohamed2mohsen-oralink.hf.space/predict/",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    timeout: 120000,
                    responseType: "blob",
                }
            );

            const resultImageURL = URL.createObjectURL(response.data);

            setResultImage(resultImageURL);
            setIsAnalyzed(true);

        } catch (error) {
            console.error("Upload failed:", error);
            alert("Failed to analyze X-ray.");
        } finally {
            setLoading(false);
        }
    }

    function handleUploadNew() {
        setFile(null);
        setIsAnalyzed(false);
        setResultImage(null);
    }

    function handleExport() {
        if (!resultImage) return;
        const a = document.createElement("a");
        a.href = resultImage;
        a.download = "ai_xray_result.png";
        a.click();
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
                        style={{ maxHeight: "420px", objectFit: "contain" }}
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

            {loading && <LoadingResult />}
            {isAnalyzed && <AIResults resultImage={resultImage} />}
            <div className="d-flex justify-content-end gap-2">
                {!loading && file && !isAnalyzed && (
                    <>
                        <button className="btn btn-danger mt-3" onClick={() => setFile(null)}>
                            Cancel
                        </button>
                        <button className="btn btn-primary mt-3" onClick={handleUpload} disabled={!file}>
                            Analyze with AI
                        </button>
                    </>
                )}

                {!loading && file && isAnalyzed && (
                    <div className="d-flex gap-2 mt-4">
                        <button className="btn btn-lg btn-light" onClick={handleUploadNew}>
                            Upload New X-ray
                        </button>
                        <button className="btn btn-lg btn-primary" onClick={handleExport}>
                            Export Results
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}