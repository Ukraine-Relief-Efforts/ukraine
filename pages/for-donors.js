import Layout from '../components/layout'
import OneFaq from '../components/SubPage/FAQ/OneFaq';
import Hero from '../components/SubPage/Hero/hero';
import Link from 'next/link';

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
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl mb-2">F.A.Q.</h1>
          <OneFaq title='How have we vetted fundraisers?'>
            <p><strong>Large charities:</strong><br></br>
            Our volunteers looked for organizations endorsed in the media. We’ve also considered the relevance and urgency of fundraising efforts.
            <br></br>
            <br></br>
            <strong>Volunteer-driven fundraisers:</strong><br></br>
            Our volunteers actively looked for potential red flags during the onboarding process and used their subjective discretion when approving submissions. <br></br><br></br>For smaller campaigns posted by people with credible social media presence on the behalf of volunteers, we&#39;ve asked them to:<br></br><br></br></p>
            
            <ul className='list-disc ml-8'>
              <li>have a phone conversation with the campaign organizer before agreeing to host the fundraiser on their social media platform</li>
              <li>ask for receipts and photo evidence from previous supply deliveries to validate that money is going to where it is intended</li>
              <li>reach out to the beneficiary group to verify the relationship with the fundraiser and the accuracy of payment details</li>
              <li>reach out to any personal connections in common to further vet the request and the reputation of the coordinator</li>
            </ul>

            <br></br>

            <div className="flex flex-row items-center mb-4 gap-3">
                <span className='shrink-0 w-6'>👉 </span>
                <span><p className=' leading-tight'><strong>Note: while we have done as much as possible to ensure that all donation requests are valid, the final vetting is still your responsibility!</strong></p></span>
            </div>

            <p>
            By aggregating useful data, our goal was to make it as easy as possible for you to evaluate fundraisers. If you’re considering a large donation, but feel like there’s not enough information on the fundraiser you wish to support, please use the “Request Information” feature and we will get you in touch with the organizers as soon as possible. We are also working on a comment section feature that would allow fundraisers to post updates and photo evidence.</p>
          </OneFaq>
          <OneFaq title='Why donate to volunteer-driven fundraisers?'>
            <p>One of our main goals was to make evaluation of smaller volunteer-driven fundraisers simple. Volunteers do much of the work of coordinating emergency humanitarian aid to Ukrainians. These are political activists, Ukrainian diaspora, friends and family members of people requiring immediate aid. They are in direct contact with people on the ground and understand their immediate needs best. 
            <br></br><br></br>
            As a part of a large informal network of volunteers, they purchase and deliver the supplies like medicines, food, body armor, and first aid kits. All charitable donations are crucial, but please take the extra moment to consider these fundraisers.</p>
          </OneFaq>
          <OneFaq title='How can I donate?'>
            <p>Each fundraiser page specifies payment methods available. Click “Donate Now” for payment information. We will never host payment information directly on our website. 
            <br></br><br></br></p>
            <div className="flex flex-row items-center mb-4 gap-3">
                <span className='shrink-0 w-6'>👉 </span>
                <span><p className=' leading-tight'><strong>Donating to a Ukrainian card:</strong>Wise, SWIFT, Western Union</p></span>
            </div>
            <div className="flex flex-row items-center mb-4 gap-3">
                <span className='shrink-0 w-6'>👉 </span>
                <span><p className=' leading-tight'><strong>Donating to a US-based account:</strong>Wise, SWIFT, Western Union</p></span>
            </div>
            <Link
              href='/'
            >
              <a className='font-medium text-lg text-uablue-default underline underline-offset-4 hover:bg-uablue-accent'>See All Organizations</a>
            </Link>
          </OneFaq>
        </div>
      </div>
    </Layout>
  );
}
