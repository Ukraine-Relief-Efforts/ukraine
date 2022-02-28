import styles from './hero.module.css';
import Button from '../Button/button';
import fbIcon from '../../public/sample_icon.png';

export default function Hero () {
    return (
        <div className='mt-24 mb-14'>
            <div>
                <h1 className={`${styles.h1} font-extrabold text-5xl md:text-7xl lg:text-8xl inline leading-none`}>Help </h1>
                <span className={`${styles.ukraine} font-extrabold px-2 py-0.25 text-5xl md:text-7xl lg:text-8xl rounded-lg md:rounded-xl lg:rounded-2xl leading-none`}>
                    Ukraine
                </span>
                <h1 className={`${styles.h1} font-extrabold text-5xl md:text-7xl lg:text-8xl inline leading-none`}> Now</h1>
            </div>
            <div className=' my-8 md:my-12 lg:my-20 w-full sm:w-3/4'>
                <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold leading-tight lg:leading-snug'>Simplifying donations vetting.</h3>
                <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold leading-tight lg:leading-snug'>Choose Vet. Support Ukrainian civilians and military.</h3>
            </div>
        </div>
    )
}