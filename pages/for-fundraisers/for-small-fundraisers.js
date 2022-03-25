import Layout from "../../components/layout";
import Hero from "../../components/SubPage/Hero/hero";
import sheets from "../../lib/sheets";
import YellowInlineCallout from "../../components/yellowInlineCallout";
import BlueInlineCallout from "../../components/blueInlineCallout";
import Link from "next/link";
import Button from "../../components/Button/button";

export default function ForSmallFundraisers(props) {
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
                        title="For Small Fundraisers"
                        description="Application guide for local volunteer groups supporting Ukrainians in need."
                    />
                </div>
                <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
                    <div className="mt-8">
                        <p>
                            We prioritize onboarding fundraisers with a proven
                            record of volunteering activity and those who
                            secured necessary suppliers and local partnerships
                            to deploy funding immediately. Most of the featured
                            fundraisers are to purchase critical medical and
                            protective equipment, support civilian evacuation,
                            refugee services, and other forms of direct aid to
                            people in Ukraine.
                        </p>
                    </div>
                    <div className="mt-8">
                        <h1 className="font-bold text-2xl lg:text-4xl mb-4 text-uablue-default">
                            Step 1 - Reputation backing
                        </h1>
                        <p>
                            Each fundraiser has to be connected to a credible
                            social media account. Please host your fundraising
                            announcement on:
                        </p>

                        <ul>
                            <li className="mt-4">
                                👉{" "}
                                <b>
                                    a social media page of your volunteer group
                                </b>
                                <br />
                                The page should have been active for the past
                                few months, have some following, and preferably
                                include some photo evidence of previous
                                volunteering activity.
                            </li>
                            <li className="mt-4">
                                👉{" "}
                                <b>
                                    OR a social media of someone credible who is
                                    endorsing your project
                                </b>
                                <br />
                                This person could be a local activist, supporter
                                abroad, political figure, industry professional,
                                etc. This person should have a meaningful social
                                reputation and be willing to vouch for you.
                                Please make sure they review the guidelines
                                before committing:
                            </li>
                        </ul>
                        <div className="w-full sm:w-64 my-4">
                            <Button
                                value="Guidelines"
                                href="https://docs.google.com/document/d/1Xrf6CwJ0n6cAqccjf-Q85MlnLrzkqnZMDfjNa5xwAEQ/edit?usp=sharing"
                                target="_blank"
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl lg:text-4xl mb-4 mt-8 text-uablue-default">
                            Step 2 - Social media post
                        </h1>
                        <p>
                            You will need to write a detailed social media post
                            in English and share it from the account of your
                            volunteer group or the reputation backer. Please
                            include:
                        </p>
                        <ul>
                            <li className="mt-4">
                                👉{" "}
                                <b>Description of your volunteering effort</b>
                            </li>
                            <li className="mt-4">
                                👉{" "}
                                <b>
                                    How the money will be used and what’s the
                                    needed amount?
                                </b>
                            </li>
                            <li className="mt-4">
                                👉{" "}
                                <b>
                                    Are there any organizations or institutions
                                    vouching for this effort?
                                </b>
                                <br />
                                Are you affiliated with any larger organizations
                                or have been endorsed by famous individuals
                                (please include links to media evidence).
                            </li>
                            <li className="mt-4">
                                👉{" "}
                                <b>
                                    Media links to help donors better evaluate
                                    your donation request
                                </b>
                                <br />
                                Include links to previous fundraising efforts
                                supported by large number of people, social
                                media posts with photos evidencing previous
                                activity, features in media outlets, etc.
                            </li>
                            <li className="mt-4">
                                👉 <b>Payment method and details</b>
                                <br />
                                Please verify with volunteers verbally or via
                                encrypted chat that these details are accurate.
                                <br />
                                <b>
                                    You MUST include payment informations in
                                    your post.
                                </b>{" "}
                                We are not hosting any payment details on{" "}
                                <b>helpuanow.org!</b>
                                <br />
                                <b>Note on payment methods:</b> The simpler the
                                payment process the more likely people will
                                contribute. PayPal is live in Ukraine. For
                                transfers to Ukrainian cards, consider using
                                Wise.
                            </li>
                            <li className="mt-4">
                                👉 <b>Contact information for big donations</b>
                                <br />
                                Only add if applicable; please make sure it’s
                                not someone on the frontline for safety purposes
                            </li>
                        </ul>
                        <br />
                        <BlueInlineCallout>
                            <p>
                                If you need help writing or translating this
                                post in English, our volunteers can help. Please
                                fill in the application form in Ukrainian below and we
                                will get back to you.
                            </p>
                        </BlueInlineCallout>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl lg:text-4xl mb-4 mt-8 text-uablue-default">
                            Step 3 - Submitting to the website
                        </h1>
                        <p>
                            Please fill in the form below. It should not take
                            longer than 10 - 20 minutes. You will be asked for
                            general information about your volunteering efforts.
                            Please do not share any information you don’t want
                            publicly available.
                        </p>
                        <div className="w-full sm:w-64 mt-4 mb-6">
                            <Button
                                value="Application Form"
                                href="https://forms.gle/k7X5SMjTBovUpfqFA"
                                target="_blank"
                            />
                        </div>
                        <BlueInlineCallout>
                            <b>IMPORTANT❗️</b>
                            We only feature fundraisers that meet the above
                            specifications and are shared from reliable social
                            media profiles. If your organization is already
                            featured, you cannot apply for another fundraiser.
                        </BlueInlineCallout>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export async function getStaticProps() {
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range: "Payment Method",
    });
    const [title, ...rows] = response.data.values;

    return {
        props: {
            title,
            rows,
        },
    };
}
