import { useEffect } from "react";
import sheets from "../lib/sheets";
import { useRouter } from "next/router";
import OrgPage from "/components/OrgPage";
import Modal from "react-modal";

export default function Home(props) {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
      <OrgPage orgData={props.data} showFrontPageLink={true}></OrgPage>
  );
}

export async function getStaticPaths() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Organizations (English)",
  });

  const numRows = response.data.values.length - 1;

  const paths = [];
  for (let i = 0; i < numRows; i++) {
    paths.push({ params: { row: (i + 1).toString() } });
  }
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { row } }) {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: `Organizations (English)!${parseInt(row) + 1}:${parseInt(row) + 1}`,
  });

  return {
    props: {
      data: response.data.values[0],
    },
    revalidate: 10,
  };
}
