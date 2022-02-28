import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Modal from "react-modal";

export default function OrgPage({ orgData }) {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    socials,
    translation,
    photos,
    frenchDesc,
  ] = orgData;

  return (
    <>
      <div>
        <h1 className="text-5xl font-black">{orgName}</h1>
        <div
          id="links-area"
          className="mt-12 flex flex-wrap justify-between items-center"
        >
          <div>
            {donationLinks.split("\n").map((link, index) => {
              return (
                <>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                      className="container transition duration-200 mr-4 ease-in-out text-l rounded-md font-bold px-14 py-3 text-white text-center bg-uablue-default mb-2  hover:bg-uablue-accent"
                    >
                      {index == 0 ? "Donate Now " : "Donation Link " + index}
                    </a>
                  )}
                </>
              );
            })}
          </div>
          <div id="socials" className="flex items-center">
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
      </div>
    </>
  );
}
