export default function SupervisorGettingStarted() {
    return (
        <div className="rounded p-4 my-4" style={{ backgroundColor: "#d1e4feff" }}>
            <h3>Getting Started</h3>
            <p className="text-muted mb-3">Approve student procedure steps before the next treatment stage.</p>
            <ul className="text-muted">
                <li>
                    Review procedure steps submitted by students and ensure they follow correct clinical protocols.
                </li>
                <li>
                    Approve a step to allow the student to continue with the next procedure step.
                </li>
                <li>
                    Reject a step if corrections are needed and provide feedback in the supervisor comments.
                </li>
                <li>
                    Monitor patient cases and track the progress of procedures performed by students.
                </li>
            </ul>
        </div>
    );
}