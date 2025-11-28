export default function KeyFindings() {
    return (
        <div className="bg-light rounded shadow p-3">
            <h3 className="mb-2 d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary lucide lucide-circle-alert w-5 h-5 text-blue-600" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
                Key Findings
            </h3>
            <ul>
                <li>
                    Horizontal bone loss of approximately 2-3mm
                </li>
                <li>
                    Widening of periodontal ligament space
                </li>
                <li>
                    Slight calculus deposits visible
                </li>
                <li>
                    No furcation involvement detected
                </li>
            </ul>
        </div>
    );
}