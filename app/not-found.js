import Link from "next/link";

export default function NotFound() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
            <h1 className="display-1 fw-bold text-primary">404</h1>
            <h4 className="mb-3">Page Not Found</h4>
            <p className="text-muted mb-4">The page you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/home" className="btn btn-primary">Go Home</Link>
        </div>
    );
}