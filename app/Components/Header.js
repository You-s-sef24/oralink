import Link from "next/link";

export default function Header({ title, desc, page }) {
    return (
        <div className="p-4">
            {page === "Student Profile" ? (
                <Link href={'/students'} className="d-flex align-items-center text-decoration-none text-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-chevron-left w-4 h-4" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
                    Back to Students List
                </Link>
            ) : ''}
            
            <h3>{title}</h3>
            <p className="m-0">{desc}</p>
        </div>
    );
}