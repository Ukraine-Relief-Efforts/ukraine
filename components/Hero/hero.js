import styles from './hero.module.css';
import Button from '../Button/button';
import fbIcon from '../../public/sample_icon.png';
import Image from "next/image";

export default function Hero ({ urgentRef }) {
    function handleClick(e) {
        e.preventDefault();
        urgentRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="mt-24 mb-14 flex py-8 px-6 sm:px-16 sm:mt-8">
            {/* <div>
                <h1 className={`${styles.h1} font-bold sm:font-extrabold text-5xl md:text-6xl inline leading-none`}>Help </h1>
                <span className={`${styles.ukraine} font-bold sm:font-extrabold px-2 py-0.25 text-5xl md:text-6xl rounded-lg md:rounded-xl lg:rounded-2xl leading-none`}>
                    Ukraine
                </span>
                <h1 className={`${styles.h1} font-bold sm:font-extrabold text-5xl md:text-6xl inline leading-none`}> Now</h1>
            </div>
            <div className=' 
                my-6 md:my-8 
                w-full sm:w-3/4'>
                <h3 className='
                    text-2xl md:text-3xl 
                    font-light leading-tight lg:leading-snug'
                    ><span className='font-medium'>Trusted fundraisers</span> you can donate to now.</h3>
            </div> */}
            <div className="w-1/2 pr-6 flex flex-col">
                <h1 className={`${styles.h1} font-bold sm:font-extrabold text-5xl md:text-6xl inline leading-none`}>
                    No overhead, immediate impact
                </h1>
                <h3 className='
                    text-2xl md:text-3xl 
                    font-light leading-tight lg:leading-snug my-6'
                    >Support vetted Ukrainian fundraisers on the ground
                </h3>
                <div className="w-80">
                    <Button
                        value="Find your cause now 👇"
                        onClick={(e) => handleClick(e)}
                        target="_blank"
                    />
                </div>
            </div>
            <div className="w-1/2 flex flex-col">
                <div className="bg-gray-500 w-full h-96 mb-6 relative rounded-xl overflow-hidden">
                    <Image
                        src={"/assets/placeholder.gif"}
                        alt={"placeholder"}
                        layout="fill"
                        className="!object-cover"
                    />
                </div>
                <span className="text-sm text-[#bebebe] font-bold">Mihail evacuated over 1,000 people from Mariupol.
                    Support brave volunteer efforts in Ukraine.
                </span>
            </div>
        </div>
    )
}