import styles from './hero.module.css';

export default function Hero(props) {
    return (
        <div className='mt-24'>
            <div>
                <h1 className={`${styles.h1} font-extrabold text-5xl md:text-7xl lg:text-8xl inline leading-none`}>{props.title} </h1>
            </div>
            <div className=' my-8 md:my-12 lg:my-20 text-2xl md:text-2xl lg:text-4xl'>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

