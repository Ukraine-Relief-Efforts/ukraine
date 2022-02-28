import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";

export default function OrgPage({ orgData, showFrontPageLink }) {
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
    socials,
    facebook,
    twitter,
    website,
    bannerImage
  ] = orgData;
  console.log({socials})

  return (
    <>
    <div>
      <div className="w-100 pb-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bannerImage || "/assets/default_cover.png"} alt="Organization Logo"/>
      </div>
      {showFrontPageLink && (
        <Link href="/">
          <a className="pl-12 h-12 font-bold">&lt; BROWSE ORGANIZATIONS</a>
        </Link>
      )}
      <div id="organization" className="p-12">
      <h1 className="text-5xl font-black">{orgName}</h1>
        <div
          id="links-area"
          className="mt-12 flex flex-wrap w-100 justify-between items-center"
        >
          <div className="flex flex-wrap flex-row">
            {donationLinks.split("\n").map((link, index) => {
              return (
                <>
                {link && (
                    <div key={index} className="w-60 container transition duration-200 mr-4 ease-in-out text-l rounded-md font-bold px-14 py-3 text-white text-center bg-uablue-default mb-2 hover:bg-uablue-accent">
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className=""
                    >
                        {index == 0 ? "Donate Now " : "Donation Link " + index}
                    </a>
                    </div>
                  )}
                  </> 
              );
            })}
          </div>
          <div id="socials" className="flex flex-wrap items-center">
            {typeof socials === "string" &&  //Had to do this because I couldnt recognize undefined otherwise
              socials.split("\n").map((link, index) => {
                return (
                  <>
                    {link && (
                      <a
                        href={link.split(": ")[1]}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                        className="mr-8"
                      >
                        <Image
                          src={link.split(": ")[0] && `/assets/icons/${link.split(": ")[0].toLowerCase()}.svg`}
                          alt={link.split(": ")[0]}
                          height="20px"
                          width="20px"
                        ></Image>
                      </a>
                    )}
                  </>
                );
              })}
          </div>
        </div>
        <section className="max-w-5xl mt-12">
          <h2 className="font-black text-xl">
            Introduction
          </h2>
          <p className="mt-6">
            {englishDesc}
          </p>
          <div className="px-4 py-1 mt-4 border-2 rounded-full border-uablue-default text-uablue-default text-center w-44">
            {cause} Supplies
          </div>
          {spendingTowards && (
          <>
            <h2 className="font-black text-xl mt-12">
              How we will spend donations
            </h2>
            <p className="mt-6">
              {spendingTowards}
            </p>
          </>)}
          {accomplishments && (
          <>
            <h2 className="font-black text-xl mt-12">
              What we&apos;ve accomplished so far
            </h2>
            <p className="mt-6">
              To read about our accomplishments, please visit: <br></br>
              <a href={accomplishments} target="_blank" rel="noreferrer" className="text-blue-500 border-b-2 border-blue-500">
                CHECK OUT OUR WEBSITE
              </a>
            </p>
          </>)}
          {largeDonationsContact && (
            <>
              <h2 className="font-black text-xl mt-12">
                Contant information
              </h2>
              <p className="mt-6">
                {largeDonationsContact}
              </p>
            </>
          )}
          <h2 className="font-black text-2xl mt-12">
            Payment Method
          </h2>
          <p className="mt-2 flex">
            {paymentMethod.split(',').map((method, index) => {
              return (
                <div key={'method-'+index} className="px-4 py-1 mt-4 border-2 rounded-full border-uablue-default text-uablue-default text-center text-sm mr-2">
                  {method}
                </div>
              )
            })}
            {crypto == "yes" && (
              <div className="px-4 py-1 mt-4 border-2 rounded-full border-uablue-default text-uablue-default text-center text-sm">
                Crypto
              </div>
            )}
          </p>
        </section>
        </div>
      </div>
    </>
  );
}
