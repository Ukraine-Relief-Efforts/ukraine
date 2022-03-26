export default function OneFaq (props) {
    return (
        <div>
            <div className="py-4">
                <h4 className=" text-2xl font-bold mb-4 tracking-tight">{props.title}</h4>
                {props.children}
            </div>
        </div>
    )
}