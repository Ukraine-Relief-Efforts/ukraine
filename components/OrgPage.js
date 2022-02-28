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
          {orgData.map((item, index) => {
            return (
              <div key={index} className="mb-4">
                {item}
              </div>
            );
          })}
      </div>
    </>
  );
}
