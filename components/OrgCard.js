import Link from "next/link";
import Image from "next/Image";

function OrgCard({ titles, values, orgIndex }) {
  const [
    orgName,
    donationLinks,
    largeDonationsContact,
    englishDesc,
    cause,
    spendingTowards,
    acomplishments,
    backedBy,
    paymentMethod,
    crypto,
    socials,
    translation,
    photos,
    frenchDesc,
  ] = values;
  function navigateToDonationSite(url) {
    if (typeof window !== "undefined") {
      if (window.document.readyState == "complete") {
        window.open(url, "_blank");
      }
    }
  }
  return (
    <div className="bg-[#F2F6FF] rounded-3xl mx-5 mb-5">
      <Link href={`/${orgIndex}`}>
        <a>
          <div className="container h-3/8 w-full rounded-lg  mb-2">
            <Image
              alt="Organization Logo"
              className="object-cover rounded-t-lg"
              src="/pexels-cottonbro-3831760 1.svg"
              width="100%"
              height="100%"
            ></Image>
          </div>
          <h1 className="mx-5 text-3xl text-black mb-3 font-extrabold ">
            {orgName}
          </h1>
          <p className="mx-5 text-l mb-2">{englishDesc}</p>
        </a>
      </Link>
      <div className="flex mb-6 mt-5">
        {donationLinks.split("\n").map((link, index) => {
          return (
            <>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  className="container text-xl rounded-md font-boldest text-white text-center bg-black mr-1 ml-5 mb-2 ring-2 ring-black hover:bg-[#ffd700] hover:ring-3 hover:ring-[#0057b7] hover:text-black "
                >
                  Donate Now
                </a>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
export default OrgCard;
