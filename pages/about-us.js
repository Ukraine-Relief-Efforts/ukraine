import { useTranslation } from 'react-i18next';
import Layout from "../components/layout";
import OneFaq from "../components/SubPage/FAQ/OneFaq";
import Hero from "../components/SubPage/Hero/hero";
import Button from "../components/Button/button";
import Link from "next/link";

export default function AboutUs() {
    const { t } = useTranslation()
    return (
        <Layout>
            <div className="w-full md:w-3/4 lg:w-2/3 pb-8">
                <Hero
                    title={t('about-us.hero-title')}
                    description={t('about-us.hero-description')}
                />
                <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
                    <div className="mt-8">
                        <p>{t('about-us.description')}</p>
                        <h1 className="text-2xl lg:text-4xl mb-2 mt-16">
                            {t('about-us.faq-heading')}
                        </h1>
                        <OneFaq title={t('about-us.onefaq.donation-impact')}>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className="leading-tight">
                                        {t('about-us.onefaq.donation-impact.section1')}
                                    </p>
                                </span>
                            </div>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className="leading-tight">
                                        {t('about-us.onefaq.donation-impact.section2')}
                                    </p>
                                </span>
                            </div>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className="leading-tight">
                                        {t('about-us.onefaq.donation-impact.section3')}
                                    </p>
                                </span>
                            </div>
                        </OneFaq>
                        <OneFaq title={t('about-us.onefaq.credibility')}>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className="leading-tight">
                                        {t('about-us.onefaq.credibility.section1')}
                                    </p>
                                </span>
                            </div>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className="leading-tight">
                                        {t('about-us.onefaq.credibility.section2')}{" "}
                                        <Link href="/for-fundraisers/for-reputation-backers">
                                            <a className="font-medium text-uablue-default underline underline-offset-4 hover:text-uablue-accent">
                                                {t('about-us.onefaq.credibility.section2.link')}
                                            </a>
                                        </Link>
                                    </p>
                                </span>
                            </div>
                        </OneFaq>
                        <OneFaq title={t('about-us.onefaq.language-barrier')}>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className="leading-tight">
                                        {t('about-us.onefaq.language-barrier.section1')}
                                    </p>
                                </span>
                            </div>
                        </OneFaq>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-2xl lg:text-4xl my-4">
                            {t('about-us.get-in-touch.heading')}
                        </h1>

                        <p>
                            {t('about-us.get-in-touch.description')}
                        </p>
                        <br></br>
                        <div className="w-full sm:w-64">
                            <Button
                                value={t('about-us.get-in-touch.contact-form')}
                                href="https://forms.gle/fENMLtLzqAxE3fwm6"
                                target="_blank"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
