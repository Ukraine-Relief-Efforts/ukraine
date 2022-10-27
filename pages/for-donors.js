import Head from 'next/head'
import Layout from "../components/layout";
import OneFaq from "../components/SubPage/FAQ/OneFaq";
import Hero from "../components/SubPage/Hero/hero";
import Link from "next/link";
import Button from "../components/Button/button";
import ListItem from "../components/List/listItem";

export default function ForDonors() {
    return (
      <Layout>
        <Head>
          <title>For Donors | Help UA Now</title>
          <meta
            key="donors-description"
            name="donors-description"
            content="Helping you meaningfully support grassroots fundraising efforts for Ukraine. This project was created to find, evaluate and amplify credible fundraisers organized by Ukrainian volunteers."
          />
          <meta
            key="donors-og:title"
            property="og:title"
            content="For Donors | Help UA Now"
          />
          <meta
            key="donors-og:description"
            property="og:description"
            content="Helping you meaningfully support grassroots fundraising efforts for Ukraine. This project was created to find, evaluate and amplify credible fundraisers organized by Ukrainian volunteers."
          />
          <meta
            key="donors-og:url"
            property="og:url"
            content="https://www.helpuanow.org/for-donors"
          />
          <meta
            key="donors-og:type"
            property="og:type"
            content="website"
          />
        </Head>
        <div className="w-full md:w-3/4 lg:w-2/3 pb-8">
          <Hero
            title="For donors"
            description="Helping you meaningfully support grassroots fundraising efforts for Ukraine."
            paragraph="This project was created to find, evaluate and amplify credible fundraisers organized by Ukrainian volunteers."
          />
          <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
            <div className="mt-16">
              <h1 className="font-bold text-2xl lg:text-4xl mb-4 mt-8">
                F.A.Q.
              </h1>
              <OneFaq title="Why donate to small fundraisers?">
                <p>
                  Since Russia’s most recent invasion, friends and families of
                  people fighting on the front lines, activists, and others have
                  volunteered to support the people and military in Ukraine, at
                  times risking their lives to deliver essential supplies to
                  occupied areas. While large charities will continue playing a
                  crucial role in helping people affected by this war, their
                  ability to quickly respond to the needs of small groups in
                  different regions of Ukraine is limited. Volunteers fill in
                  this gap. They have first-hand information on the most current
                  and urgent needs. Every dollar of the donation to their
                  fundraisers goes to life-saving supplies and services -
                  medicines, protective gear, transportation, and more - making
                  a tremendous impact for people on the ground.
                </p>
              </OneFaq>
              <OneFaq title="How do we vet volunteer-driven fundraisers?">
                <ul className="list-disc ml-8">
                  <li>
                    Multiple people on our team independently evaluate
                    fundraiser information.
                  </li>
                  <li>
                    We only onboard fundraisers that have proven ability to
                    deliver aid.
                  </li>
                  <li>
                    We only support fundraisers hosted on credible social media
                    pages or websites. Read more:{" "}
                    <Link href="/for-fundraisers/for-reputation-backers">
                      <a className="font-medium text-uablue-default underline underline-offset-4 hover:text-uablue-accent">
                        here
                      </a>
                    </Link>
                  </li>
                  <li>
                    Soon, we will employ a group of trusted Ukrainians with
                    connections to volunteer networks on the ground to further
                    formalize our vetting process.
                  </li>
                </ul>
                <ul>
                  <ListItem>
                    <strong>Disclaimer: </strong>
                    We are confident in fundraisers we have vetted, but the
                    final decision to donate is yours. Before donating,
                    double-check the legitimacy of the social media page hosting
                    the fundraiser.
                  </ListItem>
                </ul>
              </OneFaq>
              <OneFaq title="How to donate?">
                <p>
                  Click “Donate Now” for deposit information. We are not hosting
                  payment information directly on our website at the moment.
                </p>
                <ul>
                  <ListItem>
                    <strong>Donating to a Ukrainian card:</strong> Wise, SWIFT,
                    Western Union
                  </ListItem>
                  <ListItem>
                    <strong>Donating to a US-based account:</strong> Venmo,
                    Paypal, Zelle, Revolut, CashApp
                  </ListItem>
                </ul>
                <br />
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
