import { useEffect } from "react";
import sheets from "../lib/sheets";
import { useRouter } from "next/router";
import OrgPage from "/components/OrgPage";
import Layout from "../components/layout";
import { queryContentful } from "../lib/contentful/Api";
import { fundraiserQuery } from "../graphql/queries";

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
	console.log("getStaticPaths()");
  const response = await getSpreadSheet();
  const numRows = response.length - 1;

  const paths = [];
  for (let i = 1; i <= numRows; i++) {
    paths.push({ params: { row: response[i].slug } });
  }
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { row } }) {
	console.log(row);
  const response = await getSpreadSheet();
  //if (row === "0" || parseInt(row) > response.data.values.length -1) row = "1";
  
  var index;
  
  for(let i = 0; i < response.length; i++)
  {
	  if(response[i].slug === row)
	  {
		  index = i;
		  break;
	  }
  }
  
  return {
    props: {
      data: response[index]
    },
    revalidate: 10,
  };
}

async function getSpreadSheet() {
	const data = await queryContentful(fundraiserQuery);
//   console.log("contentful graphql query:", data);
	var rows = [];
	
	for(var i = 0; i < data.data.fundraiserCollection.items.length; i++)
	{
		rows.push(data.data.fundraiserCollection.items[i]);
	}
	
	return rows;
	
  return await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Organizations (English)",
  });
}
