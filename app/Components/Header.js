export default function Header({ title, desc }) {
    return (
        <div className="p-4">
            <h3>{title}</h3>
            <p className="m-0">{desc}</p>
        </div>
    );
}