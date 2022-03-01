export default function Badge ({value}){
    return (
        <div className="bg-white text-[#005BBC] text-sm font-semibold border-[#005BBC] border rounded-3xl py-1 px-4 inline-block">
            {value}
        </div>
    );
}