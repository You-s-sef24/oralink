import Header from "../Components/General/Header";
import PatientFiles from "../Components/General/PatientFiles";

export default function PatientFilesPage() {
    return (
        <div className="container-fluid">
            <Header title={'All Patient Files'} desc={'Search and filter patient files across all students'} />

            <hr className="m-0" />

            <PatientFiles />
        </div>
    );
}