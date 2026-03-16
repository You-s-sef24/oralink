export default function StudentCard({ student }) {
    return (
        <div className="shadow rounded bg-white p-4 my-4">
            <div className="row align-items-center">
                <div className="col-12 col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                        <span className="bg-primary text-white rounded p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-user w-8 h-8 text-blue-600" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </span>
                        <div className="d-flex flex-column">
                            <h3>{student?.name}</h3>
                            <small className="d-flex align-items-center gap-1 text-muted">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-mail w-4 h-4" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                                {student?.email}
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="d-flex justify-content-between text-center mt-3 mt-md-0">
                        <div>
                            <h3>{student.submittedFilesCount}</h3>
                            <p className="text-muted">Total Files</p>
                        </div>
                        <div className="text-success">
                            <h3>{student.gradedFilesCount}</h3>
                            <p>Graded</p>
                        </div>
                        <div className="text-warning">
                            <h3>{student.averageGrade}</h3>
                            <p>Avg Grade</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}