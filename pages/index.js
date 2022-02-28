import { useState } from "react";
import sheets from "../lib/sheets";
import OrgCard from "/components/OrgCard";
import Link from "next/link";
import Tabs from "/components/Tabs";
import Hero from '/components/Hero/hero'
import Nav from '/components/Nav/nav'
import Layout from "../components/layout";

export default function Home(props) {
  const tabs = ["Military", "Humanitarian"];
  const [openTab, setOpenTab] = useState("Military");
  const tabGroup = props.rows.filter((row) => row[4].toLowerCase().includes(openTab.toLowerCase()));

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

      <div className="grid gap-6 grid-cols-12 mt-4 h-713 padding-2 font-open">
        {tabGroup.map((row, index) => {
          return (
            <div key={index} className="container lg:col-span-4 md:col-span-6 col-span-12 flex">
              <OrgCard
                orgIndex={index + 1}
                titles={props.title}
                values={row}
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

  return {
    props: {
      title,
      rows,
    },
    revalidate: 10,
  };
}
