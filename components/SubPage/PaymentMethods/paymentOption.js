export default function PaymentOption(props) {
    return (
        <div className='mt-12'>
            <div>
                <h1 className={`font-bold text-uablue-default text-xl lg:text-2xl`}>{props.paymentTitle}</h1>
            </div>
            <div className='my-1 md:my-2 lg:my-4 font-light text-m md:text-5m lg:text-l'>
                <p>{props.paymentDescription}</p>
            </div>
            <div className='flex'>
                <div className='flex-1 min-w-[50%]'>
                    <p className='text-l lg:text-xl font-bold'>Pros</p>
                    <ul className='list-disc ml-6 mt-2'>
                        {props.pros && (props.pros).map((i) => {
                            return <li key={i}>{i}</li>
                        })}
                    </ul>
                </div>
                <div className='flex-1 min-w-[50%]'>
                    <p className='text-l lg:text-xl font-bold'>Cons</p>
                    <ul className='list-disc ml-6 mt-2'>
                        {props.cons && (props.cons).map((i) => {
                            return <li key={i}>{i}</li>
                        })}
                    </ul>
                </div>
            </div>
            <hr className='mt-8' />
        </div>
    )
}