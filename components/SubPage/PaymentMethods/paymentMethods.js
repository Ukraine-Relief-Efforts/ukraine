import PaymentOption from './paymentOption';


export default function PaymentMethods(props) {
    return (
        <div className='mt-24'>
            <div>
                <h1 className={`font-extrabold text-2xl lg:text-4xl`}>Common payment methods</h1>
            </div>
            <PaymentOption paymentTitle="PayPal" paymentDescription="Larger organizations receive a lot of funding, while smaller on-the-ground groups cannot get necessary funds because of smaller reach &amp; lack of vetting process to confirm their legitimacy." pros={["Pro1", "Pro2", "Pro3"]} cons={["Con1", "Con2", "Con3"]} />
            <PaymentOption paymentTitle="SWIFT" paymentDescription="Larger organizations receive a lot of funding, while smaller on-the-ground groups cannot get necessary funds because of smaller reach &amp; lack of vetting process to confirm their legitimacy." pros={["Pro1", "Pro2", "Pro3"]} cons={["Con1", "Con2", "Con3"]} />
            <PaymentOption paymentTitle="Crypto" paymentDescription="Larger organizations receive a lot of funding, while smaller on-the-ground groups cannot get necessary funds because of smaller reach &amp; lack of vetting process to confirm their legitimacy." pros={["Pro1", "Pro2", "Pro3"]} cons={["Con1", "Con2", "Con3"]} />
        </div>
    )
}