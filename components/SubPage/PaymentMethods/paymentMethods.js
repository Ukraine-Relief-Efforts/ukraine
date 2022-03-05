import PaymentOption from './paymentOption';


export default function PaymentMethods(props) {
    
    const payMethods = props.ukraine ? props.rows.filter((row) => row[4]==='Yes') : props.rows.filter((row) => row[5]==='Yes')
    return (
        <div>
            {payMethods.map((row,index) => {
                return (
                    <PaymentOption payDesc={row} key={`pay_method${index}`} active={props.ukraine ? true : false}/>
                )
            })}
        </div>
    )
}