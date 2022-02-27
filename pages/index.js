import React, { useState, useEffect } from "react"
import sheets from "../lib/sheets";
import OrgCard from "/components/OrgCard";
import Image from "next/image";
import Link from "next/link";
import Tabs from "/components/Tabs";

export default function Home(props) {
  const tabs = ["Military", "Food", "Humanitarian"];
  const [openTab, setOpenTab] = useState("Military");
  const tabGroup = props.rows.filter(
    (row) => row[4].toLowerCase().includes(
    openTab.toLowerCase()
  ));

  return (
    <div className="m-12">
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

      <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          {tabs.map((tab) => {
            return (
              <li
                key={tab}
                className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              >
                <a key={tab}
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded " +
                    "block leading-normal " +
                    (openTab === tab
                      ? "text-white bg-blue-600"
                      : "text-blue-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(tab)
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
    </div>

      {tabGroup.map((row, index) => {
        return (
          <Link href={`/${index + 1}`} key={index}>
            <a>
              <OrgCard key={index} titles={props.title} values={row}></OrgCard>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Organizations (English)",
  });
  console.log(response.data)
  const [title, ...rows] = response.data.values;

  return {
    props: {
      title,
      rows,
    },
    revalidate: 10,
  };
}
