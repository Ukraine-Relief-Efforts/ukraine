import Layout from "../../components/layout";
import Hero from "../../components/SubPage/Hero/hero";
import sheets from "../../lib/sheets";
import BlueInlineCallout from "../../components/blueInlineCallout";
import Link from "next/link";
import Button from "../../components/Button/button";
import ListItem from "../../components/List/listItem";

export default function ForLargeOrganizations(props) {
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
                        title="For Bigger Organizations"
                        description="We help highlight organizations doing an important work on the ground in Ukraine."
                    />
                    <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
                        <div className="mt-8">
                            <h1 className="font-bold text-2xl lg:text-4xl mb-4 text-uablue-default">
                                Some of the major reasons why foreigners choose
                                not to donate:
                            </h1>
                            <p>
                                <b>
                                    Some of the major reasons why foreigners
                                    choose not to donate include:
                                </b>
                            </p>
                            <ul>
                                <ListItem>
                                    Not knowing what the money will be spent
                                    on
                                </ListItem>
                                <ListItem>
                                    Not understanding Ukrainian descriptions
                                    on the donations page
                                </ListItem>
                                <ListItem>
                                    Not knowing who to contact when
                                    considering large donations
                                </ListItem>
                            </ul>
                            <br />
                            <BlueInlineCallout>
                                <p>
                                    If your organization is directly aiding
                                    people on the ground in Ukraine and lacks
                                    funding to satisfy immediate aid requests -
                                    we want to help you communicate this effort.
                                </p>
                            </BlueInlineCallout>
                        </div>
                        <div>
                            <h1 className="font-bold text-2xl lg:text-4xl mb-4 mt-8 text-uablue-default">
                                How to get featured?
                            </h1>
                            <p>
                                Please submit the application form. You can
                                submit it in Ukrainian and we will take over the
                                translation!{" "}
                                <div className="w-full sm:w-64 mt-4">
                                    <Button
                                        value="Application form"
                                        href="https://forms.gle/k7X5SMjTBovUpfqFA"
                                        target="_blank"
                                    />
                                </div>
                            </p>
                        </div>
                        <div>
                            <h1 className="font-bold text-2xl lg:text-4xl mb-4 mt-8 text-uablue-default">
                                How can I make my donations page better?
                            </h1>
                            <p>
                                Includes the following information:
                                <br />
                                <br />
                                <ul>
                                    <ListItem>
                                        <b>
                                            A brief description of your
                                            organization in English
                                        </b>
                                        <br /> Include any relevant background,
                                        major institutional backers, and past
                                        accomplishments.
                                    </ListItem>
                                    <ListItem>
                                        <b>
                                            Explanation of how the money will be
                                            used
                                        </b>
                                    </ListItem>
                                    <ListItem>
                                        <b>
                                            How much approximately you are
                                            trying to raise
                                        </b>
                                    </ListItem>
                                    <ListItem>
                                        <b>
                                            Any social media links that can help
                                            donors better vet this donation
                                            request:
                                        </b>
                                        <br />
                                        Share links to previous fundraisers
                                        supported by large numbers of people;
                                        social media posts that feature your
                                        past efforts; endorsements by
                                        influential individuals, institutions,
                                        or media; or other evidence of you past
                                        efforts.
                                    </ListItem>
                                    <ListItem>
                                        <b>
                                            Payment method and deposit details:
                                        </b>
                                        <br />
                                        Make sure your deposit information is
                                        accurate and clearly organized. Use
                                        payment methods that are simple to
                                        donate to. PayPal is now live in
                                        Ukraine. Consider highlighting Wise as a
                                        transaction option alongside SWIFT when
                                        hosting the fundraiser with a Ukrainian
                                        card.
                                    </ListItem>
                                    <ListItem>
                                        <b>Contact for big donations</b>
                                        <br />
                                        Preferablly share a contact of someone
                                        in your organization who speaks English.
                                        Please make sure it’s not a person in an
                                        active combat zone.{" "}
                                    </ListItem>
                                </ul>
                            </p>
                        </div>
                    </div>{" "}
                </div>
            </Layout>{" "}
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
