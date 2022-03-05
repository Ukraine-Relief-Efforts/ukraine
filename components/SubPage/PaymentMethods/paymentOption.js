import { useState } from "react"

export default function PaymentOption(props) {
    const [isActive, setActive] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion-item">
                <div 
                    className="accordion-title"
                    onClick={() => setActive(!isActive)}
                >
                    <div>Testing</div>
                    <div>+</div>
                </div>
            {isActive &&
                <div className="accordion-content">This is some testing contents</div>
            }
            </div>
      </div>
    )
}