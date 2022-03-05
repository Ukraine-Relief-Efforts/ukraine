import Layout from '../components/layout'
import Hero from '../components/SubPage/Hero/hero';
import PaymentMethods from '../components/SubPage/PaymentMethods/paymentMethods';
import Image from 'next/image';
import arrowDown from '../public/assets/icons/arrow_right.svg'
import OneFaq from '../components/SubPage/FAQ/OneFaq';

export default function ForFundraisers() {
  return (
    <Layout>
      <div className="w-full md:w-3/4 lg:w-2/3 pb-16">
        <Hero title="For Fundraisers" description="Helping to communicate your fundraising efforts and credibility to the international community." />
        <p>Fundraisers and aid organizations of Ukraine, we are so grateful for the work you have been doing for the Ukrainian people. Our main goal is to help you get the necessary funds to supply essential humanitarian aid as well as medicine and protective gear for soldiers and volunteer battalions. 
          <br></br><br></br>
          We will do our best to help you communicate your efforts to the international community and convey that you are a trustworthy and efficient coordinator of their funds.</p>
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl">How to apply to get your fundraiser listed?</h1>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image
                src={arrowDown}
                alt="arrow down"
              />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">For Large Organization</h4>
              <p className="mb-4">For established charities or non-profits hosting emergency fundraisers to provide immediate humanitarian relief to Ukrainians on the ground.</p>
              <a className=" font-medium text-lg text-uablue-default underline underline-offset-4 hover:text-uablue-accent" href="https://docs.google.com/document/d/1UcVhNpjNEuGzPSqk1C7GLLX0BPC9VjZOq02mUTsf0LE/edit" target="_blank" rel="noreferrer">Instructions for large organizations</a>
            </div>
          </div>
          <hr className="mt-10"></hr>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image
                src={arrowDown}
                alt="arrow down"
              />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">For Volunteer Fundraisers</h4>
              <p className="mb-4">For volunteers organizing fundraisers for emergency needs of civilian and military groups.</p>
              <a className=" font-medium text-lg text-uablue-default hover:text-uablue-accent underline underline-offset-4" href="https://docs.google.com/document/d/10aLozlKb0P9iiXEsORKoOVWousWyxjAvQ1tZ9uWxdrk/edit" target="_blank" rel="noreferrer">Instructions for volunteer fundraisers</a>
            </div>
          </div>
          <hr className="mt-10"></hr>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image
                src={arrowDown}
                alt="arrow down"
              />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">For Those Posting on a Behalf of the Volunteer Group</h4>
              <p className="mb-4">For individuals with an established and meaningful social media presence who can verify their reputation and are willing to vouch for the emergency fundraiser by Ukrainian volunteers.</p>
              <a className=" font-medium text-lg text-uablue-default hover:text-uablue-accent underline underline-offset-4" href="https://docs.google.com/document/d/1Xrf6CwJ0n6cAqccjf-Q85MlnLrzkqnZMDfjNa5xwAEQ/edit" target="_blank" rel="noreferrer">Instructions for posting on a behalf of the volunteer group</a>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl mb-2">F.A.Q.</h1>
          <OneFaq title="Why do smaller fundraisers need to have a social media post to be featured?">
            <p>This will help donors evaluate the credibility of your fundraiser. When your donation request is on the official social media page of the organization you’re supporting, or a profile of a person with a well-established social reputation, it creates another space for supporters to learn about your efforts.</p>
          </OneFaq>
          <OneFaq title="Can our fundraiser get listed if we don’t have access to a social media page with a meaningful following and engagement?">
            <p>No. This criteria is an essential part of the vetting process for smaller fundraisers. Please reach out to any local activist, Ukrainian diaspora, political figure, or industry professional to vouch for you. Use this guide to explain what’s needed from their side: <a className="underline text-uablue-default hover:text-uablue-accent" href="https://docs.google.com/document/d/1Xrf6CwJ0n6cAqccjf-Q85MlnLrzkqnZMDfjNa5xwAEQ/edit" target="_blank" rel="noreferrer">Backing Reputation.</a></p>
          </OneFaq>
          <OneFaq title="Where can I get help with translating my donations post to English?">
            <p>We have volunteers happy to help create a fundraiser post in English with the information you provide. Please use this form to request help: <a className="underline text-uablue-default hover:text-uablue-accent" href="https://docs.google.com/forms/d/e/1FAIpQLSdgj1TpCypclrkZB9g5msGX2g6CqBQB8iiVJllDj_1Ne-QuzQ/viewform" target="_blank" rel="noreferrer">Request help with translation.</a></p>
          </OneFaq>
        </div>
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl mb-8">Receiving donations and choosing a payment method</h1>
          <h5 className="font-bold text-xl mb-4">Key Considerations</h5>
          <p className="mb-8">Speed of transactions, fund freezing policies, lack of censorship, safety</p>
          <h5 className="font-bold text-xl mb-4">Important</h5>
          <p className="mb-4">Before posting your payment details on social media, make sure the account is set up with two-factor authentication connected to a code-generating app.</p>
          <p>Make sure you have checked with your bank before hosting a fundraiser. Excessive deposits might result in your card being frozen. If you’re using a Ukrainian bank (Monobank, PrivatBank), reach out to their online support and tell them you’re hosting a fundraiser for Ukraine.</p>
        </div>
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl">Receiving money with a Ukrainian card</h1>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image
                src={arrowDown}
                alt="arrow down"
              />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">Monobank</h4>

              <h5 className="font-bold text-xl mb-4">What's needed</h5>
              <p className="mb-4">[content]</p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="mr-5">
                  <h5 className="font-bold text-xl mb-4">Pros</h5>
                  <div className="block">
                    <ul className="list-inside list-disc">
                      <li>Global</li>
                      <li>Scaleable</li>
                      <li>Fits in your pocket</li>
                      <li>Lightening Fast</li>
                    </ul>
                  </div>
                </div>
                <div className="ml-5">
                  <h5 className="font-bold text-xl mb-4">Cons</h5>
                  <ul className="list-inside list-disc">
                    <li>Not Bitcoin</li>
                    <li>Meh UI</li>
                  </ul>
                </div>
              </div>

              <h5 className="font-bold text-xl mb-4">How To</h5>
              <p className="mb-4">[content]</p>
            </div>
          </div>
          <hr className="mt-10"></hr>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image
                src={arrowDown}
                alt="arrow down"
              />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">Privat Bank</h4>
              <h5 className="font-bold text-xl mb-4">What's needed</h5>
              <p className="mb-4">[content]</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="w-100">
                  <h5 className="font-bold text-xl mb-4">Pros</h5>
                  <div className="block">
                    <ul className="list-inside list-disc">
                      <li>Global</li>
                      <li>Scaleable</li>
                      <li>Fits in your pocket</li>
                      <li>Lightening Fast</li>
                    </ul>
                  </div>
                </div>
                <div className="w-100">
                  <h5 className="font-bold text-xl mb-4">Cons</h5>
                  <ul className="list-inside list-disc">
                    <li>Not Bitcoin</li>
                    <li>Meh UI</li>
                  </ul>
                </div>
              </div>

              <h5 className="font-bold text-xl mb-4">How To</h5>
              <p className="mb-4">[content]</p>
            </div>
          </div>
          <hr className="mt-10"></hr>
        </div>
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl">Using a trusted person to receive donations through an international banking system</h1>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image
                src={arrowDown}
                alt="arrow down"
              />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">Venmo</h4>
              <p className="mb-4">[Content]</p>
            </div>
          </div>
          <hr className="mt-10"></hr>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image
                src={arrowDown}
                alt="arrow down"
              />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">Paypal</h4>
              <p className="mb-4">[Content]</p>
            </div>
          </div>

          <hr className="mt-10"></hr>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image
                src={arrowDown}
                alt="arrow down"
              />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">Zelle</h4>
              <p className="mb-4">[Content]</p>
            </div>
          </div>

          <hr className="mt-10"></hr>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image
                src={arrowDown}
                alt="arrow down"
              />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">Revolut</h4>
              <p className="mb-4">[Content]</p>
            </div>
          </div>

          <hr className="mt-10"></hr>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image
                src={arrowDown}
                alt="arrow down"
              />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">CashApp</h4>
              <p className="mb-4">[Content]</p>
            </div>
          </div>

          <hr className="mt-10"></hr>
          <div className="mb-4 flex flex-row mt-10">
            <div className="w-7 shrink-0 mr-2">
              <Image
                src={arrowDown}
                alt="arrow down"
              />
            </div>
            <div className="w-100">
              <h4 className="text-2xl font-bold text-uablue-default mb-4">Patreon</h4>
              <p className="mb-4">[Content]</p>
            </div>
          </div>

          <hr className="mt-10"></hr>
        </div>
      </div>
    </Layout>
  );
}
