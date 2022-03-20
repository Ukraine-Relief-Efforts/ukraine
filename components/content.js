export default function Content({ children }) {
    return (
        <div className="bg-sky-100/50 pb-16">
            <div className="w-100 mx-16">{children}</div>
        </div>
    );
}