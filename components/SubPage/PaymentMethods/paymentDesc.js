export default function PaymentDesc () {
    return (
        <div>
            <div className="mb-8">
                <h5 className="font-bold text-xl mb-2">What&apos;s needed</h5>
                <p className="mb-4">[content]</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="mr-5">
                    <h5 className="font-bold text-xl mb-4">Pros</h5>
                    <div className="block">
                        <ul className="list-inside list-disc">
                            <li>Global</li>
                            <li>Scaleable</li>
                            <li>Fits in your pocket</li>
                            <li>Lightening Fast</li>
                        </ul>
                    </div>
                </div>
                <div className="ml-5">
                    <h5 className="font-bold text-xl mb-4">Cons</h5>
                    <ul className="list-inside list-disc">
                        <li>Not Bitcoin</li>
                        <li>Meh UI</li>
                    </ul>
                </div>
            </div>
            <div>
                <h5 className="font-bold text-xl mb-2">How To Donate With This Method?</h5>
                <p>[content]</p>
            </div>
        </div>
    )
}