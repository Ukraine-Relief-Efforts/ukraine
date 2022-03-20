import Layout from "../components/layout";
import OneFaq from "../components/SubPage/FAQ/OneFaq";
import Hero from "../components/SubPage/Hero/hero";
import Button from "../components/Button/button";
import Link from "next/link";

export default function AboutUs() {
    return (
        <Layout>
            <div className="w-full md:w-3/4 lg:w-2/3 pb-8">
                <Hero
                    title="About Us"
                    description="We are a group of volunteers from all walks of life, united over a mission to save Ukrainian lives and support the wellbeing of people affected by the war.
                    "
                />
                <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
                    <div className="mt-8">
                        <p>
                            We’ve created this website to amplify
                            volunteer-driven fundraisers for groups that do not
                            have access to support from larger organizations.
                            Since the beginning of the project, we’ve worked
                            with over 30 people, including designers,
                            developers, lawyers, cybersecurity specialists, and
                            more, from Ukraine, the US, Canada, Netherland, and
                            beyond. We now have a core group of 5-10 volunteers
                            who support this project consistently. Anyone with
                            the skills and capacity to help can join our
                            efforts!
                        </p>
                        <h1 className="text-2xl lg:text-4xl mb-2 mt-16">
                            Problems We Are Solving
                        </h1>
                        <OneFaq title="Donation Impact">
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        While large organizations offer critical
                                        support to many groups in the US, their
                                        ability to promptly respond to the needs
                                        of small groups in different regions of
                                        Ukraine is limited. Donations to
                                        grassroots groups will help fulfill this
                                        gap.
                                    </p>
                                </span>
                            </div>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        Even a small donation towards urgent aid
                                        needs will have a major impact on
                                        someone’s life and their chance to
                                        survive.
                                    </p>
                                </span>
                            </div>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        No overhead; every dollar goes to help
                                        people in Ukraine.
                                    </p>
                                </span>
                            </div>
                        </OneFaq>
                        <OneFaq title="Credibility">
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        Fundraisers typically demonstrate their
                                        credibility through extreme transparency
                                        (photo evidence of receipts, supplies
                                        purchase, delivery). This information
                                        cannot be made public in wartime.
                                    </p>
                                </span>
                            </div>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        We help small fundraisers communicate
                                        their credibility without revealing
                                        sensitive information. All they need is
                                        someone with a credible social media
                                        reputation to vouch for their efforts.
                                        Read more:{" "}
                                        <Link href="/for-fundraisers/for-reputation-backers">
                                            <a className="font-medium text-uablue-default underline underline-offset-4 hover:text-uablue-accent">
                                                here
                                            </a>
                                        </Link>
                                    </p>
                                </span>
                            </div>
                        </OneFaq>
                        <OneFaq title="Language Barrier">
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        Organizations lack English descriptions
                                        on their donation pages, especially
                                        regarding how they will spend the money
                                        and evidence of past work, which makes
                                        their information less legitimate in the
                                        eyes of English speakers. We help with
                                        translation!
                                    </p>
                                </span>
                            </div>
                        </OneFaq>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-2xl lg:text-4xl my-4">
                            Get in touch
                        </h1>

                        <p>
                            Use this form to get in touch about joining our
                            volunteer group, partnerships, and media coverage.
                        </p>
                        <br></br>
                        <div className="w-full sm:w-64">
                            <Button
                                value="Contact Form"
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
