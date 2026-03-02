"use client";

import Link from "next/link";

export default function CreditsPage() {
    const team = [
        { name: "Youssef Mahmoud", role: "Frontend Developer", linkedin: "" },
        { name: "Youssef Sherif", role: "Backend Developer", linkedin: "" },
        { name: "Youssef Ahmed", role: "Backend Developer", linkedin: "" },
        { name: "Youssef Sawy", role: "Backend Developer", linkedin: "" },
        { name: "Mohamed Ragab", role: "AI Developer", linkedin: "" },
        { name: "Mohamed Mahmoud", role: "UI/UX Designer", linkedin: "" },
        { name: "Ahmed Wagih", role: "QA & Testing", linkedin: "" },
    ];

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">OraLink Working Team</h1>
            <div className="row justify-content-center">
                {team.map((member, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
                        <Link href={member.linkedin} className="card shadow-sm p-3 h-100 text-decoration-none action">
                            <h5 className="card-title mb-1">{member.name}</h5>
                            <p className="card-text text-muted">{member.role}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <p className="text-center text-muted mt-4">
                © {new Date().getFullYear()} October 6 University. All rights reserved.
            </p>
        </div>
    );
}