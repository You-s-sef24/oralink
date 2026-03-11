import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../Components/General/Navbar";
import UsersProvider from "../Contexts/UsersContext";
import BootstrapClient from "../Components/BootstrapClient";
import PatientInfoProvider from "../Contexts/PatientInfoContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "View All Students",
    description: "View All Students - OraLink Clinic Management System",
};

export default function ViewAllStudentsLayout({ children }) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
            <UsersProvider>
                <PatientInfoProvider>
                    <BootstrapClient />
                    <Navbar />
                    {children}
                </PatientInfoProvider>
            </UsersProvider>
        </div>
    );
}
