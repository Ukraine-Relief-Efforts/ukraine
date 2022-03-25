import Link from "next/link";
import Badge from "./Badge/badge";
import Button from "./Button/button";
import Image from "next/image";

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
    instagram,
    facebook,
    twitter,
    website,
    bannerImage,
    smallOrg,
    bannerImage2
  ] = values;

  const bannerViewableUrl =
    typeof bannerImage2 === "string"
      ? bannerImage2
      : "";

  return (
    <div className="bg-[#F2F6FF] w-full mb-5 h-100 flex flex-col justify-between rounded-3xl shadow-2xl">
      <a
        onClick={open}
        className='cursor-pointer'
      >
        <div className="w-full mb-2">
          <div className="h-56 w-full relative">
            <Image
              src={bannerViewableUrl == '' ? '/assets/default_cover.png' : bannerViewableUrl}
              alt={orgName}
              layout='fill'
              objectFit="cover"
              objectPosition={'center','center'}
              className='rounded-t-2xl'
            />
            {/* <div className='absolute left-4 top-4 float-left'>
              <Badge value={cause} />
            </div> */}
          </div>
        </div>
        <div className="m-6">
            <h1 className=" font-bold text-2xl mb-4">
              {orgName}
            </h1>
            <p className="text-base">{englishDesc}</p>
        </div>
      </a>
      <div className="flex mb-6 mt-5 px-4">
        <Button onClick={open} value='Learn More'/>
      </div>
    </div>
  );
}
export default OrgCard;
