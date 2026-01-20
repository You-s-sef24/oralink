import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import BootstrapClient from "./Components/BootstrapClient";
import UsersProvider from "./Contexts/UsersContext";
import PatientInfoProvider from "./Contexts/PatientInfoContext";
import StatesProvider from "./Contexts/StatesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OraLink",
  description: "Clinic Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <UsersProvider>
          <PatientInfoProvider>
            <StatesProvider>
              {children}
              <BootstrapClient />
            </StatesProvider>
          </PatientInfoProvider>
        </UsersProvider>
      </body>
    </html>
  );
}
