import { useState } from "react";
import sheets from "../lib/sheets";
import OrgCard from "/components/OrgCard";
import Image from "next/image";
import Link from "next/link";
import Tabs from "/components/Tabs";
import useScript from "../lib/useScript";

export default function Home(props) {
  const tabs = ["Humanitarian", "Military"];
  const items = ["All"].concat(tabs);
  const [openTab, setOpenTab] = useState("All");
  const tabGroup = props.rows.filter((row) =>
    row[4].toLowerCase().includes(openTab.toLowerCase())
  );
  const allGroups =  props.rows.filter((row) =>
        tabs.map((tab) => {
          row[4].toLowerCase().includes(tab.toLowerCase())
        })
  )
  return (
    <div className="m-12">
        {useScript('https://unpkg.com/flowbite@1.3.4/dist/flowbite.js')}
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

      <div className="text-center">
        <h2>Find organizations by type</h2>
      </div>

        <div className="w-full flex justify-center">
           <button id="dropdownButton" data-dropdown-toggle="dropdownMenu"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button">{openTab} <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor"
                                                       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg></button>
            <div id="dropdownMenu"
                 className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul className="py-1" aria-labelledby="dropdownButton">
                  {items.map((item) => {
                    return (
                    <li key={item}>
                        <a href="#"
                           className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                           onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(item);
                           }}
                        >{item}</a>
                    </li>
                    );
                  })}
                </ul>
            </div>
        </div>

      <div className="w-full flex justify-center">
        <ul
          className="w-1/2 flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          {items.map((item) => {
            return (
              <li
                key={item}
                className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              >
                <a
                  key={item}
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded " +
                    "block leading-normal " +
                    (openTab === item
                      ? "text-white bg-blue-600"
                      : "text-blue-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(item);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="grid gap-4 grid-cols-12 w-100 mt-4 h-713 padding-2 font-open">
        {openTab === "All" && allGroups.map((row, index) => {
          return (
            <div key={index} className="container lg:col-span-4 col-span-12 flex">
              <OrgCard
                orgIndex={index + 1}
                titles={props.title}
                values={row}
              ></OrgCard>
            </div>
          );
        })}
        {openTab !== "All" && tabGroup.map((row, index) => {
          return (
            <div key={index} className="container lg:col-span-4 col-span-12 flex">
              <OrgCard
                orgIndex={index + 1}
                titles={props.title}
                values={row}
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
