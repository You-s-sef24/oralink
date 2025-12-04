import Header from "../Components/Header";
import Students from "../Components/Students";

export default function StudentsPage() {
    return (
        <div className="container-fluid pt-5">
            <Header title={'Students Management'} desc={'View and manage all registered students'} />

            <hr className="m-0" />

            <Students />
        </div>
    );
}