export default function Content({ children }) {
    return (
        <div className="bg-sky-100/50 pb-16">
            <div className="w-100 mx-24">{children}</div>
        </div>
    );
}