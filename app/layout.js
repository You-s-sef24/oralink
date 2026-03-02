import { Geist, Geist_Mono, Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import BootstrapClient from "./Components/BootstrapClient";
import UsersProvider from "./Contexts/UsersContext";
import PatientInfoProvider from "./Contexts/PatientInfoContext";
import StatesProvider from "./Contexts/StatesContext";
import UIProvider from "./Contexts/UIContext";
import Footer from "./Components/General/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "OraLink",
  description: "Clinic Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${roboto.variable}`}>
        <UsersProvider>
          <UIProvider>
            <PatientInfoProvider>
              <StatesProvider>
                {children}
                <Footer />
                <BootstrapClient />
              </StatesProvider>
            </PatientInfoProvider>
          </UIProvider>
        </UsersProvider>
      </body>
    </html>
  );
}
