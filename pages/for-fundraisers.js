import Head from 'next/head'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from "../components/layout";
import Hero from "../components/SubPage/Hero/hero";
import PaymentMethods from "../components/SubPage/PaymentMethods/paymentMethods";
import Image from "next/image";
import arrowDown from "../public/assets/icons/arrow_right.svg";
import OneFaq from "../components/SubPage/FAQ/OneFaq";
import sheets from "../lib/sheets";
import Link from "next/link";

export default function ForFundraisers(props) {
    const { t } = useTranslation('for-fundraisers')

    return (
      <Layout>
        <Head>
          <title>For Fundraisers | Help UA Now</title>
          <meta
            name="description"
            content="Help your fundraiser reach a wider international audience. We onboard and verify civilian lead fundraisers in Ukraine, connecting them to donors"
          />
          <meta property="og:title" content="For Fundraisers | Help UA Now" />
          <meta
            property="og:description"
            content="Help your fundraiser reach a wider international audience. We onboard and verify civilian lead fundraisers in Ukraine, connecting them to donors"
          />
          <meta
            property="og:url"
            content="https://www.helpuanow.org/for-fundraisers"
          />
          <meta property="og:type" content="website" />
        </Head>

        <div className="w-full md:w-5/6 lg:w-2/3 pb-16">
          <Hero
            title={t("for-fundraisers.hero-title")}
            description={t("for-fundraisers.hero-description")}
            paragraph={t("for-fundraisers.hero-paragraph")}
            paragraph2={t("for-fundraisers.hero-paragraph2")}
          />
          <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
            <div className="mt-8">
              <h1 className="font-bold text-2xl lg:text-4xl mb-4">
                {t("for-fundraisers.apply")}
              </h1>
              <div className="mb-4 flex flex-row mt-10">
                <div className="w-7 shrink-0 mr-2">
                  <Image src={arrowDown} alt="arrow down" />
                </div>
                <div className="w-100">
                  <h4 className="text-2xl font-bold mb-4 text-uablue-default">
                    {t("for-fundraisers.apply.section1")}
                  </h4>
                  <p className="mb-4">
                    {t("for-fundraisers.apply.section1.description")}
                  </p>
                  <Link href="/for-fundraisers/for-small-fundraisers">
                    <a className="font-medium text-lg text-uablue-default underline underline-offset-4 hover:text-uablue-accent">
                      {t("for-fundraisers.apply.section1.link")}
                    </a>
                  </Link>
                </div>
              </div>
              <hr className="mt-10"></hr>
              <div className="mb-4 flex flex-row mt-10">
                <div className="w-7 shrink-0 mr-2">
                  <Image src={arrowDown} alt="arrow down" />
                </div>
                <div className="w-100">
                  <h4 className="text-2xl font-bold mb-4 text-uablue-default">
                    {t("for-fundraisers.apply.section2")}
                  </h4>
                  <p className="mb-4">
                    {t("for-fundraisers.apply.section2.description")}
                  </p>
                  <Link href="/for-fundraisers/for-reputation-backers">
                    <a className=" font-medium text-lg text-uablue-default hover:text-uablue-accent underline underline-offset-4">
                      {t("for-fundraisers.apply.section2.link")}
                    </a>
                  </Link>
                </div>
              </div>
              <hr className="mt-10"></hr>
              <div className="mb-4 flex flex-row mt-10">
                <div className="w-7 shrink-0 mr-2">
                  <Image src={arrowDown} alt="arrow down" />
                </div>
                <div className="w-100">
                  <h4 className="text-2xl font-bold mb-4 text-uablue-default">
                    {t("for-fundraisers.apply.section3")}
                  </h4>
                  <p className="mb-4">
                    {t("for-fundraisers.apply.section3.description")}
                  </p>
                  <Link href="/for-fundraisers/for-large-organizations">
                    <a className="font-medium text-lg text-uablue-default hover:text-uablue-accent underline underline-offset-4">
                      {t("for-fundraisers.apply.section3.link")}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h1 className="font-bold text-2xl lg:text-4xl mb-4">
                {t("for-fundraisers.faq")}
              </h1>
              <OneFaq title={t("for-fundraisers.faq.section1")}>
                <p>{t("for-fundraisers.faq.section1.description")}</p>
              </OneFaq>
              <OneFaq title={t("for-fundraisers.faq.section2")}>
                <p>
                  {t("for-fundraisers.faq.section2.description")}{" "}
                  <a
                    className="underline text-uablue-default hover:text-uablue-accent"
                    href="https://docs.google.com/document/d/1Xrf6CwJ0n6cAqccjf-Q85MlnLrzkqnZMDfjNa5xwAEQ/edit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("for-fundraisers.faq.section2.link")}.
                  </a>
                </p>
              </OneFaq>
              <OneFaq title={t("for-fundraisers.faq.section3")}>
                <p>
                  {t("for-fundraisers.faq.section3.description")}{" "}
                  <a
                    className="underline text-uablue-default hover:text-uablue-accent"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdgj1TpCypclrkZB9g5msGX2g6CqBQB8iiVJllDj_1Ne-QuzQ/viewform"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("for-fundraisers.faq.section3.link")}.
                  </a>
                </p>
              </OneFaq>
            </div>
            <div className="mt-8">
              <h1 className="font-bold text-2xl lg:text-4xl mb-4">
                {t("for-fundraisers.payments")}
              </h1>
              <h5 className="font-bold text-2xl mb-4">
                {t("for-fundraisers.payments.section1")}
              </h5>
              <p className="mb-8">
                {t("for-fundraisers.payments.section1.description")}
              </p>
              <h5 className="font-bold text-2xl mb-4">
                {t("for-fundraisers.payments.section2")}
              </h5>
              <p className="mb-4">
                {t("for-fundraisers.payments.section2.description1")}
              </p>
              <p>{t("for-fundraisers.payments.section2.description2")}</p>
            </div>
            <div className="mt-8">
              <PaymentMethods
                titles={props.title}
                rows={props.rows}
                ukraine={false}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
}

export async function getStaticProps({ locale }) {
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range: "Payment Method",
    });
    const [title, ...rows] = response.data.values;

    return {
        props: {
            title,
            rows,
            ...(await serverSideTranslations(locale, ['for-fundraisers', 'common'])),
        },
    };
}