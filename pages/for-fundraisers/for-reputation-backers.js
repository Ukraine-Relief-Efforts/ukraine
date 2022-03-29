import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from "../../components/layout";
import Hero from "../../components/SubPage/Hero/hero";
import BlueInlineCallout from "../../components/blueInlineCallout";
import Link from "next/link";
import Button from "../../components/Button/button";
import ListItem from '../../components/List/listItem';

export default function ForReputationBackers(props) {
    const { t } = useTranslation('for-reputation-backers')

    return (
        <Layout>
            <div className="w-full md:w-3/4 lg:w-2/3 pb-8">
                <div className="mt-12 font-bold lg:pl-24">
                    <Link href="/for-fundraisers" passHref>
                        <a>{"<"} BACK</a>
                    </Link>
                </div>
                <Hero
                    title={t('for-reputation-backers.hero-title')}
                    description={t('for-reputation-backers.hero-description')}
                    paragraph={t('for-reputation-backers.hero-paragraph')}
                />
                <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
                    <div className="mt-8">
                        <h1 className="font-bold text-2xl lg:text-4xl mb-4 mt-8 text-uablue-default">
                            {t('for-reputation-backers.problem.heading')}
                        </h1>
                        <p>
                            {t('for-reputation-backers.problem.section1')}
                        </p>
                        <br />
                        <p>
                            {t('for-reputation-backers.problem.section2')}
                        </p>
                        <br />
                        <p>
                            {t('for-reputation-backers.problem.section3')}
                        </p>
                        <h1 className="font-bold text-2xl lg:text-4xl mb-4 mt-8 text-uablue-default">
                            {t('for-reputation-backers.solution.heading')}
                        </h1>
                        <p>
                            {t('for-reputation-backers.solution.section1')}
                        </p>
                        <br />
                        <p className="font-semibold">{t('for-reputation-backers.forms.heading')}</p>
                        <br />
                        <ul className="mx-4 sm:mx-8">
                            <ListItem>
                                {t('for-reputation-backers.forms.section1')}
                            </ListItem>
                            <ListItem>
                                {t('for-reputation-backers.forms.section2')}
                            </ListItem>
                            <ListItem>
                                {t('for-reputation-backers.forms.section3')}
                            </ListItem>
                            <ListItem>
                                {t('for-reputation-backers.forms.section4')}
                            </ListItem>
                            <ListItem>
                                {t('for-reputation-backers.forms.section5')}
                            </ListItem>
                        </ul>
                        <br />
                        <BlueInlineCallout>
                            <b>{t('for-reputation-backers.forms.important')}❗️</b>
                            {t('for-reputation-backers.forms.important-description')}{" "}
                        </BlueInlineCallout>
                        <br/>
                        <br/>
                        <p>
                            {t('for-reputation-backers.before-featuring')}
                        </p>
                        <br/>
                        <div className="w-full sm:w-64">
                            <Button
                                value={t('for-reputation-backers.instructions-button')}
                                href="/for-fundraisers/for-small-fundraisers"
                                target="_blank"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['for-reputation-backers', 'common'])),
        },
    };
}