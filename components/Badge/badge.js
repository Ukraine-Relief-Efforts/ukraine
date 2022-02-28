export default function Badge ({cause}){
    return (
        <div className="bg-white text-[#005BBC] text-sm lg:text-base font-semibold border-[#005BBC] border rounded-3xl py-1 px-4 inline-block">
            {cause}
        </div>
    );
}