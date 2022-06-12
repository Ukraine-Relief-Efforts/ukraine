import Link from "next/link";
import Badge from "./Badge/badge";
import Button from "./Button/button";
import Image from "next/image";

function OrgCard({ titles, values, orgIndex, open, whiteText }) {

  const orgName = values.organizationName;
  const donationLinks = values.donationLink;
  const largeDonationsContact = (values.largeDonationsContact == null ? "" : values.contactForLargeDonations.json.content[0].content[0].value);
  const englishDesc = (values.description == null ? "" : values.description.json.content[0].content[0].value);
  const cause = values.cause;
  const spendingTowards = values.howWillTheySpendDonations.json.content[0].content[0].value;
  const acomplishments = (values.whatTheyHaveAccomplishedSoFar == null ? "" : values.whatTheyHaveAccomplishedSoFar);
  const backedBy = (values.institutionalBacking == null ? "" : values.institutionalBacking.json.content[0].content[0].value);
  const paymentMethod = (values.paymentMethod == null ? "" : values.paymentMethod.json.content[0].content[0].value);
  const crypto = values.supportsCryptocurrency;
  const instagram = values.instagram;
  const facebook = values.facebook;
  const twitter = values.twitter;
  const website = values.organizationWebsite;
  const bannerImage = values.bannerImage.url;
  const smallOrg = values.smallOrganization;
  const bannerImage2 = values.bannerImage.url;
  
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
