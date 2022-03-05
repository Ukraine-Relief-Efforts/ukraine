export default function PaymentDesc (props) {
    const [
        methodName,
        howTo,
        pros,
        cons,
        ukraineService,
        intlService,
        serviceRegion
    ] = props.payDesc;

    console.log(howTo);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                <div>
                    <h5 className="font-bold text-xl mb-2">Pros</h5>
                    <div className="block">
                        <ul className="list-disc list-outside">
                            {pros.split(', ').map((pro,index) => <li key={`pro${index}`} className='ml-4'>{pro}</li>)}
                        </ul>
                    </div>
                </div>
                <div>
                    <h5 className="font-bold text-xl mb-2">Cons</h5>
                    <ul className="list-disc list-outside">
                        {cons.split(', ').map((con,index) => <li key={`con${index}`} className='ml-4'>{con}</li>)}
                    </ul>
                </div>
            </div>
            <div>
                <h5 className="font-bold text-xl mb-2">How To Donate With This Method?</h5>
                <ul>
                    {howTo.split('\n').map((step, index) => 
                        <li key={`step${index}`}>{step}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}