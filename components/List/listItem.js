export default function ListItem ({children, bullet}) {
    return (
        <li className="mt-4">
            {bullet ? bullet : "👉"}{" "}
            {children}
        </li>
    )
}