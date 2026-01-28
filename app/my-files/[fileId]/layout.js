import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "@/app/Components/BootstrapClient";
import UsersProvider from "@/app/Contexts/UsersContext";
import PatientInfoProvider from "@/app/Contexts/PatientInfoContext";
import Navbar from "@/app/Components/Navbar";
import StatesProvider from "@/app/Contexts/StatesContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Patient File",
    description: "Patient File - OraLink Clinic Management System",
};

export default function FileLayout({ children }) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
            <UsersProvider>
                <PatientInfoProvider>
                    <StatesProvider>
                        <BootstrapClient />
                        <Navbar />
                        {children}
                    </StatesProvider>
                </PatientInfoProvider>
            </UsersProvider>
        </div>
    );
}
