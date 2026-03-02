import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center text-muted py-2 bg-light border-top">
      <small>
        © {new Date().getFullYear()} October 6 University. All rights reserved.{" "}
        <br />
        Developed by the{" "}
        <Link href={'/credits'} target="_blank" className="text-decoration-none">
          OraLink Working Team
        </Link>
      </small>
    </footer>
  );
}
