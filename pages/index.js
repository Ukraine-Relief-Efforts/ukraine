import sheets from "../lib/sheets";
import Link from "next/link";

export default function Home(props) {
  return (
    <div className="m-5">
      {props.rows.map((row, index) => {
        return (
          <Link href={`/${index + 1}`} key={index}>
            <a>
              <div className="m-5 p-5 shadow-lg rounded-lg border border-gray-100">
                {row.map((item, index) => {
                  return (
                    <div key={index} className="col-md-4">
                      <div className="mb-4">
                        {props.title[index]}: {item}
                      </div>
                    </div>
                  );
                })}
              </div>
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

  const [title, ...rows] = response.data.values;

  return {
    props: {
      title,
      rows,
    },
    revalidate: 10,
  };
}
