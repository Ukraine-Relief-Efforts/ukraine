import { useState } from "react";
import { useRouter } from "next/router";
import sheets from "../lib/sheets";
import OrgCard from "../components/OrgCard";
import Tabs from "/components/Tabs";
import OrgPage from "../components/OrgPage";
import Image from "next/Image";
import Hero from '../components/Hero/hero';
import Layout from "../components/layout";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function Home(props) {
  const router = useRouter();

  const tabs = ["Military", "Humanitarian"];
  const [openTab, setOpenTab] = useState("Military");
  const tabGroup = props.rows.filter((row) => {
    return row[4] ? row[4].toLowerCase().includes(openTab.toLowerCase()): false
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [orgData, setOrgData] = useState([]);

  function openModal(rowNumber, rowData) {
    setIsOpen(true);
    window.history.pushState(null, null, `/${rowNumber}`);
    setOrgData(rowData);
  }

  function closeModal() {
    setIsOpen(false);
    window.history.pushState(null, null, `/`);
  }

  return (
    <Layout>
      <Hero />
      <div className="w-full flex justify-center">
        <ul
          className="w-1/2 flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          {tabs.map((tab) => {
            return (
              <li
                key={tab}
                className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              >
                <a
                  key={tab}
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded " +
                    "block leading-normal " +
                    (openTab === tab
                      ? "text-white bg-blue-600"
                      : "text-blue-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(tab);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="text-center">
        <h2>Find organizations by type</h2>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => {document.querySelector("body").style.overflow = "hidden"}}
        onAfterClose={() => {document.querySelector("body").style.overflow = "auto"}}
        onRequestClose={closeModal}
        contentLabel="Organization Page"
        className={"ReactModal__Content p-0 w-100 lg:max-w-5xl mx-auto my-12 max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white rounded-[50px]"}
      >
        <OrgPage orgData={orgData}></OrgPage>
        <button className="h-10 w-10 object-cover absolute top-8 right-8 bg-gray-600 rounded-full flex justify-center items-center" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </Modal>
      <div className="grid gap-6 grid-cols-12 w-100 mt-4 h-713 padding-2">
        {tabGroup.map((row, index) => {
          return (
            <div
              key={index}
              className="container md:col-span-6 xl:col-span-4 col-span-12 flex"
            >
              <OrgCard
                orgIndex={row[row.length - 1]}
                titles={props.title}
                values={row}
                open={() => openModal(row[row.length - 1], row)}
              ></OrgCard>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Organizations (English)",
  });
  console.log(response.data.values[0]);
  const [title, ...rows] = response.data.values;
  rows.map((data, initialIndex) => data.push(initialIndex + 1));

  return {
    props: {
      title,
      rows,
    },
    revalidate: 10,
  };
}
