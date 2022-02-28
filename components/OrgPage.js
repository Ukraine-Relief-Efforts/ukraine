import Image from "next/image";
import Modal from "react-modal";

export default function OrgPage({ orgData }) {
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
    translation,
    photos,
    frenchDesc,
  ] = orgData;

  return (
    <>
    <div>
      <div className="w-100">
        <img src="/assets/default_cover.png" alt="Organization Logo"/>
      </div>
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
            {socials &&
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
        <section className="container max-w-5xl mt-12">
          <h2 className="font-black text-xl">
            Introduction
          </h2>
          <p>
            {englishDesc}
          </p>
          <h2 className="font-black text-xl mt-12">
            How we will spend donations
          </h2>
          <p>
            {spendingTowards}
          </p>
          <h2 className="font-black text-xl mt-12">
            What we&apos;ve accomplished so far
          </h2>
          <p>
            To read about our accomplishments, please visit: <br></br>
            <a className="" href={accomplishments} target="_blank" rel="noreferrer">
              {accomplishments}
            </a>
          </p>
          <h2 className="font-black text-xl mt-12">
            Contant information
          </h2>
          <p>
            {largeDonationsContact}
          </p>
        </section>
        </div>
      </div>
    </>
  );
}
