import Layout from "../../components/layout";
import Hero from "../../components/SubPage/Hero/hero";
import Link from "next/link";

export default function ForSmallFundraisers(props) {
    return (
        <Layout>
            <div className="w-full md:w-3/4 lg:w-2/3 pb-8">
                <Hero
                    title="For Small Fundraisers"
                    description="We are so grateful for the relentless 
                work you have been doing to help Ukrainian troops protect our country and to aid 
                our people in need!"
                />
                <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
                    <div className="mt-8">
                        <p>
                            We have created this website to help you secure
                            emergency funding for time-sensitive aid request.
                            Our goal is to help you communicate to foreign
                            philanthropists the purposes of your fundraiser and
                            convey that you are a trustworthy coordinator of
                            their funds.
                        </p>
                        <h1 className="text-2xl lg:text-4xl mb-4 mt-8">
                            Step 1: Reputation backing
                        </h1>
                        <p>
                            Right now, you need to rely on people in your
                            personal network for donations. We are trying to get
                            you support from strangers abroad. To do this, we
                            need to communicate that you are who you say you are
                            and that you will spend the money the way you
                            promised. We have thought of a few ways to create
                            trust between you and the philanthropists, the main
                            one being:
                        </p>
                        <p>
                            <b>
                                Your request for donation has to come from a
                                credible social media account.
                            </b>{" "}
                            The fundraisers should be hosted on:
                        </p>
                        <ul>
                            <li>
                                &bull;
                                <i>
                                    a social media page of the battalion, your
                                    volunteer group, etc.
                                </i>{" "}
                                - The page should have been active for the past
                                few months, have some following, and preferably
                                include some photo evidence of previous aid
                                purchases
                            </li>
                            <li>
                                &bull;
                                <i>
                                    OR a social media of someone credible who is
                                    endorsing your project
                                </i>{" "}
                                - This person could be a local activist,
                                supporter abroad, political figure, industry
                                professional, etc. This person should have a
                                meaningful social reputation and be willing to
                                vouch for you.{" "}
                                <b>
                                    <i>
                                        Please share this guide with them:{" "}
                                        <a
                                            href="https://docs.google.com/document/d/1Xrf6CwJ0n6cAqccjf-Q85MlnLrzkqnZMDfjNa5xwAEQ/edit?usp=sharing"
                                            className=" font-medium text-lg text-uablue-default 
                                            underline underline-offset-4 hover:text-uablue-accent"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            link
                                        </a>
                                    </i>
                                </b>
                            </li>
                        </ul>
                        <h1 className="text-2xl lg:text-4xl mb-4 mt-8">
                            Step 2: Social media post
                        </h1>
                        <p>
                            If you have a website, please check our guide{" "}
                            <Link href="/for-fundraisers/for-large-organizations">
                                <a
                                    className=" font-medium text-lg text-uablue-default 
                                underline underline-offset-4 hover:text-uablue-accent"
                                >
                                    for bigger organizations
                                </a>
                            </Link>
                            . The rest of these guidelines will focus on smaller
                            volunteer groups working on the ground to coordinate
                            supplies for Ukrainian people.
                        </p>
                        <br />
                        <p>
                            If you are a part of a smaller battalion or an
                            individual volunteer fundraising on the behalf of a
                            group, you will need to write a detailed social
                            media post in English. This post needs to be from
                            the account of{" "}
                            <a
                                href="https://docs.google.com/document/d/18TsScJQVt0z8drSLK0cN6O4BZldaB9IeGjOs74zAy7A/edit?usp=sharing"
                                className="font-medium text-lg text-uablue-default 
                                underline underline-offset-4 hover:text-uablue-accent"
                                target="_blank"
                                rel="noreferrer"
                            >
                                the reputation backer
                            </a>{" "}
                            and include as much of the following information as
                            possible:
                        </p>
                        <ul>
                            <li>
                                &bull;
                                <i>
                                    <b>
                                        Name of the organization / donation
                                        request
                                    </b>
                                </i>
                            </li>
                            <li>
                                &bull;
                                <i>
                                    <b>Description</b>
                                </i>
                            </li>
                            <li>
                                &bull;
                                <i>
                                    <b>
                                        One sentence on what the money will be
                                        used for
                                    </b>{" "}
                                    (try to provide quantities whenever
                                    possible)
                                </i>
                            </li>
                            <li>
                                &bull;
                                <i>
                                    <b>
                                        How much approximately you are trying to
                                        raise
                                    </b>
                                </i>
                            </li>
                            <li>
                                &bull;
                                <i>
                                    <b>If anyone else backs this effort:</b>{" "}
                                    Mention if the group you are representing is
                                    affiliated with any larger organizations or
                                    have been endorsed by famous individuals
                                    (please include links to media evidence)
                                </i>
                            </li>
                            <li>
                                &bull;
                                <i>
                                    <b>
                                        Any other social media links that can
                                        help donors better vet this donation
                                        request
                                    </b>{" "}
                                    (links to previous fundraisers supported by
                                    many people, links to social media posts
                                    with photos of past donations, or other
                                    evidence of their activity)
                                </i>
                            </li>
                            <li>
                                &bull;
                                <i>
                                    <b>Payment method and details:</b> Please
                                    verify with volunteers verbally or via
                                    encrypted chat that these details are
                                    accurate.
                                </i>
                                <ul>
                                    <li className="ml-4">
                                        &bull;
                                        <i>
                                            <b>
                                                Payment details MUST be included
                                                in your post.
                                            </b>{" "}
                                            We are not hosting any payment
                                            details on helpuanow.org!
                                        </i>
                                    </li>
                                    <li className="ml-4">
                                        &bull;
                                        <i>
                                            <b>Note on payment methods:</b> If
                                            you can find someone with PayPal,
                                            Venmo, or Zelle who can accept
                                            donations on your behalf, this will
                                            help bring more funding! The simpler
                                            the payment process the more likely
                                            people will contribute!
                                        </i>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                &bull;
                                <i>
                                    <b>Contact information for big donations</b>{" "}
                                    (only add if applicable; please make sure
                                    it’s not someone on the frontline for safety
                                    purposes)
                                </i>
                            </li>
                        </ul>
                        <p>
                            <i>
                                <b>
                                    If you need help writing or translating this
                                    post to English, our volunteers can help!
                                </b>{" "}
                                Please fill in this form in Ukrainian:{" "}
                                <a
                                    href="https://forms.gle/YYkY5PMh1vp8ThjcA"
                                    className="font-medium text-lg text-uablue-default 
                                    underline underline-offset-4 hover:text-uablue-accent"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    https://forms.gle/YYkY5PMh1vp8ThjcA
                                </a>
                            </i>
                        </p>
                        <h1 className="text-2xl lg:text-4xl mb-4 mt-8">
                            Step 3: Submitting to the website
                        </h1>
                        <p>
                            Please fill in{" "}
                            <a
                                href="https://forms.gle/k7X5SMjTBovUpfqFA"
                                className="font-medium text-lg text-uablue-default underline underline-offset-4 hover:text-uablue-accent"
                                target="_blank"
                                rel="noreferrer"
                            >
                                this form
                            </a>
                            . This is a tedious task, and we understand you are
                            already above your capacity. However, we hope that
                            taking the time to work with us will help you reach
                            more donors, receive more funding, and purchase the
                            needed supplies and aid for as many people as
                            possible. Please only submit this form AFTER you
                            have made and shared the detailed post on social
                            media.
                        </p>
                        <br />
                        <p>
                            <i>
                                IMPORTANT: we can only feature you on the
                                website if you have a detailed post with the
                                above specification that is posted from a
                                reliable social media profile or your official
                                website. If your organization is already
                                featured, you cannot apply for another
                                fundraiser.
                            </i>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
