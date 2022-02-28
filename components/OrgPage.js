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
  

  return (
    <>
        OrgPage
        {/* <div className="m-5 p-5 shadow-lg rounded-lg border border-gray-100">
          {orgData.map((item, index) => {
            return (
              <div key={index} className="mb-4">
                {item}
              </div>
            );
          })}
      </div> */}
    </>
  );
}
