export default function Warning() {
    return (
        <div
            className="card border-0 shadow-sm overflow-hidden mt-4"
            style={{ borderRadius: '16px', background: '#fff' }}
        >
            <div className="d-flex">
                <div
                    className="bg-warning opacity-75"
                    style={{ width: '6px' }}
                ></div>

                <div className="card-body p-4 d-flex align-items-start gap-3">
                    <div
                        className="rounded-4 d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                        style={{
                            width: '42px',
                            height: '42px',
                            background: '#FFFBEB',
                            border: '1px solid rgba(245, 158, 11, 0.3)'
                        }}
                    >
                        <i className="bi bi-exclamation-triangle-fill text-warning fs-5"></i>
                    </div>

                    <div>
                        <h6 className="fw-bold text-dark mb-1">
                            Clinical Decision Support
                            <span className="ms-2 badge rounded-pill bg-dark bg-opacity-10 text-dark border-0 fw-normal py-1 px-2" style={{ fontSize: '0.6rem' }}>
                                NOTICE
                            </span>
                        </h6>
                        <p className="text-muted mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                            This analysis is for <span className="text-dark fw-semibold">educational purposes only</span>.
                            It is designed to assist, not replace, professional clinical judgment.
                            Always verify findings with a <span className="text-decoration-underline text-dark">supervising dentist</span>.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                .card-body {
                    background-image: radial-gradient(#f59e0b 0.5px, transparent 0.5px);
                    background-size: 18px 18px;
                    background-position: right bottom;
                    background-repeat: no-repeat;
                    background-attachment: local;
                    opacity: 0.95;
                }
            `}</style>
        </div>
    );
}