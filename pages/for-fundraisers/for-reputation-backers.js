import Layout from "../../components/layout";
import Hero from "../../components/SubPage/Hero/hero";
import YellowInlineCallout from "../../components/yellowInlineCallout";
import BlueInlineCallout from "../../components/blueInlineCallout";
import Link from "next/link";

export default function ForReputationBackers(props) {
    return (
        <Layout>
            <div className="w-full md:w-3/4 lg:w-2/3 pb-8">
                <div className="mt-12 font-bold lg:pl-24">
                    <Link href="/for-fundraisers" passHref>
                        <a>{"<"} BACK</a>
                    </Link>
                </div>
                <Hero
                    title="For Reputation Backers"
                    description="Who are the reputation backers?"
                    paragraph="Individuals with meaningful social media 
                    presence who are willing to vouch for the emergency fundraiser 
                    by Ukrainian volunteers. These could be local activists, 
                    supporters abroad, political figures, industry professionals. 
                    They have to be committed to doing additional due diligence 
                    on the project and hosting a fundraiser post on their 
                    social media platform."
                />
                <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
                    <div className="mt-8">
                        <h1 className="font-bold text-2xl lg:text-4xl mb-4 mt-8 text-uablue-default">
                            Problem
                        </h1>
                        <p>
                            Ukrainian volunteers are a major force behind local
                            aid collection, refugee support, evacuation efforts,
                            and supply coordination for civilian defense units.
                            They are in direct contact with people on the ground
                            and understand their immediate needs best.
                        </p>
                        <br />
                        <p>
                            When fundraising, they often cannot publicize
                            detailed evidence of financial transactions, how
                            many units of aid were purchased, or where it was
                            delivered. If made public, enemy intelligence could
                            use this information to organize ambushes,
                            endangering delivery volunteers and aid recipients.
                        </p>
                        <br />
                        <p>
                            While Help Ukraine Now displays information and
                            photo evidence already shared on media, we
                            understand the danger of asking for detailed
                            reports. To help volunteers secure funds from
                            broader audiences, we ask them to use a credible
                            social media platform to host the fundraisers.
                        </p>
                        <h1 className="font-bold text-2xl lg:text-4xl mb-4 mt-8 text-uablue-default">
                            Solution
                        </h1>
                        <p>
                            If volunteers don’t have access to a credible social
                            platform, a reputation backer could help. They
                            should have a meaningful social media platform, be
                            willing to reveal their identity and conduct
                            additional due diligence of the volunteer efforts
                            they are vouching for.
                        </p>
                        <br />
                        <p className="font-semibold">Forms of due diligence:</p>
                        <br />
                        <ul className="mx-4 sm:mx-12">
                            <li className="mb-2">
                                👉 Ask for their spending plan; question the
                                credibility and readiness of their local
                                suppliers and partners
                            </li>
                            <li className="mb-2">
                                👉 Ask for the photo evidence and receipts that
                                could verify previous volunteering efforts
                            </li>
                            <li className="mb-2">
                                👉 Ask for evidence of a connection to the
                                beneficiary group they’re aiding
                            </li>
                            <li className="mb-2">
                                👉 Ask for social media profiles and personal
                                contacts of key volunteers involved with the
                                project
                            </li>
                            <li className="mb-4">
                                👉 Reach out to any personal connections in
                                common
                            </li>
                        </ul>
                        <BlueInlineCallout>
                            <b>IMPORTANT❗️</b>
                            This communication should happen over a secure
                            platform like Signal or other private channels with
                            end-to-end encryption.{" "}
                        </BlueInlineCallout>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
