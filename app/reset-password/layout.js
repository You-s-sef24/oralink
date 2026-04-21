import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "../Components/BootstrapClient";

export const metadata = {
    title: "Reset Password",
    description: "Reset Password - OraLink Clinic Management System",
};

export default function ResetPasswordLayout({ children }) {
    return (
        <div>
            <BootstrapClient />
            {children}
        </div>
    );
}
