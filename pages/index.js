import { useState } from "react";
import { useRouter } from "next/router";
import sheets from "../lib/sheets";
import OrgCard from "/components/OrgCard";
import OrgPageModal from "/components/OrgPageModal";
import Image from "next/image";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function Home(props) {
  const router = useRouter();

  const tabs = ["Military", "Humanitarian"];
  const [openTab, setOpenTab] = useState("Military");
  const tabGroup = props.rows.filter((row) =>
    row[4].toLowerCase().includes(openTab.toLowerCase())
  );

  const [modalIsOpen, setIsOpen] = useState(false);
  const [orgData, setOrgData] = useState([]);

  function openModal(rowNumber) {
    setIsOpen(true);
    window.history.pushState(null, null, `/${rowNumber}`);
  }

  return (
    <div className="m-12">
      <div className="absolute">{modalIsOpen ? "open" : "closed"}</div>
      <div className="text-center">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          layout="intrinsic"
          width={100}
          height={140}
        ></Image>
        <h1 className="text-4xl font-bold">Help Ukraine Now</h1>
        <h2 className="my-4">Help fund the resistance</h2>
      </div>
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
        { modalIsOpen && <OrgPageModal></OrgPageModal> }
      <div className="grid gap-4 grid-cols-12 w-100 mt-4 h-713 padding-2 font-open">
        {tabGroup.map((row, index) => {
          return (
            <div
              key={index}
              className="container lg:col-span-4 col-span-12 flex"
            >
              <OrgCard
                orgIndex={index + 1}
                titles={props.title}
                values={row}
                open={() => openModal(index + 1)}
              ></OrgCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Organizations (English)",
  });
  console.log(response.data);
  const [title, ...rows] = response.data.values;

  return {
    props: {
      title,
      rows,
    },
    revalidate: 10,
  };
}
