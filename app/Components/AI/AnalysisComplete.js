export default function AnalysisComplete() {
    return (
        <div
            className="d-flex align-items-center p-3 mb-1 shadow-lg border border-white border-opacity-50"
            style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px) saturate(180%)',
                WebkitBackdropFilter: 'blur(12px) saturate(180%)',
                borderRadius: '100px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}
        >
            <div className="position-relative me-3 ms-1">
                <div
                    className="bg-success rounded-circle position-absolute top-50 start-50 translate-middle"
                    style={{ width: '12px', height: '12px', zIndex: 2 }}
                ></div>
                <div
                    className="bg-success rounded-circle animate-ping opacity-25"
                    style={{ width: '24px', height: '24px' }}
                ></div>
            </div>

            <div className="flex-grow-1">
                <div className="d-flex align-items-center">
                    <span className="fw-bold text-dark me-2" style={{ fontSize: '1rem' }}>
                        Analysis Finalized
                    </span>
                    <span className="badge bg-success-subtle text-success border border-success border-opacity-25 rounded-pill" style={{ fontSize: '0.65rem' }}>
                        <i className="bi bi-cpu-fill me-1"></i> AI ENGINE
                    </span>
                </div>
                <div className="text-muted small fw-medium" style={{ fontSize: '0.8rem' }}>
                    100% of dental frames processed successfully.
                </div>
            </div>

            <style>{`
                @keyframes ping {
                    0% { transform: scale(0.2); opacity: 0.8; }
                    80%, 100% { transform: scale(2); opacity: 0; }
                }
                .animate-ping {
                    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
            `}</style>
        </div>
    );
}