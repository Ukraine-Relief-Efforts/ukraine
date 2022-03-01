import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <div className="pt-5 space-y-5">
        <h1 className="font-extrabold text-[#005BBC] text-3xl md:text-4xl lg:text-5xl">
          About Us
        </h1>
        <h2 className="font-bold text-2xl">Our Mission Statement</h2>
        <p>
          We source and vet large and small non-profit organizations, troops and
          individuals supporting Ukraine and connect them with foreign donors
        </p>
        <h2 className="font-bold text-2xl">Problems We are Solving</h2>
        <div className="flex flex-wrap">
          <div className="md:basis-1/2 space-y-4">
            <h3 className="font-bold text-lg">
              <span className="w-2 rounded-full bg-[#005BBC] p-2">1</span>{" "}
              Credibility
            </h3>
            <p>
              👉 Foreigners don&apos;t understand what their donations will be
              spent on, which reduces the trust between donors and organizations
            </p>
            <p>
              👉 Larger organizations receive a lot of funding, while smaller
              on-the-ground groups cannot get necessary funds because of smaller
              reach & lack of vetting process to confirm their legitimacy.{" "}
            </p>
          </div>
          <div className="md:basis-1/2 space-y-4">
            <h3 className="font-bold text-lg">Language Barrier</h3>
            <p>
              👉 Foreigners with large contributions want to get directly in
              touch with the organizations. However, finding the direct contact
              is difficult and some oragnizations don&apos;t speak English.
            </p>
            <p>
              👉 Organizations lack English descriptions on their donations
              pages, especially on how they will spend the money and evidence of
              past work, which makes their information less accessible.
            </p>
          </div>
        </div>

        <h2 className="font-bold text-2xl">Contact Us</h2>
        <div className="flex flex-wrap  space-y-4">
          <div className="md:basis-1/2">
            <h3 className="font-bold text-lg">If you are an Ukrainian NGO</h3>
            <p>
              👉 Email ___@gmail.com or Telegram ______ to discuss how we can
              support you better on our platform
            </p>
          </div>
          <div className="md:basis-1/2">
            <h3 className="font-bold text-lg">
              If you want to join the team to build
            </h3>
            <p>
              👉 Email ___@gmail.com or Telegram ______ to discuss how you can
              contribute your skills and build this project together
            </p>
          </div>
          <div className="md:basis-1/2">
            <h3 className="font-bold text-lg">If you are a donor</h3>
            <p>
              👉 Email ___@gmail.com or Telegram ______ to share with us your
              problems or questions
            </p>
          </div>
          <div className="md:basis-1/2">
            <h3 className="font-bold text-lg">Collaboration</h3>
            <p>
              👉 Email ___@gmail.com or Telegram ______ to discuss how we can
              work together to raise awareness of the Ukrainiain humanitarian
              crisis
            </p>
          </div>
        </div>

        <h2 className="font-bold text-2xl">Share Our Page</h2>
        <div>
          <p>Share on Facebook</p>
          <p>Share on Twitter</p>
          <p>Share on Telegram</p>
        </div>
      </div>
    </Layout>
  );
}
