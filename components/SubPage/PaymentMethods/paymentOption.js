import { useState } from "react"
import arrow_right from '../../../public/assets/icons/arrow_right.svg'
import arrow_down from '../../../public/assets/icons/arrow_down.svg'
import Image from "next/image";
import PaymentDesc from "./paymentDesc";

export default function PaymentOption(props) {
    const [isActive, setActive] = useState(props.active);

    return (
        <div>
            <div className="flex flex-row mt-5">
                <div className="w-7 shrink-0 mr-2">
                {isActive ?
                    <Image src={arrow_down} alt="expanded" onClick={() => setActive(!isActive)}/> :
                    <Image src={arrow_right} alt="collapsed" onClick={() => setActive(!isActive)}/>
                    }
                </div>
                <div className="w-full">
                    <h4 className="text-2xl font-bold text-uablue-default mb-4" onClick={() => setActive(!isActive)}>
                    {props.payDesc[0]}
                    </h4>
                    {isActive &&
                        <PaymentDesc payDesc={props.payDesc}/>
                    }
                </div>
            </div>
            <hr></hr>
        </div>
    )
}
