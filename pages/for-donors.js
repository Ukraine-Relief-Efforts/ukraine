import Layout from '../components/layout'
import OneFaq from '../components/SubPage/FAQ/OneFaq';
import Hero from '../components/SubPage/Hero/hero';
import PaymentMethods from '../components/SubPage/PaymentMethods/paymentMethods';

export default function ForDonors() {
  return (
    <Layout>
      <div className='w-full md:w-3/4 lg:w-2/3 pb-16'>
        <Hero title="For donors" description="We’ve compiled some helpful information to give you a better understanding of how to pick the right project to support, and how to transfer funds." />
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl">About this initiative</h1>
          <div className='mt-8 font-light'>
            <p>We have created this website to help Ukrainian fundraisers reach international supporters. problem statement:</p><br />
            <p>One of our main goals was to make evaluation of smaller volunteer-driven fundraisers simple.Much of the work on coordinating emergency humanitarian aid to Ukrainians is done by volunteers.These are friends and family members of people who need help, political activists, and self-organized groups within the Ukrainian diaspora worldwide.They are in direct contact with people on the ground and understand their immediate needs best.They know what’s needed and where and help coordinate fundraising, purchase, and delivery of medical supplies, safety equipment, food etc.</p>
          </div>
        </div>
        <PaymentMethods />
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl mb-2">F.A.Q.</h1>
          <OneFaq title='How have we vetted fundraisers?' tip='Foreigners don&#39;t understand what their donations will be spent on, which reduces the trust between donors and organizations'>
            <p><strong>Large charities:</strong><br></br>
            We looked for recognition by<br></br>
            We&#39;ve prioritized onboarding the organizations that are fundraising to help Ukrainians right now.
            <br></br>
            <br></br>
            <strong>Volunteer-driven fundraisers:</strong><br></br>
            Our volunteers were on an active look out for potential red flags during the onboarding process and used their subjective discretion when approving submissions. For smaller campaigns posted by people with credible social media presence on the behalf of volunteers, we&#39;ve asked them to:<br></br><br></br></p>
            
            <ul className='list-disc ml-8'>
              <li>have a phone conversation before agreeing to host the fundraiser on their social media platform</li>
              <li>ask for receipts and photo evidence from previous supply deliveries</li>
              <li>reach out to the beneficiary group to verify the relationship with the fundraiser and the accuracy of payment details reach out to any personal connections in common</li>
            </ul>

            <p><br></br>
            However, the final vetting is still on you! By aggregating useful data, our ultimate goal was to make it as easy as possible for you to evaluate fundraisers. We are working on two additional features - comment section allowing fundraisers to post updates and photo evidence and “request information” allowing supporters with larger contributions to get in direct touch with fundraiser organizers.</p>
          </OneFaq>
          <OneFaq title='How can I donate?' tip='See the payment methods section above.'>
            <strong>Best practices:</strong>
            We recommend XYZ. This is the fastest way to make sure the money ends up in the hands who need it most.
            <br></br>
            <br></br>
            That said, each fundraise has different needs... [Insert more]
          </OneFaq>
        </div>
      </div>
    </Layout>
  );
}
