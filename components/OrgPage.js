import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge/badge";
import Button from "./Button/button";
import arrowDown from "../public/assets/icons/arrow_right.svg";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function OrgPage({ orgData, showFrontPageLink, expandModal }) {
    /*const [
        orgName,
        donationLinks,
        largeDonationsContact,
        englishDesc,
        cause,
        spendingTowards,
        accomplishments,
        backedBy,
        paymentMethod,
        crypto,
        instagram,
        facebook,
        twitter,
        website,
        bannerImage,
        smallOrg,
        bannerImage2,
        additionalText,
    ] = orgData;*/

	  const orgName = orgData.organizationName;
  const donationLinks = orgData.donationLink;
  const largeDonationsContact = (orgData.largeDonationsContact == null ? "" : orgData.contactForLargeDonations.json.content[0].content[0].value);
  const englishDesc = (orgData.description == null ? "" : orgData.description.json.content[0].content[0].value);
  const cause = orgData.cause;
  const spendingTowards = orgData.howWillTheySpendDonations.json.content[0].content[0].value;
  const accomplishments = (orgData.whatTheyHaveAccomplishedSoFar == null ? "" : orgData.whatTheyHaveAccomplishedSoFar);
  const backedBy = (orgData.institutionalBacking == null ? "" : orgData.institutionalBacking.json.content[0].content[0].value);
  const paymentMethod = (orgData.paymentMethod == null ? "" : orgData.paymentMethod.json.content[0].content[0].value);
  const crypto = orgData.supportsCryptocurrency;
  const instagram = orgData.instagram;
  const facebook = orgData.facebook;
  const twitter = orgData.twitter;
  const website = orgData.organizationWebsite;
  const bannerImage = orgData.bannerImage.url;
  const smallOrg = orgData.smallOrganization;
  const bannerImage2 = orgData.bannerImage.url;
  
  const bannerViewableUrl =
    typeof bannerImage2.url === "string"
      ? bannerImage2.url
      : "";

    return (
        <div id="organization" className="absolute right-0">
            {/* --- DESKTOP VERSION STICKY --- */}
            <div className="sticky w-min top-0 left-full z-50 hidden md:block md:pr-16 md:pt-8 xl:pr-40">
                <div className="bg-textAccent-yellow p-4 rounded-2xl box-border border border-[#e0b726]">
                    <div className="w-full md:w-52 mb-4">
                        <Button
                            value="Donate Now"
                            href={donationLinks.trim()}
                            target="_blank"
                            isExternalLink
                        />
                    </div>
                    <div
                        className="flex justify-center box-border rounded-full bg-white bg-opacity-50 
                    w-full py-3 md:w-52"
                    >
                        <Image
                            src={"/assets/ok_icon.svg"}
                            alt={"ok icon"}
                            layout="intrinsic"
                            height={18}
                            width={18}
                            loading="lazy"
                        />
                        <b className="pl-1">UANOW</b>
                        <p className="pl-1"> Vetted</p>
                    </div>
                </div>
                <div className="bg-white mt-2 p-4 rounded-2xl box-border border border-[#E5E5E5]">
                    <div className="pb-4">
                        <span className="text-xs text-[#999999]">
                            ENDORSED BY
                        </span>
                    </div>
                    <div className="pb-4">
                        <a className="text-uablue-default" href="#">
                            Help Ukraine Now
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:w-3/5 px-6 md:pl-16 xl:pl-40">
                <div className="md:-mt-72">
                    <Link href="/">
                        <a className="h-12 font-bold mb-4">&lt; BACK</a>
                    </Link>
                    <div className="mt-8">
                        <h1 className="text-uablue-default font-bold sm:font-extrabold text-5xl md:text-6xl inline leading-none">
                            {orgName}
                        </h1>
                        <div className="filters my-8">
                            <Badge value={cause} />
                        </div>

                        <div className="w-full mb-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={
                                    bannerViewableUrl == ""
                                        ? "/assets/default_cover.png"
                                        : bannerViewableUrl
                                }
                                alt="Organization Logo"
                                className="w-full h-full object-cover object-center"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* --- MOBILE VERSION STICKY --- */}
            <div className="w-full top-0 left-full z-50 block md:hidden py-4 px-6">
                <div className="bg-textAccent-yellow p-4 rounded-2xl box-border">
                    <div className="w-full md:w-64 mb-4 sm:mb-4">
                        <Button
                            value="Donate Now"
                            href={donationLinks.trim()}
                            target="_blank"
                            isExternalLink
                        />
                    </div>
                    <div
                        className="flex justify-center box-border rounded-full bg-white bg-opacity-50 
                    w-full py-3 md:w-64"
                    >
                        <b>✓</b> <b>UANOW</b> Vetted
                    </div>
                </div>
                <div className="bg-white mt-2 p-4 rounded-2xl box-border border border-[#E5E5E5]">
                    <div className="pb-4">
                        <span className="text-xs text-[#999999]">
                            ENDORSED BY
                        </span>
                    </div>
                    <div className="pb-4">
                        <a className="text-uablue-default" href="#">
                            Help Ukraine Now
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 right-0 py-4 px-6 md:pl-16 xl:pl-40">
                <div className="md:w-3/5">
                    <p className="mt-6 mb-3">{englishDesc}</p>
                    <div
                        id="links-area"
                        className="mt-10 flex flex-wrap gap-8 w-100 items-center"
                    >
                        <div className="flex flex-wrap flex-row content-center w-full md:w-52">
                            {/* conditionally render donation link*/}
                            {typeof donationLinks === "string" && (
                                <Button
                                    value="Donate Now"
                                    href={donationLinks.trim()}
                                    target="_blank"
                                    isExternalLink
                                />
                            )}
                        </div>
                        <div
                            id="links"
                            className="flex flex-wrap gap-5 md:gap-7 items-center"
                        >
                            {website && (
                                <a
                                    href={website.trim()}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-uablue-default text-lg md:text-xl font-bold underline 
                                        underline-offset-4 hover:text-uablue-accent"
                                >
                                    {website.trim().replace(/^https?:\/\//, "")}
                                </a>
                            )}
                            {instagram && (
                                <a
                                    href={instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center"
                                >
                                    <Image
                                        src="/assets/icons/instagram.svg"
                                        alt="instagram"
                                        height="28px"
                                        width="28px"
                                        loading="lazy"
                                    ></Image>
                                </a>
                            )}
                            {facebook && (
                                <a
                                    href={facebook}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center"
                                >
                                    <Image
                                        src="/assets/icons/facebook.svg"
                                        alt={facebook}
                                        height="28px"
                                        width="28px"
                                        loading="lazy"
                                    ></Image>
                                </a>
                            )}
                            {twitter && (
                                <a
                                    href={twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center"
                                >
                                    <Image
                                        src="/assets/icons/twitter.svg"
                                        alt="twitter"
                                        height="28px"
                                        width="28px"
                                        loading="lazy"
                                    ></Image>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* {spendingTowards && (
            <>
              <h2 className="font-black text-xl mt-12">
                How they will spend donations
              </h2>
              <p className="mt-6">{spendingTowards}</p>
            </>
          )} */}
            <div className="md:w-3/5 py-8 px-6 md:pl-16 xl:pl-40">
                {accomplishments && (
                    <>
                        <h4 className="font-bold text-2xl mb-4">
                            What they&apos;ve accomplished so far
                        </h4>
                        <Swiper slidesPerView={"auto"} navigation={true} modules={[Navigation]} className="mySwiper w-full">
                            <SwiperSlide className="text-center">Sample Image</SwiperSlide>
                            <SwiperSlide className="text-center">Sample Image</SwiperSlide>
                            <SwiperSlide className="text-center">Sample Image</SwiperSlide>
                        </Swiper>
                        {additionalText && (
                            <p className="mt-6">{additionalText}</p>
                        )}
                        {/* <p className="mt-6">
                            <a
                                href={accomplishments}
                                target="_blank"
                                rel="noreferrer"
                                className=" text-uablue-default underline 
                                    underline-offset-4 text-base font-bold hover:text-uablue-accent"
                            >
                                Check out their past work
                            </a>
                        </p> */}
                    </>
                )}
            </div>
            {/* {backedBy && (
            <>
              <h2 className="font-black text-xl mt-12">
                Institutions that support them
              </h2>
              <p className="mt-6">{backedBy}</p>
            </>
          )} */}
            {/* {largeDonationsContact && (
            <>
              <h2 className="font-black text-xl mt-12">Contact information</h2>
              <p className="mt-6">{largeDonationsContact}</p>
            </>
          )} */}
            <div className="md:w-3/5 py-8 px-6 md:pl-16 xl:pl-40">
                <h4 className="font-bold text-2xl mb-4">
                    Payment methods accepted
                </h4>
                <div className="mt-2 flex flex-wrap flex-col gap-2 mb-16">
                    {/* conditionally render payment method */}
                    {typeof paymentMethod === "string" &&
                        paymentMethod.split(",").map((method, index) => {
                            return (
                                <div key={"method-" + index}>
                                    <b>✓</b> {method}
                                </div>
                            );
                        })}
                    {crypto == "yes" && (
                        <div
                            className="px-4 py-1 mt-4 border-2 rounded-full 
                            border-uablue-default text-uablue-default text-center text-sm"
                        >
                            Crypto
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-textAccent-yellow right-0 py-8 px-6 md:pl-16 xl:pl-40">
                <div className="md:w-3/5">
                    <h2 className="font-bold text-4xl mb-4">
                        Make an impact, immediately
                    </h2>
                    <div className="flex flex-wrap flex-row content-center">
                        <div className="w-full md:w-52 mb-4 md:mb-0 md:mr-4">
                            <Button
                                value="Donate Now"
                                href={donationLinks.trim()}
                                target="_blank"
                                isExternalLink
                            />
                        </div>
                        <div className=" w-full md:w-40">
                            <Button
                                value="Share"
                                href=""
                                target="_blank"
                                color="white"
                                isShareBtn
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-3/5 right-0 py-8 px-6 md:pl-16 xl:pl-40">
                <h4 className="font-bold text-2xl mb-4">F.A.Q.</h4>
                <div className="mb-4 flex flex-row">
                    <div className="w-7 shrink-0 mr-2">
                        <Image src={arrowDown} alt="arrow down" />
                    </div>{" "}
                    <a href="for-donors">
                        <h4 className="text-2xl font-bold text-uablue-default">
                            Why donate to small fundraisers?
                        </h4>
                    </a>
                </div>
                <div className="mb-4 flex flex-row">
                    <div className="w-7 shrink-0 mr-2">
                        <Image src={arrowDown} alt="arrow down" />
                    </div>{" "}
                    <a href="for-donors">
                        <h4 className="text-2xl font-bold text-uablue-default">
                            How do we vet volunteer-driven fundraisers?
                        </h4>
                    </a>
                </div>
                <div className="mb-4 flex flex-row">
                    <div className="w-7 shrink-0 mr-2">
                        <Image src={arrowDown} alt="arrow down" />
                    </div>{" "}
                    <a href="for-donors">
                        <h4 className="text-2xl font-bold text-uablue-default">
                            How to donate?
                        </h4>
                    </a>
                </div>
            </div>
        </div>
    );
}
