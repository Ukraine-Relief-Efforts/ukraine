import Link from "next/link";
import Badge from "./Badge/badge";
import Button from "./Button/button";

function OrgCard({ titles, values, orgIndex, open }) {
  const [
    orgName,
    donationLinks,
    largeDonationsContact,
    englishDesc,
    cause,
    spendingTowards,
    acomplishments,
    backedBy,
    paymentMethod,
    crypto,
    facebook,
    instagram,
    twitter,
    website,
    bannerImage
  ] = values;
  // console.log(values);
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
          <Badge cause={cause}/>
          <h1 className="mx-5 text-3xl text-black mb-3 font-extrabold ">
            {orgName}
          </h1>
          <p className="mx-5 text-l mb-2">{englishDesc}</p>
        </a>
      </Link>
      <div className="flex mb-6 mt-5 px-4">
        <Button onClick={open} value='Learn More'/>
      </div>
    </div>
  );
}
export default OrgCard;
