import sheets from "../lib/sheets";
import OrgCard from "/components/OrgCard";
import Image from "next/image";
import Link from "next/link";

export default function Home(props) {
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
    range: "General organizations",
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
