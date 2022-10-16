import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import OrgCard from "../components/OrgCard";
import arrowRBlue from "../public/assets/icons/arrow_r_blue.svg";
import arrowLBlue from "../public/assets/icons/arrow_l_blue.svg";
import Image from "next/image";

function OrgSlider({ orgList, props, title, isUrgent, whiteText, id }) {
    return (
      <>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-start">
              {isUrgent 
                ? <div className="bg-[#f76659] rounded text-white font-bold text-sm border-box p-1 mr-2">URGENT</div>
                : <></>
              }
              <h4 className={`${whiteText ? 'text-white' : 'text-black'} font-bold text-2xl mb-4`}>
                { title }           
              </h4>
            </div>
            <div className="flex">
              <div className={`flex swiper-prev-${id} cursor-pointer bg-white border rounded p-1 mr-2`}>
                <Image
                  src={arrowLBlue}
                  alt={"left arrow icon"}
                  layout="intrinsic"
                  height={18}
                  width={18}
                />
              </div>
              <div className={`flex swiper-next-${id} cursor-pointer bg-white border rounded p-1`}>
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
            navigation={{
              nextEl: `.swiper-next-${id}`,
              prevEl: `.swiper-prev-${id}`,
              disabledClass: "grayscale opacity-75 cursor-not-allowed bg-gray-100",
            }}
            modules={[Navigation]}
            className="swiper"
            autoHeight="true"
          >
            {orgList.map((row, index) => {
                return (
                    <SwiperSlide key={index} className="container md:col-span-6 xl:col-span-4 col-span-12 flex !h-full">
                      <OrgCard
                        orgIndex={row.slug}
                            titles={props.title}
                            values={row}
                            open={() => openModal(row.slug, row)}
                            whiteText={whiteText}
                      />
                    </SwiperSlide>
                );
              })}
          </Swiper>
      </>
    );
}

export default OrgSlider;