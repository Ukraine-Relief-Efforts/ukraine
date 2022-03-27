import styles from "./hero.module.css";

export default function Hero(props) {
    return (
        <div className="mt-24 lg:pl-24">
            <div>
                <h1 className={`${styles.h1} font-bold sm:font-extrabold text-5xl md:text-6xl inline leading-none`}>{props.title} </h1>
            </div>
            <div className="font-light my-6 md:my-8 lg:my-10">
                <p className="text-2xl md:text-3xl">{props.description}</p>
                {props.paragraph && <p className="mt-4">{props.paragraph}</p>}
                {props.paragraph2 && <p className="mt-4">{props.paragraph2}</p>}
            </div>
        </div>
    )
}

