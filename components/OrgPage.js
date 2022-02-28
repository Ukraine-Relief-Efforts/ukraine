import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import Modal from "react-modal"

export default function OrgPage({ orgData }) {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
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
          <h1 className="text-5xl font-black mb-4">{orgName}</h1>
          {donationLinks.split("\n").map((link, index) => {
          return (
            <>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  className="container transition duration-200 ease-in-out text-l rounded-md font-bold px-14 py-3 text-white text-center bg-uablue-default mb-2  hover:bg-uablue-accent"
                >
                  {index == 0 ? 'Donate Now ' : 'Donation Link ' + index}
                </a>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
