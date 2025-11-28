export default function XrayInfo() {
    return (
        <div className="rounded p-4 my-4" style={{ backgroundColor: "#d1e4feff" }}>
            <p class="mb-3">About AI X-ray Analysis</p>
            <ul class="text-muted">
                <li>
                    The AI model is trained on thousands of dental radiographs
                </li>
                <li>
                    Analysis includes detection of caries, bone loss, and other pathologies
                </li>
                <li>
                    Results are provided instantly to aid in diagnosis and treatment planning
                </li>
                <li>
                    Always consult with your supervisor before making clinical decisions
                </li>
            </ul>
        </div>
    );
}