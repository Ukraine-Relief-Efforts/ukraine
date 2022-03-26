import Layout from "../components/layout";
import OneFaq from "../components/SubPage/FAQ/OneFaq";
import Hero from "../components/SubPage/Hero/hero";
import Link from "next/link";
import Button from "../components/Button/button";

export default function ForDonors() {
    return (
        <Layout>
            <div className="w-full md:w-3/4 lg:w-2/3 pb-8">
                <Hero
                    title="For donors"
                    description="Helping you meaningfully support grassroots fundraising efforts for Ukraine."
                />
                <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
                    <div className="mt-8">
                        <p>
                            This project was created to find, evaluate and
                            amplify credible fundraisers organized by Ukrainian
                            volunteers.
                        </p>
                    </div>
                    <div className="mt-16">
                        <h1 className="font-bold text-2xl lg:text-4xl mb-4 mt-8 text-uablue-default">
                            F.A.Q.
                        </h1>
                        <OneFaq title="Why donate to small fundraisers?">
                            <p>
                                Since Russia’s most recent invasion, friends and
                                families of people fighting on the frontlines,
                                activists, and others have volunteered to
                                support the people and military in Ukraine, at
                                times risking their lives to deliver essential
                                supplies to occupied areas. While large
                                charities will continue playing a crucial role
                                in helping people affected by this war, their
                                ability to quickly respond to the needs of small
                                groups in different regions of Ukraine is
                                limited. Volunteers fill in this gap. They have
                                first-hand information on the most current and
                                urgent needs. Every dollar of the donation to
                                their fundraisers goes to life-saving supplies
                                and services - medicines, protective gear,
                                transportation, and more - making a tremendous
                                impact for people on the ground.
                            </p>
                        </OneFaq>
                        <OneFaq title="How do we vet volunteer-driven fundraisers?">
                            <ul className="list-disc ml-8">
                                <li>
                                    Multiple people on our team independently
                                    evaluate fundraiser information.
                                </li>
                                <li>
                                    We only onboard fundraisers that have proven
                                    ability to deliver aid.
                                </li>
                                <li>
                                    We only support fundraisers hosted on
                                    credible social media pages or websites.
                                    Read more:{" "}
                                    <Link href="/for-fundraisers/for-reputation-backers">
                                        <a className="font-medium text-uablue-default underline underline-offset-4 hover:text-uablue-accent">
                                            here
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    Soon, we will employ a group of trusted
                                    Ukrainians with connections to volunteer
                                    networks on the ground to further formalize
                                    our vetting process.
                                </li>
                            </ul>
                            <div className="flex flex-row items-center mb-4 mt-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        <strong>Disclaimer: </strong>
                                        We try to make it as easy as possible
                                        for you to evaluate fundraisers, but you
                                        are the final decision if yours. Before
                                        donating, double-check the legitimacy of
                                        the page hosting the fundraiser.
                                    </p>
                                </span>
                            </div>
                        </OneFaq>
                        <OneFaq title="How to donate?">
                            <p>
                                Each fundraiser page specifies payment methods
                                available. Click “Donate Now” for payment
                                information. We will never host payment
                                information directly on our website.
                                <br></br>
                                <br></br>
                            </p>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        <strong>
                                            Donating to a Ukrainian card:
                                        </strong>{" "}
                                        Wise, SWIFT, Western Union
                                    </p>
                                </span>
                            </div>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        <strong>
                                            Donating to a US-based account:
                                        </strong>{" "}
                                        Venmo, Paypal, Zelle, Revolut, CashApp
                                    </p>
                                </span>
                            </div>
                            <div className="w-full sm:w-64">
                                <Button
                                    value="See All Fundraisers"
                                    href="/"
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
