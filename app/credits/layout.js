import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "../Components/BootstrapClient";

export const metadata = {
    title: "Credits",
    description: "Credits - OraLink Clinic Management System",
};

export default function CreditsLayout({ children }) {
    return (
        <div>
            <BootstrapClient />
            {children}
        </div>
    );
}
