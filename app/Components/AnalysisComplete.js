export default function AnalysisComplete() {
    return (
        <div className="rounded shadow p-4" style={{backgroundColor:"#ECFDF5"}}>
            <div className="d-flex align-items-center gap-2 mb-2">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success lucide lucide-circle-check-big w-6 h-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                </span>
                <h3 className="m-0">Analysis Complete</h3>
            </div>
            <p className="text-muted m-0">AI has finished analyzing your X-ray</p>
        </div>
    );
}