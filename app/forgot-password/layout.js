import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "../Components/BootstrapClient";

export const metadata = {
    title: "Forget Password",
    description: "Forget Password - OraLink Clinic Management System",
};

export default function ForgetPasswordLayout({ children }) {
    return (
        <div>
            <BootstrapClient />
            {children}
        </div>
    );
}
