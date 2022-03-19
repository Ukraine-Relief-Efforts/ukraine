import Layout from '../../components/layout'
import Hero from '../../components/SubPage/Hero/hero';
import sheets from "../../lib/sheets";
import Content from '../../components/content';
import Link from 'next/link';

export default function ForSmallFundraisers(props) {
  return (
    <div>
    <Layout>
      <div className="w-full md:w-5/6 lg:w-2/3 pb-16">
        <div className="mt-12">
            <Link href="/for-fundraisers" passHref>  
                <a>{'<'} Back</a>
            </Link>
        </div>
        <Hero
          title="For Small Fundraisers"
          description="We are so grateful for the relentless work you have been doing to help Ukrainian troops protect our country and to aid our people in need!"
        />
      </div>
    </Layout>
    <Content>
        <div className="pt-12">                    
          <p>  
            We have created this website to help you secure emergency funding for time-sensitive aid request. Our goal is to help you communicate to foreign philanthropists the purposes of your fundraiser and convey that you are a trustworthy coordinator of their funds
          </p>          
        </div>
        <div className="mt-24">
          <h1 className="font-bold text-2xl lg:text-4xl text-uablue-default">Step 1 - Reputation backing</h1>
          <br />
          <p>
          Right now, you need to rely on people in your personal network for donations. We are trying to get you support from strangers abroad. To do this, we need to communicate that you are who you say you are and that you will spend the money the way you promised. We have thought of a few ways to create trust between you and the philanthropists, the main one being:
          </p>
          <br />   
          <p>
            Your request for donation has to come from a credible social media account.
          </p>
          <p> <span className='rounded-full bg-textAccent-yellow m-2 inline-block p-1'>The fundraisers should be hosted on:</span></p>
          <ul>
            <li className='mt-2'>👉 <b>a social media page of the battalion, your volunteer group, etc.</b> 
            <br />The page should have been active for the past few months, have some following, and preferably include some photo evidence of previous aid purchases</li>
            <li className='mt-2'>👉 <b>OR a social media of someone credible who is endorsing your project</b>
            <br />This person could be a local activist, supporter abroad, political figure, industry professional, etc. This person should have a meaningful social reputation and be willing to vouch for you. <b>Please share this guide with them: <a href='https://docs.google.com/document/d/1Xrf6CwJ0n6cAqccjf-Q85MlnLrzkqnZMDfjNa5xwAEQ/edit?usp=sharing' className=" font-medium text-lg text-uablue-default underline underline-offset-4 hover:text-uablue-accent" target='_blank' rel='noreferrer'>link</a></b></li>
          </ul>
        </div>
        <div className="mt-24">
          <h1 className="font-bold text-2xl lg:text-4xl text-uablue-default">
          Step 2 - Social media post
          </h1>    
          <br />      
          <p>
          If you have a website, please check our guide for <Link href="/for-fundraisers/for-large-organizations"><a className=" font-medium text-lg text-uablue-default underline underline-offset-4 hover:text-uablue-accent">bigger organizations</a></Link>. The rest of these guidelines will focus on smaller volunteer groups working on the ground to coordinate supplies for Ukrainian people.
          </p>
          <br />
          <p>
          If you are a part of a smaller battalion or an individual volunteer fundraising on the behalf of a group, you will need to write a detailed social media post in English. This post needs to be from the account of <a href='https://docs.google.com/document/d/18TsScJQVt0z8drSLK0cN6O4BZldaB9IeGjOs74zAy7A/edit?usp=sharing' className="font-medium text-lg text-uablue-default underline underline-offset-4 hover:text-uablue-accent" target='_blank' rel='noreferrer'>the reputation backer</a> and include as much of the following information as possible:
          </p>
          <ul>
            <li className='mt-4'>
            👉 <b>Name of the organization / donation request</b>
            </li>
            <li className='mt-4'>
            👉 <b>Description</b>
            </li>
            <li className='mt-4'>
            👉 <b>One sentence on what the money will be used for</b> (try to provide quantities whenever possible)
            </li>
            <li className='mt-4'>
            👉 <b>How much approximately you are trying to raise</b>
            </li>
            <li className='mt-4'>
            👉 <b>If anyone else backs this effort:</b> 
            <br />Mention if the group you are representing is affiliated with any larger organizations or have been endorsed by famous individuals (please include links to media evidence)
            </li>
            <li className='mt-4'>
            👉 <b>Any other social media links that can help donors better vet this donation request</b> 
            <br />links to previous fundraisers supported by many people, links to social media posts with photos of past donations, or other evidence of their activity
            </li>
            <li className='mt-4'>
            👉 <b>Payment method and details:</b> 
            <br /> Please verify with volunteers verbally or via encrypted chat that these details are accurate.
                <ul>
                    <li className='ml-4'>
                    <span className='rounded-full bg-textAccent-yellow m-2 inline-block p-1'>&bull;<b>Payment details MUST be included in your post.</b></span> We are not hosting any payment details on <b>helpuanow.org!</b>
                    </li>
                    <li className='ml-4'>
                    <span className='rounded-full bg-textAccent-yellow m-2 inline-block p-1'>&bull;<b>Note on payment methods:</b></span>
                    <br />If you can find someone with PayPal, Venmo, or Zelle who can accept donations on your behalf, this will help bring more funding! The simpler the payment process the more likely people will contribute!                       
                    </li>
                </ul>
            </li>
            <li className='mt-4'>
            👉 <b>Contact information for big donations</b> 
            <br />Only add if applicable; please make sure it’s not someone on the frontline for safety purposes
            </li>            
          </ul>
          <br />
          <div className='bg-textAccent-blue rounded-3xl block p-4'>
            <p>
                <b>If you need help writing or translating this post to English, our volunteers can help</b> Please fill in this form in Ukrainian: <a href='https://forms.gle/YYkY5PMh1vp8ThjcA' className="font-medium text-lg text-uablue-default underline underline-offset-4 hover:text-uablue-accent" target='_blank' rel='noreferrer'>https://forms.gle/YYkY5PMh1vp8ThjcA</a>
            </p>
          </div>
        </div> 
        <div className="mt-24">
          <h1 className="font-bold text-2xl lg:text-4xl text-uablue-default">Step 3 - Submitting to the website</h1>
          <br />
          <p>
          <b>Please fill in <a href='https://forms.gle/k7X5SMjTBovUpfqFA' className="font-medium text-lg text-uablue-default underline underline-offset-4 hover:text-uablue-accent" target='_blank' rel='noreferrer'>this form</a></b>. This is a tedious task, and we understand you are already above your capacity. However, we hope that taking the time to work with us will help you reach more donors, receive more funding, and purchase the needed supplies and aid for as many people as possible. Please only submit this form <b>AFTER</b> you have made and shared the detailed post on social media.
          </p>
          <br />   
          <div className='bg-textAccent-blue rounded-3xl block p-4'>
          <p>
          <b><span className='text-red-700'>!</span> IMPORTANT:</b> we can only feature you on the website if you have a detailed post with the above specification that is posted from a reliable social media profile or your official website. If your organization is already featured, you cannot apply for another fundraiser.
          </p>
          </div>
        </div>             
    </Content>
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
    }
  }
}
