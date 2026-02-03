import Header from "../Components/General/Header";
import Patients from "../Components/General/Patients";

export default function MyFilesPage() {
    return (
        <div className="container-fluid">
            <Header title={'Search Patient Files'} desc={'Find and view patient records'} />

            <hr className="m-0" />

            <Patients />
        </div>
    );
}