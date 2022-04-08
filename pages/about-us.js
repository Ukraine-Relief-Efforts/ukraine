import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from "next/link";
import Layout from "../components/layout";
import OneFaq from "../components/SubPage/FAQ/OneFaq";
import Hero from "../components/SubPage/Hero/hero";
import Button from "../components/Button/button";
import ListItem from '../components/List/listItem';

export default function AboutUs() {
    const { t } = useTranslation('about-us')
    return (
      <Layout>
        <Head>
          <title>About Us | Help UA Now</title>
          <meta
            key="about-us-description"
            name="description"
            content="We are a group of volunteers from all walks of life, united over a mission to save Ukrainian lives and support the wellbeing of people affected by the war."
          />
          <meta
            key="about-us-og:title"
            property="og:title"
            content="About Us | Help UA Now"
          />
          <meta
            key="about-us-og:description"
            property="og:description"
            content="We are a group of volunteers from all walks of life, united over a mission to save Ukrainian lives and support the wellbeing of people affected by the war."
          />
          <meta
            key="about-us-og:url"
            property="og:url"
            content="https://www.helpuanow.org/about-us"
          />
          <meta
            key="about-us-og:type"
            property="og:type"
            content="website" />
        </Head>
        <div className="w-full md:w-3/4 lg:w-2/3 pb-8">
          <Hero
            title={t("about-us.hero-title")}
            description={t("about-us.hero-description")}
          />
          <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
            <div className="mt-8">
              <p>{t("about-us.description")}</p>
              <h1 className="font-bold text-4xl lg:text-4xl mb-4 mt-12 text-uablue-default">
                {t("about-us.faq-heading")}
              </h1>
              <OneFaq title={t("about-us.onefaq.donation-impact")} titleBlack>
                <ul>
                  <ListItem>
                    {t("about-us.onefaq.donation-impact.section1")}
                  </ListItem>
                  <ListItem>
                    {t("about-us.onefaq.donation-impact.section2")}
                  </ListItem>
                  <ListItem>
                    {t("about-us.onefaq.donation-impact.section3")}
                  </ListItem>
                </ul>
              </OneFaq>
              <OneFaq title={t("about-us.onefaq.credibility")} titleBlack>
                <ul>
                  <ListItem>
                    {t("about-us.onefaq.credibility.section1")}
                  </ListItem>
                  <ListItem>
                    {t("about-us.onefaq.credibility.section2")}{" "}
                    <Link href="/for-fundraisers/for-reputation-backers">
                      <a className="font-medium text-uablue-default underline underline-offset-4 hover:text-uablue-accent">
                        {t("about-us.onefaq.credibility.section2.link")}
                      </a>
                    </Link>
                  </ListItem>
                </ul>
              </OneFaq>
              <OneFaq title={t("about-us.onefaq.language-barrier")} titleBlack>
                <ul>
                  <ListItem>
                    {t("about-us.onefaq.language-barrier.section1")}
                  </ListItem>
                </ul>
              </OneFaq>
              <OneFaq title={t("about-us.get-in-touch.heading")}>
                <p>{t("about-us.get-in-touch.description.section1")}</p>
                <br />
                <p>{t("about-us.get-in-touch.description.section2")}</p>
                <br />
                <div className="w-full sm:w-64">
                  <Button
                    value={t("about-us.get-in-touch.contact-form")}
                    href="https://forms.gle/fENMLtLzqAxE3fwm6"
                    target="_blank"
                  />
                </div>
              </OneFaq>
            </div>
          </div>
        </div>
      </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['about-us', 'common'])),
        },
    };
}
