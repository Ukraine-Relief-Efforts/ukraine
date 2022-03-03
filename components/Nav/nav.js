import Image from "next/image";
import logo from '../../public/logo.png'
import Link from "next/link"

export default function NavBar () {
    return (
        <div>
            <div className="flex flex-row items-center justify-between gap-6 md:gap-10 lg:gap-16">
                <div className="w-10 sm:w-14 lg:w-16">
                    <Link href="/">
                        <a>
                            <Image 
                                src={logo}
                                alt='Ukraine Donations'
                                layout="intrinsic"
                            />
                        </a>
                    </Link>
                </div>
                <div className="flex flex-row items-center gap-4 lg:gap-10 font-bold text-base md:text-xl lg:text-2xl "> 
                    <Link href="about">
                        <a className="leading-tight text-gray-400 hover:text-gray-800">About us</a>
                    </Link>
                    <a href="#" className="leading-tight text-gray-400 hover:text-gray-800">Apply for funding</a>
                </div>
            </div>
            
        </div>
    )
}