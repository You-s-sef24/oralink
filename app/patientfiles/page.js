import Header from "../Components/Header";
import PatientFiles from "../Components/PatientFile";

export default function PatientFilesPage() {
    return (
        <div className="container-fluid pt-5">
            <Header title={'All Patient Files'} desc={'Search and filter patient files across all students'} />

            <hr className="m-0" />

            <PatientFiles />
        </div>
    );
}