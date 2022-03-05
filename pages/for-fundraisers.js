import Layout from '../components/layout'
import Hero from '../components/SubPage/Hero/hero';
import PaymentMethods from '../components/SubPage/PaymentMethods/paymentMethods';
import Image from 'next/image';
import arrowDown from '../public/assets/icons/arrow_right.svg'
import OneFaq from '../components/SubPage/FAQ/OneFaq';
import Button from '../components/Button/button';
import PaymentOption from '../components/SubPage/PaymentMethods/paymentOption';
import sheets from "../lib/sheets";

export default function ForFundraisers(props) {
  return (
    <Layout>
      <div className="w-full md:w-5/6 lg:w-2/3 pb-16">
        <Hero
          title="For Fundraisers"
          description="Helping to communicate your fundraising efforts and credibility to the international community."
        />
        <p>
          Fundraisers and aid organizations of Ukraine, we are so grateful for
          the work you have been doing for the Ukrainian people. Our main goal
          is to help you get the necessary funds to supply essential
          humanitarian aid as well as medicine and protective gear for soldiers
          and volunteer battalions.
          <br></br>
          <br></br>
          We will do our best to help you communicate your efforts to the
          international community and convey that you are a trustworthy and
          efficient coordinator of their funds.
        </p>
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl">
            How to apply to get your fundraiser listed?
          </h1>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image src={arrowDown} alt="arrow down" />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">
                For Large Organization
              </h4>
              <p className="mb-4">
                For established charities or non-profits hosting emergency
                fundraisers to provide immediate humanitarian relief to
                Ukrainians on the ground.
              </p>
              <a
                className=" font-medium text-lg text-uablue-default underline underline-offset-4 hover:text-uablue-accent"
                href="https://docs.google.com/document/d/1UcVhNpjNEuGzPSqk1C7GLLX0BPC9VjZOq02mUTsf0LE/edit"
                target="_blank"
                rel="noreferrer"
              >
                Instructions for large organizations
              </a>
            </div>
          </div>
          <hr className="mt-10"></hr>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image src={arrowDown} alt="arrow down" />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">
                For Volunteer Fundraisers
              </h4>
              <p className="mb-4">
                For volunteers organizing fundraisers for emergency needs of
                civilian and military groups.
              </p>
              <a
                className=" font-medium text-lg text-uablue-default hover:text-uablue-accent underline underline-offset-4"
                href="https://docs.google.com/document/d/10aLozlKb0P9iiXEsORKoOVWousWyxjAvQ1tZ9uWxdrk/edit"
                target="_blank"
                rel="noreferrer"
              >
                Instructions for volunteer fundraisers
              </a>
            </div>
          </div>
          <hr className="mt-10"></hr>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image src={arrowDown} alt="arrow down" />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">
                For Those Posting on a Behalf of the Volunteer Group
              </h4>
              <p className="mb-4">
                For individuals with an established and meaningful social media
                presence who can verify their reputation and are willing to
                vouch for the emergency fundraiser by Ukrainian volunteers.
              </p>
              <a
                className=" font-medium text-lg text-uablue-default hover:text-uablue-accent underline underline-offset-4"
                href="https://docs.google.com/document/d/1Xrf6CwJ0n6cAqccjf-Q85MlnLrzkqnZMDfjNa5xwAEQ/edit"
                target="_blank"
                rel="noreferrer"
              >
                Instructions for posting on a behalf of the volunteer group
              </a>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl mb-2">F.A.Q.</h1>
          <OneFaq title="Why do smaller fundraisers need to have a social media post to be featured?">
            <p>
              This will help donors evaluate the credibility of your fundraiser.
              When your donation request is on the official social media page of
              the organization you’re supporting, or a profile of a person with
              a well-established social reputation, it creates another space for
              supporters to learn about your efforts.
            </p>
          </OneFaq>
          <OneFaq title="Can our fundraiser get listed if we do not have access to a social media page with a meaningful following and engagement?">
            <p>
              No. This criteria is an essential part of the vetting process for
              smaller fundraisers. Please reach out to any local activist,
              Ukrainian diaspora, political figure, or industry professional to
              vouch for you. Use this guide to explain what is needed from their
              side:{" "}
              <a
                className="underline text-uablue-default hover:text-uablue-accent"
                href="https://docs.google.com/document/d/1Xrf6CwJ0n6cAqccjf-Q85MlnLrzkqnZMDfjNa5xwAEQ/edit"
                target="_blank"
                rel="noreferrer"
              >
                Backing Reputation.
              </a>
            </p>
          </OneFaq>
          <OneFaq title="Where can I get help with translating my donations post to English?">
            <p>
              We have volunteers happy to help create a fundraiser post in
              English with the information you provide. Please use this form to
              request help:{" "}
              <a
                className="underline text-uablue-default hover:text-uablue-accent"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdgj1TpCypclrkZB9g5msGX2g6CqBQB8iiVJllDj_1Ne-QuzQ/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Request help with translation.
              </a>
            </p>
          </OneFaq>
        </div>
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl mb-8">
            Receiving donations and choosing a payment method
          </h1>
          <h5 className="font-bold text-xl mb-4">Key Considerations</h5>
          <p className="mb-8">
            Speed of transactions, fund freezing policies, lack of censorship,
            safety
          </p>
          <h5 className="font-bold text-xl mb-4">Important</h5>
          <p className="mb-4">
            Before posting your payment details on social media, make sure the
            account is set up with two-factor authentication connected to a
            code-generating app.
          </p>
          <p>
            Make sure you have checked with your bank before hosting a
            fundraiser. Excessive deposits might result in your card being
            frozen. If you’re using a Ukrainian bank (Monobank, PrivatBank),
            reach out to their online support and tell them you’re hosting a
            fundraiser for Ukraine.
          </p>
        </div>
        <div className="mt-12">
          <h1 className="font-extrabold text-2xl lg:text-4xl">
            Receiving money with a Ukrainian card
          </h1>
          <PaymentMethods titles={props.title} rows={props.rows} ukraine={true}/>
        </div>
        <div className="mt-12">
          <h1 className="font-extrabold text-2xl lg:text-4xl">
          Using a trusted person to receive donations through an international banking system
          </h1>
          <PaymentMethods titles={props.title} rows={props.rows}/>
        </div>
      </div>
    </Layout>
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
    }
  }
}
