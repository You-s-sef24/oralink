import Link from "next/link";

export default function StudentFiles({ student }) {
    const files = student?.files || [];

    if (files.length === 0) {
        return (
            <div className="d-flex flex-column text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-16 h-16 text-gray-300 mx-auto mb-4" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                <p>No files submitted yet</p>
                <p className="text-muted">This student hasn&apos;t submitted any patient files</p>
            </div>
        );
    }

    const renderFiles = files.map((file) => {
        return (
            <div className="row text-center align-items-center" key={file.id}>
                <div className="col-1 text-truncate">
                    {file.id}
                </div>
                <div className="col-3 text-truncate">
                    {file.patientName}
                </div>
                <div className="col text-truncate">
                    {file.department}
                </div>
                <div className="col text-truncate">
                    {file.creationDate}
                </div>
                <div className="col-2 d-none d-sm-block text-truncate">
                    <div className="d-inline-block">
                        {file.grade > 0 ? (
                            <span className="d-flex justify-content-center align-items-center bg-success text-white rounded-pill px-2 py-1 gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-4 h-4" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                <small>Graded</small>
                            </span>
                        ) : (
                            <span className="d-flex justify-content-center align-items-center bg-warning text-center text-white rounded-pill px-2 py-1 gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x w-4 h-4" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                                <small className="text-truncate">Not Graded</small>
                            </span>
                        )}
                    </div>
                </div>
                <div className="col text-truncate">
                    {file.grade}/100
                </div>
                <div className="col d-flex justify-content-center text-truncate">
                    <Link href={`/students/${student.id}/files/${file.id}`} className="d-flex align-items-center btn btn-sm btn-primary gap-1">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye w-75 h-4" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
                        Open
                    </Link>
                </div>
                <hr className="mt-2" />
            </div>
        );
    });

    return (
        <div className="shadow border rounded bg-white p-4 my-4">
            <div className="row text-center align-items-center">
                <div className="col-1 text-truncate">
                    File ID
                </div>
                <div className="col-3 text-truncate">
                    Patient Name
                </div>
                <div className="col text-truncate">
                    Department
                </div>
                <div className="col text-truncate">
                    Created Date
                </div>
                <div className="col-2 d-none d-sm-block text-truncate">
                    Status
                </div>
                <div className="col text-truncate">
                    Grade
                </div>
                <div className="col text-truncate">
                    Action
                </div>
            </div>

            <hr />

            {renderFiles}
        </div>
    );
}