import { useEffect } from "react";
import sheets from "../lib/sheets";
import { useRouter } from "next/router";
import OrgPage from "/components/OrgPage";
import Layout from "../components/layout";

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
    <Layout>
      <div className="mt-8"></div>
      <OrgPage className="mt-4" orgData={props.data} showFrontPageLink={true}></OrgPage>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await getSpreadSheet();
  const numRows = response.data.values.length - 1;

  const paths = [];
  for (let i = 1; i <= numRows; i++) {
    paths.push({ params: { row: (i).toString() } });
  }
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { row } }) {
  const response = await getSpreadSheet();
  if (row === "0" || parseInt(row) > response.data.values.length -1) row = "1";
  return {
    props: {
      data: response.data.values[(parseInt(row))]
    },
    revalidate: 10,
  };
}

async function getSpreadSheet() {
  return await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Organizations (English)",
  });
}
