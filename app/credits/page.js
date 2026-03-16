"use client";

import Link from "next/link";

export default function CreditsPage() {
    const team = [
        { name: "Youssef Mahmoud", role: "Frontend Developer", linkedin: "https://www.linkedin.com/in/you-s-sef24" },
        { name: "Youssef Sawy", role: "Backend Developer", linkedin: "https://www.linkedin.com/in/youssif-s-a2b717214/" },
        { name: "Youssef Sherif", role: "Backend Developer", linkedin: "https://www.linkedin.com/in/youssef-mohamed-sheref-42204228b/" },
        { name: "Youssef Ahmed", role: "Backend Developer", linkedin: "https://www.linkedin.com/in/youssefahmed22/" },
        { name: "Mohamed Ragab", role: "AI Developer", linkedin: "https://www.linkedin.com/in/mohamed-ragab-4a90a1264/" },
        { name: "Mohamed Mahmoud", role: "UI/UX Designer", linkedin: "" },
        { name: "Ahmed Wagih", role: "QA & Testing", linkedin: "https://eg.linkedin.com/in/ahmed-wagih1" },
    ];

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">OraLink Working Team</h1>
            <div className="row justify-content-center">
                {team.map((member, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
                        <Link href={member.linkedin} target="_blank" className="card shadow-sm p-3 h-100 text-decoration-none action">
                            <h5 className="card-title mb-1">{member.name}</h5>
                            <p className="card-text text-muted">{member.role}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}