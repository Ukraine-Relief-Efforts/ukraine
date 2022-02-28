import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import Modal from "react-modal"

export default function OrgPage({ orgData }) {
  useEffect(() => {
    router.prefetch('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [modalIsOpen , setIsOpen] = useState(true)
  const router = useRouter();
  function closeModal(e){
    e.preventDefault();
    setIsOpen(false);
  }
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  

  return (
    <>
      <Modal
        isOpen={modalIsOpen} // The modal should always be shown on page load, it is the 'page'
        onRequestClose={closeModal}
        contentLabel="Post modal"
      >
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
      </Modal>
    </>
  );
}
