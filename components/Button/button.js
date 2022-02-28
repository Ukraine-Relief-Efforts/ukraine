import Link from "next/link";

export default function Button ({onClick, value, href, target}) {
    return (
        <a 
            {...(onClick != '' && {onClick})} 
            {...(href != '' && {href})} 
            {...(target != '' && {target})}
            className="w-full cursor-pointer"
        >
            <div className="flex justify-center 
                w-full py-3 rounded-2xl
                bg-[#005BBC] text-white
                hover:bg-[#1E429F]
                focus:border-4 focus:border-[#1E429F]
                text-lg font-bold leading-6
            ">
                {value}
            </div>
        </a>
    )
}