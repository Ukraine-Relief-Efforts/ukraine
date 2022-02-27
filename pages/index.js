import sheets from "../lib/sheets";
import OrgCard from "/components/OrgCard";
import Image from "next/image";
import Link from "next/link";

export default function Home(props) {
  return (
    <div className="bg-blue-50">
    <div className="p-12">
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
        <h3 className="font-bold text-xl mt-8">
          Organizations
        </h3>
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
    </div>
  );
}

export async function getStaticProps() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "General organizations",
  });
  const [title, ...rows] = response.data.values;

  return {
    props: {
      title,
      rows,
    },
    revalidate: 10,
  };
}
