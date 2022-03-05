import { useState } from "react"
import arrow_right from '../../../public/assets/icons/arrow_right.svg'
import arrow_down from '../../../public/assets/icons/arrow_down.svg'
import Image from "next/image";
import PaymentDesc from "./paymentDesc";

export default function PaymentOption(props) {
    const [isActive, setActive] = useState(true);

    return (
        <div className="mt-8">
            <div className="mb-4 flex flex-row mt-10">
                <div className="w-7 shrink-0 mr-2">
                {isActive ? 
                    <Image src={arrow_down} alt="expanded"/> :
                    <Image src={arrow_right} alt="collapsed"/>
                    }
                </div>
                <div className="w-full">
                    <h4 className="text-2xl font-bold text-uablue-default mb-4">
                    Monobank
                    </h4>
                    {isActive &&
                        <PaymentDesc />
                    }
                </div>
            </div>
            <hr className="mt-10"></hr>
        </div>
    )
}