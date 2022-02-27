import sheets from "../lib/sheets";
import OrgCard from "/components/OrgCard";
import Link from "next/link";

export default function Home(props) {
  return (
    <div className="m-12">
      <h1 className="text-4xl font-bold">
        Help Ukraine Now
      </h1>
      {props.rows.map((row, index) => {
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
    range: "Sheet1",
  });
  console.log()

  const [title, ...rows] = response.data.values;
  
  return {
    props: {
      title,
      rows,
    },
    revalidate: 10,
  };
}
