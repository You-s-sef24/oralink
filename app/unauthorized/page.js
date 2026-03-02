"use client";

import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
    const router = useRouter();

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-5 text-center" style={{ maxWidth: "500px" }}>

                <h1 className="text-danger fw-bold display-4">403</h1>
                <h3 className="mb-3">Unauthorized Access</h3>

                <p className="text-muted">
                    Sorry, you don&apos;t have permission to view this page.
                    Please contact your administrator if you believe this is a mistake.
                </p>

                <div className="d-flex justify-content-center gap-3 mt-4">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => router.back()}
                    >
                        Back
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={() => router.push("/home")}
                    >
                        Home Page
                    </button>
                </div>
            </div>
        </div>
    );
}