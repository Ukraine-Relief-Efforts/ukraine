import sheets from "../lib/sheets";
import { useRouter } from "next/router";
import OrgPage from "/components/OrgPage";
import Modal from "react-modal";

export default function Home(props) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
      <OrgPage></OrgPage>
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
