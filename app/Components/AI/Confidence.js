export default function Confidence() {
    return (
        <div className="rounded shadow border border-primary bg-white p-4">
            <div className="row">
                <div className="col-12 col-sm-6 d-flex flex-column">
                    <h4 className="text-muted">AI Diagnosis</h4>
                    <h4>Periodontal Disease - Early Stage</h4>
                </div>

                <div className="col-12 col-sm-6 d-flex flex-column">
                    <h4 className="text-muted">Confidence</h4>
                    <div class="progress">
                        <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "92%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            92%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}