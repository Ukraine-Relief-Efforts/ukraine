import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge/badge";
import Button from "./Button/button";

export default function OrgPage({ orgData, showFrontPageLink, expandModal}) {
  const [
    orgName,
    donationLinks,
    largeDonationsContact,
    englishDesc,
    cause,
    spendingTowards,
    accomplishments,
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
  ] = orgData;

  const bannerViewableUrl = typeof bannerImage2 === 'string' ? bannerImage2 : '';

  return (
    <div>
      <div className="w-100 h-60 lg:h-80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            bannerViewableUrl == ""
              ? "/assets/default_cover.png"
              : bannerViewableUrl
          }
          alt="Organization Logo"
          className=" w-full h-full object-cover object-center"
        />
      </div>
      {showFrontPageLink && (
        <div className="mt-12 md:px-20 lg:px-40">
          <Link href="/">
            <a className="h-12 font-bold">&lt; BROWSE FUNDRAISERS</a>
          </Link>
        </div>
      )}
      <div
        id="organization"
        className={showFrontPageLink ? "px-0 pt-8 md:px-20 lg:px-40" : "p-8 md:py-12 md:px-24 lg:px-44"}
      >
        <h1 className="text-4xl font-black">{orgName}</h1>
        <div
          id="links-area"
          className="mt-10 flex flex-wrap gap-8 w-100 justify-between items-center"
        >
          <div className="flex flex-wrap flex-row content-center w-full md:w-64">
            {/* conditionally render donation link*/}
            {typeof donationLinks === "string" && (
              <Button
                value="Donate Now"
                href={donationLinks.trim()}
                target="_blank"
              />
            )}
          </div>
          <div id="links" className="flex flex-wrap gap-5 md:gap-7 items-center">
            {website && (
              <a
                href={website.trim()}
                target="_blank"
                rel="noreferrer"
                className=" text-uablue-default text-lg md:text-xl font-bold underline underline-offset-4 hover:text-uablue-accent"
              >
                Website
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noreferrer" className="flex items-center">
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="instagram"
                  height="28px"
                  width="28px"
                ></Image>
              </a>
            )}
            {facebook && (
              <a href={facebook} target="_blank" rel="noreferrer" className="flex items-center">
                <Image
                  src="/assets/icons/facebook.svg"
                  alt={facebook}
                  height="28px"
                  width="28px"
                ></Image>
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noreferrer" className="flex items-center">
                <Image
                  src="/assets/icons/twitter.svg"
                  alt="twitter"
                  height="28px"
                  width="28px"
                ></Image>
              </a>
            )}
          </div>
        </div>
        <section className="max-w-5xl mt-12">
          <h2 className="font-black text-xl">Introduction</h2>
          <p className="mt-6 mb-3">{englishDesc}</p>
          <Badge value={cause}/>
          {spendingTowards && (
            <>
              <h2 className="font-black text-xl mt-12">
                How they will spend donations
              </h2>
              <p className="mt-6">{spendingTowards}</p>
            </>
          )}
          {accomplishments && (
            <>
              <h2 className="font-black text-xl mt-12">
                What they&apos;ve accomplished so far
              </h2>
              <p className="mt-6">
                <a
                  href={accomplishments}
                  target="_blank"
                  rel="noreferrer"
                  className=" text-uablue-default underline underline-offset-4 text-base font-bold hover:text-uablue-accent"
                >
                  Check out their past work
                </a>
              </p>
            </>
          )}
          {backedBy && (
            <>
              <h2 className="font-black text-xl mt-12">
                Institutions that support them
              </h2>
              <p className="mt-6">{backedBy}</p>
            </>
          )}
          {largeDonationsContact && (
            <>
              <h2 className="font-black text-xl mt-12">Contact information</h2>
              <p className="mt-6">{largeDonationsContact}</p>
            </>
          )}
          <h2 className="font-black text-2xl mt-12 mb-4">Payment Method</h2>
          <div className="mt-2 flex flex-wrap gap-2 mb-16">
            {/* conditionally render payment method */}
            {typeof paymentMethod === "string" &&
              paymentMethod.split(",").map((method, index) => {
                return <Badge key={"method-" + index} value={method} />;
              })}
            {crypto == "yes" && (
              <div className="px-4 py-1 mt-4 border-2 rounded-full border-uablue-default text-uablue-default text-center text-sm">
                Crypto
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
