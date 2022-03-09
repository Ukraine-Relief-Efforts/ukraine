import styles from './hero.module.css';
import Button from '../Button/button';
import fbIcon from '../../public/sample_icon.png';

export default function Hero () {
    return (
        <div className='mt-24 mb-14'>
            <div>
                <h1 className={`${styles.h1} font-extrabold text-5xl md:text-6xl inline leading-none`}>Help </h1>
                <span className={`${styles.ukraine} font-extrabold px-2 py-0.25 text-5xl md:text-6xl rounded-lg md:rounded-xl lg:rounded-2xl leading-none`}>
                    Ukraine
                </span>
                <h1 className={`${styles.h1} font-extrabold text-5xl md:text-6xl inline leading-none`}> Now</h1>
            </div>
            <div className=' 
                my-6 md:my-8 
                w-full sm:w-3/4'>
                <h3 className='
                    text-2xl md:text-3xl 
                    font-medium leading-tight lg:leading-snug'
                    >Trusted fundraisers you can donate to now.</h3>
                <h3 className='
                    text-xl md:text-3xl 
                    font-normal leading-tight lg:leading-snug
                    pt-4'
                    >A database of pre-vetted organizations and small fundraisers providing emergency aid to people in Ukraine.</h3>
            </div>
        </div>
    )
}