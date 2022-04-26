export default function Badge ({value}){
    return (
        <div className="bg-white text-sm font-semibold border-[#E5E5E5] border rounded-lg py-1 px-4 inline-block">
            {value}
        </div>
    );
}