import PaymentOption from './paymentOption';


export default function PaymentMethods(props) {
    return (
        <div>
            {props.rows.map((row,index) => {
                return (
                    <div key={`pay_method${index}`}>
                        <PaymentOption payDesc={row} />
                    </div>
                )
            })}
        </div>
    )
}