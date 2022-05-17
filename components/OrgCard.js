import Link from "next/link";
import Badge from "./Badge/badge";
import Button from "./Button/button";
import Image from "next/image";

function OrgCard({ titles, values, orgIndex, open, whiteText }) {
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
    <div className={`w-full mb-5 h-100 flex flex-col justify-between  ${whiteText ? "text-white" : ""}`}>
      <a
        onClick={open}
        className='cursor-pointer'
      >
        <div className="w-full mb-2">
          <div className="h-56 w-full relative rounded-xl overflow-hidden bg-white">
            <Image
              src={bannerViewableUrl == '' ? '/assets/default_cover.png' : bannerViewableUrl}
              alt={orgName}
              layout='fill'
              objectFit="cover"
              objectPosition={'center','center'}
              loading="lazy"
            />
            {/* <div className='absolute left-4 top-4 float-left'>
              <Badge value={cause} />
            </div> */}
          </div>
        </div>
        <div className="m-2 mt-4">
            <h1 className=" font-bold text-xl mb-4">
              {orgName}
            </h1>
            <p className="text-base line-clamp-2">{englishDesc}</p>
        </div>
      </a>
      <div className="flex mb-6 mt-5 px-2 max-w-[15rem]">
        <Button onClick={open} value='Learn more' color="yellow"/>
      </div>
    </div>
  );
}
export default OrgCard;
