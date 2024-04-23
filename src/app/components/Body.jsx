"use client";
import ScotterMap from "../assets/landing_page/91fa59e6781adbdced82e349bb595d99 1.png";
import SmallScotterMap from "../assets/landing_page/91fa59e6781adbdced82e349bb595d99 2.png";
import TruckFastOutline from "../assets/landing_page/mdi_truck-fast-outline.svg";
import TruckFastOutlineCl from "../assets/landing_page/mdi_truck-fast-outline cl.svg";
import PlaneTakeOff from "../assets/landing_page/bx_bxs-plane-take-off.svg";
import RidingScooter from "../assets/landing_page/image 3.png";
import PushingTrolley from "../assets/landing_page/Rectangle 1314.png";
import { FaVideo, FaBagShopping } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";

// 1920,1440,834,393

const Body = () => {
  return (
    <>
      <div className="px-8 lg:px-20 xl:px-36">
        {/* for MD */}
        <div className="md:flex md:flex-row-reverse md:items-center ">
          <div className="object-contain px-4 pt-20 pb-16">
            <Image src={ScotterMap} alt="My SVG" />
          </div>

          <div className="md:pt-32">
            <div className="px-4 text-center md:text-start leading-[50px] md:leading-10 md:space-y-5 pb-12">
              <span className="md:leading-[30px]">
                <span className="text-black text-4xl md:text-2xl md:font-bold lg:text-4xl lg:font-bold xl:text-4xl xl:font-bold  font-['Lato',sans-serif]">
                  Quick & Reliable{" "}
                </span>
                <span className="text-red-400 text-5xl md:text-2xl md:font-bold lg:text-5xl lg:font-bold xl:text-5xl xl:font-bold  font-['Lato',sans-serif]">
                  Warehousing and Logistics{" "}
                </span>
                <span className="text-black text-4xl md:text-2xl md:font-bold lg:text-4xl lg:font-bold xl:text-4xl xl:font-bold  font-['Lato',sans-serif]">
                  Solution
                </span>
              </span>

              <div>
                <div className="text-center md:text-start text-zinc-800 text-sm font-normal font-['Lato',sans-serif] leading-[21px]">
                  track.d delivers an unparalleled customer service through
                  dedicated customer teams, engaged people working in an agile
                  culture, and a global footprint
                </div>
              </div>
            </div>

            <div className="px-4 pb-5 flex justify-start">
              <div>
                <button className="px-10 py-5 text-white bg-[#2C2D5B] rounded-xl text-xs font-bold font-['Lato',sans-serif]">
                  Join Now
                </button>
              </div>
              <div>
                <button className="flex items-center gap-2 bg-white text-white py-2 px-4 rounded-lg">
                  <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 shadowCustom">
                    <FaVideo className="text-[#2C2D5B] text-xl" />
                  </div>
                  <span className="text-[#2C2D5B] text-sm font-bold font-['Lato',sans-serif]">
                    Play Demo
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* form starts*/}
        {/* <div className="shadowCustom mb-[77px] mt-[59px] flex flex-col justify-center gap-10 rounded-xl pb-9 md:space-y-6 lg:pb-5 lg:gap-2 xl:gap-20 pt-6 text-center lg:flex-row px-4">
          
          <div className="relative flex items-center gap-1 rounded-lg border border-[#2C2D5B] px-4 py-4">
            <div className="absolute -top-[15px] left-5 bg-white px-1 text-[#2C2D5B]">
              Origin
            </div>
            <div>
              <MdLocationPin className="text-lg text-[#2C2D5B]" />
            </div>
            <div className="lg:py-0">
              <input
                type="text"
                className="py-1 outline-none"
                placeholder="Enter Location"
              />
            </div>
          </div>

          <div className="relative flex items-center gap-1 rounded-lg border border-[#2C2D5B] px-4 py-4">
            <div className="absolute -top-[15px] left-5 bg-white px-1 text-[#2C2D5B]">
              Destination
            </div>
            <div>
              <MdLocationPin className="text-lg text-[#2C2D5B]" />
            </div>
            <div>
              <input
                type="text"
                className="py-1 outline-none"
                placeholder="Enter Location"
              />
            </div>
          </div>

          <div className="relative flex items-center gap-1 rounded-lg border border-[#2C2D5B] px-4 py-4">
            <div className="absolute -top-[15px] left-5 bg-white px-1 text-[#2C2D5B]">
              Weight
            </div>
            <div>
              <FaBagShopping className="text-lg text-[#2C2D5B]" />
            </div>
            <div>
              <input
                type="text"
                className="py-1 outline-none"
                placeholder="Weight (KGO)"
              />
            </div>
          </div>

          <div className="rounded-lg bg-[#2C2D5B] w-full px-4 py-5 font-['Lato',sans-serif] text-sm font-bold text-white">
            <button>Check Price</button>
          </div>

        </div> */}
        <div className="shadowCustom mb-[77px] mt-[59px] pt-5 text-center flex flex-col justify-center gap-10 rounded-xl pb-9 md:space-y-6 lg:pb-10 lg:gap-2 xl:gap-10  lg:flex-row px-4">
          
          <div className="relative flex items-center gap-1 rounded-lg border border-[#2C2D5B] px-4 py-4 lg:mt-[23px]">
            <div className="absolute -top-[15px] left-5 bg-white px-1 text-[#2C2D5B]">
              Origin
            </div>
            <div>
              <MdLocationPin className="text-lg text-[#2C2D5B]" />
            </div>
            <div>
              <input
                type="text"
                className="py-2 h-[40px] lg:h-[50px] outline-none"
                placeholder="Enter Location"
              />
            </div>
          </div>

          <div className="relative flex items-center gap-1 rounded-lg border border-[#2C2D5B] px-4 py-4">
            <div className="absolute -top-[15px] left-5 bg-white px-1 text-[#2C2D5B]">
              Destination
            </div>
            <div>
              <MdLocationPin className="text-lg text-[#2C2D5B]" />
            </div>
            <div>
              <input
                type="text"
                className="py-2 h-[40px] lg:h-[50px] outline-none"
                placeholder="Enter Location"
              />
            </div>
          </div>

          <div className="relative flex items-center gap-1 rounded-lg border border-[#2C2D5B] px-4 py-4">
            <div className="absolute -top-[15px] left-5 bg-white px-1 text-[#2C2D5B]">
              Weight
            </div>
            <div>
              <FaBagShopping className="text-lg text-[#2C2D5B]" />
            </div>
            <div>
              <input
                type="text"
                className="py-2 h-[40px] lg:h-[50px] outline-none"
                placeholder="Weight (KGO)"
              />
            </div>
          </div>

          <div className="rounded-lg bg-[#2C2D5B] w-full px-4 py-5 font-['Lato',sans-serif] text-sm font-bold text-white ">
            <button className="lg:mt-3">Check Price</button>
          </div>
        </div>

        {/* form ends*/}
      </div>

      {/* services section starts*/}
      <div className="bg-slate-100 px-8 pt-20 pb-20 md:px-20 xl:px-36">
        <div className="md:flex md:flex-row-reverse md:justify-between">
          <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full insideShadowCustom relative ml-5">
            <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full bg-white absolute top-8 -left-5 flex justify-center items-center">
              <div>
                <Image
                  src={TruckFastOutlineCl}
                  alt="My SVG"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
          <div className="pt-12">
            <span className="text-neutral-900 text-4xl font-bold font-['Lato',sans-serif] capitalize border-red-600 border-b-2">
              Services{" "}
            </span>
            <span className="text-neutral-900 text-4xl font-normal font-['Lato',sans-serif] capitalize">
              {" "}
              We offer
            </span>
          </div>
        </div>

        <div className="py-20 space-y-24">
          <div className="lg:flex lg:pt-20 lg:gap-8 space-y-10">
            <div className="space-y-5 lg:pt-10 xl:pt-10">
              <div className="border rounded-full h-14 w-14 bg-white flex justify-center items-center shadowCustom">
                <Image src={TruckFastOutline} alt="My_SVG"></Image>
              </div>
              <div className="text-slate-700 text-2xl font-semibold font-['Lato',sans-serif] capitalize">
                warehousing services
              </div>
              <div className="text-neutral-600 text-sm font-normal font-['Lato',sans-serif] leading-[21px] w-full">
                A pay as-you-go solution for: pallet storage, inventory
                management, fulfillment(e.g. pick and pack), in/out-bound
                solutions, and more.
              </div>
            </div>

            <div className="space-y-5">
              <div className="border rounded-full h-14 w-14 bg-white flex justify-center items-center shadowCustom">
                <Image src={PlaneTakeOff} alt="My_SVG"></Image>
              </div>
              <div className="text-slate-700 text-2xl font-semibold font-['Lato',sans-serif] capitalize">
                Global Freight
              </div>
              <div className="text-neutral-600 text-sm font-normal font-['Lato',sans-serif] leading-[21px] w-full">
                A pay as-you-go solution for: pallet storage, inventory
                management, fulfillment(e.g. pick and pack), in/out-bound
                solutions, and more.
              </div>
            </div>

            <div className="space-y-5">
              <div className="border rounded-full h-14 w-14 bg-white flex justify-center items-center shadowCustom">
                <FaBagShopping className="text-xl text-[#2C2D5B]" />
              </div>
              <div className="text-slate-700 text-2xl font-semibold font-['Lato',sans-serif] capitalize">
                Packaging Solution
              </div>
              <div className="text-neutral-600 text-sm font-normal font-['Lato',sans-serif] leading-[21px] w-full">
                A pay as-you-go solution for: pallet storage, inventory
                management, fulfillment(e.g. pick and pack), in/out-bound
                solutions, and more.
              </div>
            </div>
          </div>
          <div className="space-y-5 flex flex-col items-center md:flex-row md:justify-center md:gap-4">
            <div className="md:pt-5">
              <button className="px-10 py-5 text-[#2C2D5B] text-lg border border-[#2C2D5B] rounded-xl font-bold font-['Lato',sans-serif]">
                Request Quote
              </button>
            </div>
            <div>
              <button className="px-16 py-5 text-white text-lg bg-[#2C2D5B] rounded-xl font-bold font-['Lato',sans-serif]">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* services section ends*/}

      {/* Operations section starts */}
      <div className="px-8 pt-20 pb-20 md:px-20 xl:px-40">
        <div className="md:flex md:justify-between">
          <div className="border rounded-full h-20 w-20 insideShadowCustom relative ml-5">
            <div className="border rounded-full h-20 w-20 bg-white shadowCustom absolute top-8 -left-5 flex justify-center items-center">
              <div>
                <Image
                  src={TruckFastOutlineCl}
                  alt="My SVG"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
          <div className="pt-12 lg:mr-64 xl:mr-72 2xl:mr-[500px]">
            <span className="text-neutral-900 text-4xl font-bold font-['Lato',sans-serif] capitalize border-red-600 border-b-2">
              Operation
            </span>
            <span className="text-neutral-900 text-4xl font-normal font-['Lato',sans-serif] capitalize">
              {" "}
              Mode
            </span>
          </div>
        </div>

        <div className="py-20 space-y-24">
          <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
            <div>
              <Image src={RidingScooter} alt="My_SVG"></Image>
            </div>

            <div className="lg:space-y-5 space-y-5">
              <div className="flex items-center gap-5">
                <div>
                  <div className="border rounded-full bg-black text-white text-md h-10 w-10 flex justify-center items-center">
                    <div>1</div>
                  </div>
                </div>
                <div className="text-red-400 text-xl font-extrabold font-['Lato',sans-serif]">
                  Connect
                </div>
              </div>

              <div class="w-full lg:w-[330px] text-neutral-600 text-sm font-normal font-['Lato',sans-serif]">
                You’re currently running your store on Shopify, WooCommerce, or
                any other platform. As a first step, you’ll connect your store
                with our platform.
              </div>
            </div>
          </div>

          <div className="lg:flex lg:justify-between lg:items-center">
            <div>
              <Image src={PushingTrolley} alt="My_SVG"></Image>
            </div>

            <div className="lg:space-y-5 lg:flex lg:flex-col space-y-5 ">
              <div className="flex items-center gap-5">
                <div>
                  <div className="border rounded-full bg-black text-white text-md h-10 w-10 flex justify-center items-center">
                    <div>2</div>
                  </div>
                </div>
                <div className="text-red-400 text-xl font-extrabold font-['Lato',sans-serif]">
                  Connect
                </div>
              </div>

              <div class="w-full lg:w-[330px] text-neutral-600 text-sm font-normal font-['Lato',sans-serif]">
                You’re currently running your store on Shopify, WooCommerce, or
                any other platform. As a first step, you’ll connect your store
                with our platform.
              </div>
            </div>
          </div>

          <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
            <div>
              <Image src={SmallScotterMap} alt="My_SVG"></Image>
            </div>

            <div className="lg:space-y-5 space-y-5">
              <div className="flex items-center gap-5">
                <div>
                  <div className="border rounded-full bg-black text-white text-md h-10 w-10 flex justify-center items-center">
                    <div>3</div>
                  </div>
                </div>
                <div className="text-red-400 text-xl font-extrabold font-['Lato',sans-serif]">
                  Connect
                </div>
              </div>

              <div class="w-full lg:w-[330px] text-neutral-600 text-sm font-normal font-['Lato',sans-serif]">
                You’re currently running your store on Shopify, WooCommerce, or
                any other platform. As a first step, you’ll connect your store
                with our platform.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Operations section ends */}
    </>
  );
};

export default Body;
