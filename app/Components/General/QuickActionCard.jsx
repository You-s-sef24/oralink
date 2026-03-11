import Link from "next/link";

export default function QuickAction({ title, desc, svg, link, spanColor }) {
  return (
    <Link
      href={link}
      className="d-flex flex-column bg-white rounded shadow action text-decoration-none p-3"
    >
      <span
        className={`w-25 mb-3 text-center bg-${spanColor} text-white rounded p-2`}
      >
        {svg}
      </span>
      <p className="mb-2">{title}</p>
      <p className="m-0 text-muted">{desc}</p>
    </Link>
  );
}
