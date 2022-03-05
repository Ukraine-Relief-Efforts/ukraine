import Layout from '../components/layout'
import Hero from '../components/SubPage/Hero/hero';
import PaymentMethods from '../components/SubPage/PaymentMethods/paymentMethods';
import Image from 'next/image';
import arrowDown from '../public/assets/icons/arrow_right.svg'

export default function ForFundraisers() {
  return (
    <Layout>
      <div className='w-full md:w-3/4 lg:w-2/3 pb-16'>
        <Hero title="For Fundraisers" description="Helping to communicate your fundraising efforts and credibility to the international community." />
        <p>Fundraisers and aid organizations of Ukraine, we are so grateful for the work you have been doing for the Ukrainian people. Our main goal is to help you get the necessary funds to supply essential humanitarian aid as well as medicine and protective gear for soldiers and volunteer battalions. 
          <br></br><br></br>
          We will do our best to help you communicate your efforts to the international community and convey that you are a trustworthy and efficient coordinator of their funds.</p>
        <div className="mt-24">
          <h1 className="font-extrabold text-2xl lg:text-4xl">How to apply to get your fundraiser listed?</h1>
          <div className='mb-4 flex flex-row mt-10'>
            <div className='w-7 shrink-0 mr-2'>
              <Image
                src={arrowDown}
                alt='arrow down'
              />
            </div>
            <div className='w-100'>
              <h4 className='text-2xl font-bold text-uablue-default mb-4'>For Large Organization</h4>
              <p className='mb-4'>For established charities or non-profits hosting emergency fundraisers to provide immediate humanitarian relief to Ukrainians on the ground.</p>
              <a className=' font-medium text-lg text-uablue-default underline underline-offset-4 hover:bg-uablue-accent'>Instructions for large organizations</a>
            </div>
          </div>
          <hr className='mt-10'></hr>
          <div className='mb-4 flex flex-row mt-10'>
            <div className='w-7 shrink-0 mr-2'>
              <Image
                src={arrowDown}
                alt='arrow down'
              />
            </div>
            <div className='w-100'>
              <h4 className='text-2xl font-bold text-uablue-default mb-4'>For Volunteer Fundraisers</h4>
              <p className='mb-4'>For volunteers organizing fundraisers for emergency needs of civilian and military groups.</p>
              <a className=' font-medium text-lg text-uablue-default hover:bg-uablue-accent underline underline-offset-4'>Instructions for volunteer fundraisers</a>
            </div>
          </div>
          <hr className='mt-10'></hr>
          <div className='mb-4 flex flex-row mt-10'>
            <div className='w-7 shrink-0 mr-2'>
              <Image
                src={arrowDown}
                alt='arrow down'
              />
            </div>
            <div className='w-100'>
              <h4 className='text-2xl font-bold text-uablue-default mb-4'>For Those Posting on a Behalf of the Volunteer Group</h4>
              <p className='mb-4'>For individuals with an established and meaningful social media presence who can verify their reputation and are willing to vouch for the emergency fundraiser by Ukrainian volunteers.</p>
              <a className=' font-medium text-lg text-uablue-default hover:bg-uablue-accent underline underline-offset-4'>Instructions for posting on a behalf of the volunteer group</a>
            </div>
          </div>
        </div>
        <PaymentMethods />
      </div>
    </Layout>
  );
}
