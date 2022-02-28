export default function Badge ({verified, type}){
    return (
        <div className="rounded-3xl">
            {verified != '' ? (
                <div className="bg-[#005BBC] text-white">
                    Verified
                </div>
            ) : (
                <div className="bg-white text-[#005BBC] border-[#005BBC] border">
                    Military
                </div>
            )}

        </div>
    );
}