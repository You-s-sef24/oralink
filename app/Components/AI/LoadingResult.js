export default function LoadingResult() {
    return (
        <div className="border rounded p-4 text-center mt-3" style={{ backgroundColor: "#d1e4feff" }}>
            <div className="d-flex justify-content-center align-items-center">
                <div
                    className="spinner-border text-primary spinner-border-sm"
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <h3 className="mb-2">AI is analyzing your X-ray...</h3>
            <p className="text-muted">This may take a few moments</p>
        </div>
    );
}