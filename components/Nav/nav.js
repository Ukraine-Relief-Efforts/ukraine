import Image from "next/image";
import logo from '../../public/logo.png'
import Link from "next/link"

export default function NavBar () {
    return (
        <div>
            <div className="flex flex-row items-center gap-6 font-bold text-base">
                <div className="w-10">
                    <Image 
                        src={logo}
                        alt='Ukraine Donations'
                        layout="intrinsic"
                    />
                </div> 
                <Link href="about">
                    <a className="leading-tight">About us</a>
                </Link>
                <a href="#" className="leading-tight">Apply for funding</a>
            </div>
            
        </div>
    )
}