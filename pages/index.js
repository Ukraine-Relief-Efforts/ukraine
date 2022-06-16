import Head from 'next/head'
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OrgCard from "../components/OrgCard";
import OrgPage from "../components/OrgPage";
import Hero from "../components/Hero/hero";
import Layout from "../components/layout";
import Modal from "react-modal";
import Image from "next/image";
import Link from "next/link";
import { getMiddlewareManifest } from "next/dist/client/route-loader";
import { queryContentful } from "../lib/contentful/Api";
import { fundraiserQuery } from "../graphql/queries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import arrowRight from "../public/assets/icons/arrow_right.svg";
import arrowRBlue from "../public/assets/icons/arrow_r_blue.svg";
import arrowLBlue from "../public/assets/icons/arrow_l_blue.svg";
import arrowRWhite from "../public/assets/icons/arrow_r_white.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

Modal.setAppElement("#__next");

export default function Home(props) {
    const router = useRouter();
    const urgentRef = useRef();

    let small, big;
    [small, big] = ["Small Fundraisers", "Large Charities"];
    const [openTab, setOpenTab] = useState(small);
    const smallGroup = props.rows.filter((row) => {
        return row.smallOrganization ? row.smallOrganization : false;
    });
    const orgList =
        openTab === small && smallGroup
            ? smallGroup
            : props.rows.filter((row) => row && !smallGroup.includes(row));
    const [modalIsOpen, setIsOpen] = useState(false);
    const [expandModal, setExpandModal] = useState(false);
    const [orgData, setOrgData] = useState([]);

    // TODO: modal needs to be removed, temporary fix to redirect to page immediately
    function openModal(rowNumber, rowData) {
        setExpandModal(true);
        setOrgData(rowData);
        router.push(`/${rowNumber}`);
    }

    function closeModal() {
        setIsOpen(false);
        window.history.pushState(null, null, `/`);
    }

    // function goToModalPage() {
    //     setExpandModal(!expandModal);
    //     setTimeout(() => router.push(`/${orgData[orgData.length - 1]}`), 80);
    // }
	
	

    return (
      <Layout isIndexPage="true">
        <Head>
          <title>
            Help UA Now | Donate to vetted, volunteer run fundraisers in
            Ukraine.
          </title>
          <meta
            key="home-description"
            name="description"
            content="Help UA Now connects you to local, volunteer run fundraisers in Ukraine. Provide urgent, life-saving aid directly to those in need through one of our vetted partners. Donate to as many causes as you’d like, all in one place"
          />
        </Head>
        <Hero urgentRef={urgentRef} />
        <div className="bg-[#152D48] py-8 px-6 sm:px-16 sm:pt-20" ref={urgentRef}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-start">
              <div className="bg-[#f76659] rounded text-white font-bold text-sm border-box p-1 mr-2">URGENT</div>
              <h4 className="text-white font-bold text-2xl mb-4">
                Consider starting with these urgent needs           
              </h4>
            </div>
            <div className="flex">
              <div className="flex swiper-prev cursor-pointer bg-white border rounded p-1 mr-2">
                <Image
                  src={arrowLBlue}
                  alt={"left arrow icon"}
                  layout="intrinsic"
                  height={18}
                  width={18}
                />
              </div>
              <div className="flex swiper-next cursor-pointer bg-white border rounded p-1">
                <Image
                  src={arrowRBlue}
                  alt={"right arrow icon"}
                  layout="intrinsic"
                  height={18}
                  width={18}
                />
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={{nextEl: ".swiper-next",
            prevEl: ".swiper-prev"}}
            modules={[Navigation]}
            className="swiper"
            autoHeight="true"
          >
            {orgList &&
              orgList.map((row, index) => {
                return (
                    <SwiperSlide key={index} className="container md:col-span-6 xl:col-span-4 col-span-12 flex !h-full">
                      <OrgCard
                        orgIndex={row.slug}
                            titles={props.title}
                            values={row}
                            open={() => openModal(row.slug, row)}
                        whiteText={true}
                      ></OrgCard>
                    </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div className="py-8 px-6 sm:px-16 sm:pt-20 sm:pb-28">
          <div className="flex justify-between mb-12">
            <h4 className="font-bold text-2xl">
              How <i>HelpUkraineNow</i> vets each trusted organization      
            </h4>
            <div>
              <Link href="/for-donors">
                <a className="flex justify-between align-center cursor-pointer">
                  <p className="font-bold text-[#015bbc] mr-2">Learn more</p>
                  <Image
                    src={arrowRBlue}
                    alt={"right arrow icon"}
                    layout="intrinsic"
                    height={18}
                    width={18}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/4">
              <div className="text-center mb-2">
                <Image
                  src={"/assets/ok_icon.svg"}
                  alt={"ok icon"}
                  layout="intrinsic"
                  height={40}
                  width={40}
                />
              </div>
              <h5 className="font-bold mb-2 text-xl">We verify social accounts</h5>
              <p>Ask for social media profiles and personal contacts of key volunteers involved with the project</p>
            </div>
            <div className="w-1/4">
              <div className="text-center mb-2">
                <Image
                  src={"/assets/ok_icon.svg"}
                  alt={"ok icon"}
                  layout="intrinsic"
                  height={40}
                  width={40}
                />
              </div>
              <h5 className="font-bold mb-2 text-xl">We communicate with them</h5>
              <p>Ask for their spending plan; question the credibility and readiness of their local suppliers and partners</p>
            </div>
            <div className="w-1/4">
              <div className="text-center mb-2">
                <Image
                  src={"/assets/ok_icon.svg"}
                  alt={"ok icon"}
                  layout="intrinsic"
                  height={40}
                  width={40}
                />
              </div>
              <h5 className="font-bold mb-2 text-xl">We reference the database</h5>
              <p>Ask for evidence of a connection to the beneficiary group they’re aiding</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-8 px-6 sm:px-16 sm:pt-20 relative">
          <div className="mb-4 w-full flex justify-center absolute top-[-1.5rem] left-0">
            <ul
                className="flex rounded-xl border border-black bg-white cursor-pointer overflow-hidden"
              >
                <li
                  key={1}
                  className="border-r border-r-1 border-black py-4 px-12 text-center font-bold text-sm hover:bg-[#152d48] hover:text-white"
                >
                  💊 Medicine
                </li>
                <li
                  key={2}
                  className="border-r border-r-1 border-black py-4 px-12 text-center font-bold text-sm hover:bg-[#152d48] hover:text-white"
                >
                  🛡 Protection
                </li>
                <li
                  key={3}
                  className="border-r border-r-1 border-black py-4 px-12 text-center font-bold text-sm hover:bg-[#152d48] hover:text-white"
                >
                  🚑 Evacuation
                </li>
                <li
                  key={4}
                  className="py-4 px-12 text-center font-bold text-sm hover:bg-[#152d48] hover:text-white"
                >
                  🍞 Food and Essentials
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between">
                <h4 className="font-bold text-2xl mb-4">
                  Support evacuation and aid efforts in combat zones      
                </h4>
                <div className="flex items-center">
                  <div className="flex swiper-prev-2 cursor-pointer bg-white border rounded p-1 mr-2">
                    <Image
                      src={arrowLBlue}
                      alt={"left arrow icon"}
                      layout="intrinsic"
                      height={18}
                      width={18}
                    />
                  </div>
                  <div className="flex swiper-next-2 cursor-pointer bg-white border rounded p-1">
                    <Image
                      src={arrowRBlue}
                      alt={"right arrow icon"}
                      layout="intrinsic"
                      height={18}
                      width={18}
                    />
                  </div>
                </div>
              </div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={{nextEl: ".swiper-next-2",
                prevEl: ".swiper-prev-2"}}
                modules={[Navigation]}
                className="swiper"
                autoHeight="true"
              >
                {orgList &&
                  orgList.map((row, index) => {
                    return (
                        <SwiperSlide key={index} className="container md:col-span-6 xl:col-span-4 col-span-12 flex !h-full">
                          <OrgCard
                            orgIndex={row.slug}
                            titles={props.title}
                            values={row}
                            open={() => openModal(row.slug, row)}
                          ></OrgCard>
                        </SwiperSlide>
                    );
                  })}
              </Swiper>
          </div>
        </div>
        <div className="bg-[#152D48] py-8 px-6 sm:px-16 sm:pt-20 pb-20">
          <h4 className="text-white font-bold text-2xl mb-4">
            Use your donations to help     
          </h4>
          <div className="flex justify-between">
            <div className="w-[32%] h-96 box-border cursor-pointer relative rounded-xl overflow-hidden border-2 border-transparent hover:border-[#d1d7df]">
              <Image
                src={"/assets/placeholder.gif"}
                alt={"placeholder"}
                layout="fill"
                className="!object-cover"
              />
              <div className="flex absolute bottom-4 left-4 z-10">
                <span className="text-white font-bold text-xl mr-2">Children</span>
                <Image
                  src={arrowRWhite}
                  alt={"right arrow icon"}
                  layout="intrinsic"
                  height={18}
                  width={18}
                />
              </div>
            </div>
            <div className="w-[32%] h-96 box-border cursor-pointer relative rounded-xl overflow-hidden border-2 border-transparent hover:border-[#d1d7df]">
              <Image
                src={"/assets/placeholder.gif"}
                alt={"placeholder"}
                layout="fill"
                className="!object-cover"
              />
              <div className="flex absolute bottom-4 left-4 z-10">
                <span className="text-white font-bold text-xl mr-2">Refugees</span>
                <Image
                  src={arrowRWhite}
                  alt={"right arrow icon"}
                  layout="intrinsic"
                  height={18}
                  width={18}
                />
              </div>
            </div>
            <div className="w-[32%] h-96 box-border cursor-pointer relative rounded-xl overflow-hidden border-2 border-transparent hover:border-[#d1d7df]">
              <Image
                src={"/assets/placeholder.gif"}
                alt={"placeholder"}
                layout="fill"
                className="!object-cover"
              />
              <div className="flex absolute bottom-4 left-4 z-10">
                <span className="text-white font-bold text-xl mr-2">Animals</span>
                <Image
                  src={arrowRWhite}
                  alt={"right arrow icon"}
                  layout="intrinsic"
                  height={18}
                  width={18}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 px-6 sm:px-16 sm:pt-20">
          <h4 className="font-bold text-2xl mb-4">F.A.Q.</h4>
          <div className="mb-4 flex flex-row">
              <div className="w-7 shrink-0 mr-2">
                  <Image src={arrowRight} alt="arrow down" />
              </div>{" "}
              <a href="for-donors">
                  <h4 className="text-2xl font-bold text-uablue-default">
                      Why donate to small fundraisers?
                  </h4>
              </a>
          </div>
          <div className="mb-4 flex flex-row">
              <div className="w-7 shrink-0 mr-2">
                  <Image src={arrowRight} alt="arrow down" />
              </div>{" "}
              <a href="for-donors">
                  <h4 className="text-2xl font-bold text-uablue-default">
                      How do we vet volunteer-driven fundraisers?
                  </h4>
              </a>
          </div>
          <div className="mb-4 flex flex-row">
              <div className="w-7 shrink-0 mr-2">
                  <Image src={arrowRight} alt="arrow down" />
              </div>{" "}
              <a href="for-donors">
                  <h4 className="text-2xl font-bold text-uablue-default">
                      How to donate?
                  </h4>
              </a>
          </div>
      </div>

        {/* <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8">
          <div className="w-full flex justify-center absolute right-0 -top-9">
            <ul
              className="w-11/12 sm:w-1/2 flex list-none mt-3 mb-4 flex-row min-w-fit rounded-full box-border
              border-2 border-white bg-gray-200"
              role="tablist"
            >
              {[small, big].map((tab) => {
                return (
                  <li
                    key={tab}
                    className="box-border mr-2 last:mr-0 flex-auto text-center rounded-full border-2 border-gray-200"
                  >
                    <a
                      key={tab}
                      className={
                        "text-sm font-bold px-5 py-3 rounded-full " +
                        "block leading-normal " +
                        (openTab === tab
                          ? "text-blue-600 bg-white"
                          : "text-black bg-gray-200")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(tab);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      {tab}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {openTab === small ? (
            <div className="w-full flex flex-col justify-center">
              <div className="text-sm max-w-xl font-light px-0 sm:px-5 py-3 text-center my-0 mx-auto">
                Donate directly to volunteers helping on the ground! All small
                fundraisers should be linked to credible social media accounts.
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col justify-center">
              <div className="text-sm max-w-xl font-light px-0 sm:px-5 py-3 text-center my-0 mx-auto">
                Registered charities and nonprofits providing humanitarian
                relief and supporting the Ukrainian army.
              </div>
            </div>
          )}

          {!orgList.length && (
            <div className="w-full flex justify-center">
              <h2>Please, check back later</h2>
            </div>
          )} */}

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={() => {
              document.querySelector("body").style.overflow = "hidden";
            }}
            onAfterClose={() => {
              document.querySelector("body").style.overflow = "auto";
            }}
            onRequestClose={closeModal}
            contentLabel="Organization Page"
            expandModal={expandModal}
            className={
              "ReactModal__Content pb-12 md:pb-0 mx-auto mt-7 md:mt-12 mb-0 md:mb-12 max-h-[100vh] md:max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white rounded-t-3xl md:rounded-3xl max-w-[100vw] md:max-w-[90vw] transition-all duration-500" +
              (expandModal && "top-[120px] max-w-[100vw]")
            }
            style={{
              overlay: { backgroundColor: "rgba(4, 25, 48, 0.75)" },
            }}
          >
            <div
              className="
            absolute
            right-0 md:right-5 lg:right-8 xl:right-14
            top-2 md:top-6
            flex flex-col gap-3
          "
            >
              <button
                className="h-10 w-10 object-cover bg-white bg-opacity-30 rounded-full flex justify-center items-center"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  goToModalPage();
                }}
                className="h-10 w-10 object-cover bg-white bg-opacity-30 rounded-full flex justify-center items-center "
              >
                <svg
                  alt="expand"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>
            </div>
            <OrgPage orgData={orgData}></OrgPage>
          </Modal>
          {/* <div className="grid gap-6 sm:gap-12 grid-cols-12 w-100 mt-4 h-713 padding-2">
            {orgList &&
              orgList.map((row, index) => {
                return (
                  <div
                    key={index}
                    className="container md:col-span-6 xl:col-span-4 col-span-12 flex"
                  >
                    <OrgCard
                      orgIndex={row[row.length - 1]}
                      titles={props.title}
                      values={row}
                      open={() => openModal(row[row.length - 1], row)}
                    ></OrgCard>
                  </div>
                );
              })}
          </div> */}
        {/* </div> */}
      </Layout>
    );
}

export async function getStaticProps({ locale }) {

	const data = await queryContentful(fundraiserQuery);

	var rows = [];

	for(var i = 0; i < data.data.fundraiserCollection.items.length; i++)
	{
		rows.push(data.data.fundraiserCollection.items[i]);
	}

	const title = "";

	return {
	props: {
	  ...(await serverSideTranslations(locale, ["about-us", "common"])),
	  title,
	  rows
	},
	revalidate: 10,
	};
}
