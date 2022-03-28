import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from "../../components/layout";
import Hero from "../../components/SubPage/Hero/hero";
import sheets from "../../lib/sheets";
import BlueInlineCallout from "../../components/blueInlineCallout";
import Link from "next/link";
import Button from "../../components/Button/button";

export default function ForSmallFundraisers(props) {
    const { t } = useTranslation('for-small-fundraisers')

    return (
        <div>
            <Layout>
                <div className="w-full md:w-3/4 lg:w-2/3 pb-8">
                    <div className="mt-12 font-bold lg:pl-24">
                        <Link href="/for-fundraisers" passHref>
                            <a>{"<"} BACK</a>
                        </Link>
                    </div>
                    <Hero
                        title={t('for-small-fundraisers.hero-title')}
                        description={t('for-small-fundraisers.hero-description')}
                    />
                </div>
                <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
                    <div className="mt-8">
                        <h1 className="font-bold text-2xl lg:text-4xl mb-4 text-uablue-default">
                            {t('for-small-fundraisers.step1')}
                        </h1>
                        <p>
                            {t('for-small-fundraisers.step1.description')}
                        </p>

                        <ul>
                            <li className="mt-4">
                                👉{" "}
                                <b>
                                    {t('for-small-fundraisers.step1.section1')}
                                </b>
                                <br />
                                {t('for-small-fundraisers.step1.section1.description')}
                            </li>
                            <li className="mt-4">
                                👉{" "}
                                <b>
                                    {t('for-small-fundraisers.step1.section2')}
                                </b>
                                <br />
                                {t('for-small-fundraisers.step1.section2.description')}
                            </li>
                        </ul>
                        <div className="w-full sm:w-80 my-4">
                            <Button
                                value={t('for-small-fundraisers.step1.guidelines-button')}
                                href="https://docs.google.com/document/d/1Xrf6CwJ0n6cAqccjf-Q85MlnLrzkqnZMDfjNa5xwAEQ/edit?usp=sharing"
                                target="_blank"
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl lg:text-4xl mb-4 mt-8 text-uablue-default">
                            {t('for-small-fundraisers.step2')}
                        </h1>
                        <p>
                            {t('for-small-fundraisers.step2.description')}
                        </p>
                        <ul>
                            <li className="mt-4">
                                👉{" "}
                                <b>{t('for-small-fundraisers.step2.section1')}</b>
                            </li>
                            <li className="mt-4">
                                👉{" "}
                                <b>
                                    {t('for-small-fundraisers.step2.section2')}
                                </b>
                            </li>
                            <li className="mt-4">
                                👉{" "}
                                <b>
                                    {t('for-small-fundraisers.step2.section3')}
                                </b>
                                <br />
                                {t('for-small-fundraisers.step2.section3.description')}
                            </li>
                            <li className="mt-4">
                                👉{" "}
                                <b>
                                    {t('for-small-fundraisers.step2.section4')}
                                </b>
                                <br />
                                {t('for-small-fundraisers.step2.section4.description')}
                            </li>
                            <li className="mt-4">
                                👉 <b>{t('for-small-fundraisers.step2.section5')}</b>
                                <br />
                                {t('for-small-fundraisers.step2.section5.description1')}
                                <br />
                                <b>
                                    {t('for-small-fundraisers.step2.section5.description2')}
                                </b>{" "}
                                {t('for-small-fundraisers.step2.section5.description3')}
                                <br />
                                <b>{t('for-small-fundraisers.step2.section5.description4')}</b> 
                                {t('for-small-fundraisers.step2.section5.description5')}
                            </li>
                            <li className="mt-4">
                                👉 <b>{t('for-small-fundraisers.step2.section6')}</b>
                                <br />
                                {t('for-small-fundraisers.step2.section6.description')}
                            </li>
                        </ul>
                        <br />
                        <BlueInlineCallout>
                            <p>
                                {t('for-small-fundraisers.step2.help')}
                            </p>
                        </BlueInlineCallout>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl lg:text-4xl mb-4 mt-8 text-uablue-default">
                            {t('for-small-fundraisers.step3')}
                        </h1>
                        <p>
                            {t('for-small-fundraisers.step3.description')}
                        </p>
                        <div className="w-full sm:w-64 mt-4 mb-6">
                            <Button
                                value={t('for-small-fundraisers.step3.button')}
                                href="https://forms.gle/s16BXc87JrRwqSx59"
                                target="_blank"
                            />
                        </div>
                        <BlueInlineCallout>
                            <b>{t('for-small-fundraisers.step3.important')}❗️</b>
                            {t('for-small-fundraisers.step3.important.description')}
                        </BlueInlineCallout>
                    </div>
                </div>
            </Layout>
        </div>
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
            ...(await serverSideTranslations(locale, ['for-small-fundraisers', 'common'])),
        },
    };
}