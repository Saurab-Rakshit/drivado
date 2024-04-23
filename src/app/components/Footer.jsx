"use client";
import facebook from "../assets/landing_page/Exodus Landing Page 01.svg";
import twitter from "../assets/landing_page/Exodus Landing Page 03.svg";
import whatsapp from "../assets/landing_page/Exodus Landing Page 02.svg";
import instagram from "../assets/landing_page/Exodus Landing Page 04.svg";

import Image from "next/image";
// 1920,1440,834,393

const Footer = () => {
  return (
    <div className="bg-[#2C2D5B]">
      <div className="px-10 pt-12 pb-8 grid grid-col-1 sm:grid-cols-3 sm:space-x-24 sm:px-16 md:grid-cols-3 lg:grid-cols-4 lg:space-x-10 lg:pb-16 xl:grid-col-4 xl:space-x-28 xl:px-40">

        {/* content-1 */}
        <div className="text-white text-sm w-auto tracking-tighter font-normal font-['Lato',sans-serif] leading-[21px] flex flex-col gap-5">
            <div>
              <span className="text-red-400 text-2xl font-bold font-['Lato',sans-serif]">
                track
              </span>
              <span className="text-white text-2xl font-bold font-['Lato',sans-serif]">
                .d
              </span>
            </div>
            <div className="">
              ShipUp delivers an unparalleled customer service through dedicated
              customer teams, engaged people working in an agile culture, and a
              global footprint
            </div>
        </div>

        {/* content-2 */}
        <div className="text-white text-sm w-auto tracking-tighter font-normal font-['Lato',sans-serif] leading-[21px] flex flex-col gap-5">
          <div className="text-white font-['Lato',sans-serif] text-lg font-bold">
            Explore
          </div>
          <div className="text-white text-sm font-medium font-['Lato',sans-serif] space-y-2.5">
            <div>About Us</div>
            <div>Our Warehouses</div>
            <div>Blog</div>
            <div>News and Media</div>
          </div>
        </div>

        {/* content-3 */}
        <div className="text-white text-sm w-auto tracking-tighter font-normal font-['Lato',sans-serif] leading-[21px] flex flex-col gap-5">
          <div className="text-white font-['Lato',sans-serif] text-lg font-bold">
            Legal
          </div>
          <div className="text-white text-sm font-medium font-['Lato',sans-serif] space-y-2.5">
            <div>Terms</div>
            <div>Privacy</div>
          </div>
        </div>

        {/* content-4 */}
        <div className="py-7 pb-12 flex flex-col justify-center items-center sm:pl-40 md:pl-40 md:pt-16 md:items-start md:py-0 md:pb-[30px] md:gap-5 md:pr-10 lg:pl-0 lg:pt-0 lg:pb-20">
          <div className="text-white font-['Lato',sans-serif] text-lg font-bold w-[220px]">
            Social Media
          </div>
          <div className="flex justify-center md:justify-start gap-5 pt-5 md:pt-0 md">
            <div className="w-10 h-10 sm:w-10 sm:h-10 md:w-7 md:h-7 bg-white rounded-full flex justify-center">
              <Image src={facebook} alt="My SVG" width={30} height={30} />
            </div>
            <div className="w-10 h-10 sm:w-10 sm:h-10 md:w-7 md:h-7 bg-white rounded-full flex justify-center">
              <Image src={twitter} alt="My SVG" width={30} height={30} />
            </div>
            <div className="w-10 h-10 sm:w-10 sm:h-10 md:w-7 md:h-7 bg-white rounded-full flex justify-center">
              <Image src={whatsapp} alt="My SVG" width={30} height={30} />
            </div>
            <div className="w-10 h-10 sm:w-10 sm:h-10 md:w-7 md:h-7 bg-white rounded-full flex justify-center">
              <Image src={instagram} alt="My SVG" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#E5E5E5] lg:mr-20 lg:ml-16 xl:mx-40 "></div>
      <div className="text-center pt-5 pb-[30px]">
        <span className="text-red-400 text-2xl font-bold font-['Lato',sans-serif]">
          track
        </span>
        <span className="text-white text-2xl font-bold font-['Lato',sans-serif]">
          .d
        </span>
      </div>
    </div>
  );
};

export default Footer;
