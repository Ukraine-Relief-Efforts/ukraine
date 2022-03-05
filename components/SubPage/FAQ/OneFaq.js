export default function OneFaq (props) {
    return (
        <div>
            <div className="py-8">
                <h4 className=" text-2xl font-bold text-uablue-default mb-4">{props.title}</h4>
                {props.tip && 
                <div className="flex items-center mb-4">
                    <span className="mr-2">👉 </span>
                    <span>{props.tip}</span>
                </div>}
                {props.children}
            </div>
            <hr></hr>
        </div>
    )
}