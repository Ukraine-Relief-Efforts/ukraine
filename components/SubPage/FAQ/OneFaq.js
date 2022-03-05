export default function OneFaq (props) {
    return (
        <div>
            <div className="py-8">
                <h4 className=" text-2xl font-bold text-uablue-default mb-4 tracking-tight">{props.title}</h4>
                {props.children}
            </div>
            <hr></hr>
        </div>
    )
}