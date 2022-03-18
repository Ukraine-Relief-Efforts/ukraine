import Layout from '../../components/layout'
import Hero from '../../components/SubPage/Hero/hero';
import sheets from "../../lib/sheets";
import Content from '../../components/content';
import Link from "next/link";

export default function ForReputationBackers(props) {
  return (
    <div>
    <Layout>
      <div className="w-full md:w-5/6 lg:w-2/3 pb-16">
        <div className="mt-12">
            <Link href="/for-fundraisers" passHref>  
                <div className='cursor-pointer'>{'<'} Back</div>
            </Link>
        </div>
        <Hero
          title="For Reputation Backers"
          description=""
        />
        <div className="mt-24">
          <h1 className="font-semibold text-2xl lg:text-4xl">
            Who are the reputation backers?
          </h1>  
          <br />        
          <p>
          Individuals with meaningful social media presence who can verify their reputation and are willing to vouch for the emergency fundraiser by Ukrainian volunteers. This person could be a local activist, supporter abroad, political figure, industry professional. They have to be committed to doing additional due diligence on the project and hosting a fundraiser post on their social media platform. If you think you can help - read on!
          </p>          
        </div>
      </div>
    </Layout>
    <Content>
        <div className="pt-24">
            <h1 className="font-bold text-uablue-default text-2xl lg:text-4xl mb-6">Problem</h1>
            <p>
            We have many volunteers on the ground coordinating supplies and aid for Ukrainian civilians and military. They are in direct contact with local groups on the ground and understand their immediate needs best. 
            </p>
            <br />   
            <p>
            The process of getting aid is messy and decentralized. Troops or civilians ask volunteers for help. Volunteers have to find suppliers and orchestrate delivery from Europe into some part of Ukraine. Right now, there is not a better process. Centralization would be more dangerous by increasing the chances of ambushes and putting delivery volunteers and recipients in danger. Technology cannot help — yet.
            </p>
            <br />
            <p>
            Even still, we can help streamline the funding process to support volunteers coordinating the supplies and aid. So far, fundraising is limited by someone’s personal network. Volunteers rely on their reputation to secure the funds from friends and acquaintances. Ukrainians cannot afford to donate much, and some funding amounts are much larger than someone’s personal network can afford. For example, my friends in Kyiv joined a civilian resistance group that needed traumatic bleeding patches. These patches save lives but also cost $100 per patch for a quality brand. To help them, I need to find a supplier in Europe, delivery people, and funds. After the hustle of finding a supplier and setting up logistics through a trusted network of personal connections, I can only afford to buy 20 patches with the $2,000 fundraised through personal connections. The good news is that I get to help my friends. The bad news is that I cannot wait for more funding to come in and later send a larger supply because these patches are needed as soon as possible. 
            </p>
            <br />
            <p>
            If individual volunteers get more funding, they can buy more supplies and get these delivered where they are most needed faster.
            </p>
        </div>
        <div className="mt-24">
            <h1 className="font-bold text-uablue-default text-2xl lg:text-4xl mb-6">
                Solution
            </h1>          
            <p>
            You can help! As someone who shares a meaningful level of social media reputation, is willing to reveal your identity, and is willing to do the due diligence, you can ask for donations on behalf of a volunteer or a specific group they are aiding.
            </p>
            <br />
            <p className='font-semibold'>Forms of due diligence:</p>
            <br />
            <ul className='mx-12'>
                <li className='mb-2'>👉 Ask for some evidence of connection to a specific battalion or local volunteer groups</li>
                <li className='mb-2'>👉 Ask for receipts and photos of previous deliveries</li>
                <li className='mb-2'>👉 Ask for a social media profiles</li>
                <li className='mb-2'>👉 Ask people in the battalion/nonprofits to verify whether the payment details provided are accurate</li>
                <li className='mb-2'>👉 Reach out to any personal connections in common</li>
                <li className='mb-2'>👉 Have a private conversation over the phone: ask about the work they’re doing, how will they spend the funding, the initiatives they’ve worked on in the past</li>
            </ul>
            <br />
            <p>Once you have decided to share the fundraiser on your platform, draft a social media post that includes as much of the following information as possible: (Please be sure to ask volunteers to read and confirm this draft post before sharing)</p>
            <br />
            <ul className='mx-12'>
                <li className='mb-2'>👉 <b><i>Name of the organization / donation request</i></b></li>
                <li className='mb-2'>👉 <b><i>Description</i></b></li>
                <li className='mb-2'>👉 <b><i>One sentence on what the money will be used for</i></b> <i>(try to provide quantities whenever possible)</i></li>
                <li className='mb-2'>👉 <b><i>How much approximately you are trying to raise</i></b></li>
                <li className='mb-2'>👉 <b><i>If anyone else backs this effort:</i></b> <i>Mention if the group you are representing is affiliated with any larger organizations or have been endorsed by famous individuals (please include links to media evidence)</i></li>
                <li className='mb-2'>👉 <b><i>Any other social media links that can help donors better vet this donation request</i></b> <i>(links to previous fundraisers supported by many people, links to social media posts with photos of past donations, or other evidence of their activity)</i></li>
                <li className='mb-2'>
                    👉 <b><i>Payment method and details:</i></b>
                    <br />
                    <i>Please verify with volunteers verbally or via encrypted chat that these details are accurate.</i>
                    <ul className='ml-12'>
                        <li>&bull; <b className='rounded-full bg-textAccent-yellow m-2 inline-block p-1'>Payment details MUST be included in your post.</b> We are not hosting any payment details on <b>helpuanow.org!</b></li>
                        <li>&bull; <b className='rounded-full bg-textAccent-yellow m-2 inline-block p-1'>Note on payment methods: </b> If you can find someone with PayPal, Venmo, or Zelle who can accept donations on your behalf, this will help bring more funding! The simpler the payment process the more likely people will contribute!</li>
                    </ul>
                </li>
                <li className='mb-2'>👉 <b>Contact information for big donations</b>
                <br /> Only add if applicable; please make sure it’s not someone on the frontline for safety purposes</li>
            </ul>
            <br />
            <div className='bg-textAccent-blue rounded-3xl block p-2'>
                <p>
                    <b>If you need help writing or translating this post to English, our volunteers can help</b> Please fill out this form in Ukrainian: <a href='https://forms.gle/YYkY5PMh1vp8ThjcA' className=" font-medium text-lg text-uablue-default hover:text-uablue-accent underline underline-offset-4" target="_blank" rel="noreferrer">https://forms.gle/YYkY5PMh1vp8ThjcA</a>
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
