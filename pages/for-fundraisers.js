import Layout from '../components/layout'
import Hero from '../components/SubPage/Hero/hero';
import PaymentMethods from '../components/SubPage/PaymentMethods/paymentMethods';

export default function ForFundraisers() {
  return (
    <Layout>
      <div className='w-2/3'>
        <Hero title="For Fundraisers" description="We’ve compiled some helpful information to give you a better understanding of how to pick the right project to support, and how to transfer funds." />
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl">About this initiative</h1>
          <div className='mt-8 font-light'>
            <p>We have created this website to help Ukrainian fundraisers reach international supporters. problem statement:</p><br />
            <p>One of our main goals was to make evaluation of smaller volunteer-driven fundraisers simple.Much of the work on coordinating emergency humanitarian aid to Ukrainians is done by volunteers.These are friends and family members of people who need help, political activists, and self-organized groups within the Ukrainian diaspora worldwide.They are in direct contact with people on the ground and understand their immediate needs best.They know what’s needed and where and help coordinate fundraising, purchase, and delivery of medical supplies, safety equipment, food etc.</p>
          </div>
        </div>
        <PaymentMethods />
      </div>
    </Layout>
  );
}
