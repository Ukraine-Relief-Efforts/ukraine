import sheets from "../lib/sheets";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="m-5">
      <div className="m-5 p-5 shadow-lg rounded-lg border border-gray-100">
        {props.data.map((item, index) => {
          return (
            <div key={index} className="mb-4">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "General Organizations",
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
    range: `General Organizations!${parseInt(row) + 1}:${parseInt(row) + 1}`,
  });

  return {
    props: {
      data: response.data.values[0],
    },
    revalidate: 10,
  };
}
