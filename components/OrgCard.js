import Link from "next/link";
import Badge from "./Badge/badge";

function OrgCard({ titles, values, orgIndex, open }) {
  const [
    orgName,
    type,
    activeFundraise,
    donationLinks,
    largeDonationsContact,
    englishDesc,
    cause,
    spendingTowards,
    acomplishments,
    backedBy,
    paymentMethod,
    crypto,
    socials,
    translation,
    photos,
    frenchDesc,
    germanDesc,
    spanishDesc,
    italianDesc,
    polishDesc,
    romanianDesc,
    prepForWeb,
    verified
  ] = values;

  return (
    <div className="bg-[#F2F6FF] rounded-3xl w-full mb-5 h-100 flex flex-col justify-between">
      <Link href={`/${orgIndex}`}>
        <a>
          <div className="container h-3/8 w-full rounded-lg  mb-2">
            <div className="h-8"></div>
            {/* <Image //Not yet ready to be pulled in from the database
              alt="Organization Logo"
              className="object-cover rounded-t-lg"
              src={photos}
              width="100%"
              height="100%"
            ></Image> */}
          </div>
          <Badge verified={verified}/>
          <h1 className="mx-5 text-3xl text-black mb-3 font-extrabold ">
            {orgName}
          </h1>
          <p className="mx-5 text-l mb-2">{englishDesc}</p>
        </a>
      </Link>
      <div className="flex mb-6 mt-5 px-4">
        <div
          onClick={open}
          className="container text-xl rounded-md font-boldest text-white text-center bg-black mx-4 mb-2 ring-2 ring-black hover:bg-[#ffd700] hover:ring-3 hover:ring-[#0057b7] hover:text-black "
        >
          Donate Now
        </div>
      </div>
    </div>
  );
}
export default OrgCard;
