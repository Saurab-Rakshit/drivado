"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {    

  return (
    <>
      <div className="flex justify-between items-center py-2 px-8  lg:px-30 xl:px-40">
        
        <div className="text-[#F67366] font-['Lato',sans-serif] font-semibold text-2xl">
          <div>
            track<span className="text-[#2C2D5B]">.d</span>
          </div>
        </div>
        
        <div className='lg:flex lg:gap-3 xl:gap-10 2xl:gap-10 hidden sm:hidden md:hidden'>
          <div className='flex items-center'>
            <div className="font-['Lato',sans-serif]">Company</div>
            <div><MdKeyboardArrowDown className='text-xl font-medium '/></div>
          </div>
          <div className='flex items-center'>
            <div className="font-['Lato',sans-serif]">Services</div>
            <div><MdKeyboardArrowDown className='text-xl font-medium '/></div>
          </div>
          <div className="font-['Lato',sans-serif]">
            Solutions
          </div>
          <div className="font-['Lato',sans-serif]">
            Industries
          </div>
          <div className="font-['Lato',sans-serif]">
            Insights
          </div>
          <div className="font-['Lato',sans-serif]">
            News and Media
          </div>
        </div>

        <div className="flex sm:gap-2 sm:items-center md:sm:items-center ">
          <div className="flex hidden sm:flex sm:gap-2 sm:items-center">
            <div>
              <button className="px-2 py-2 md:px-3 md:py-3 text-[#2C2D5B] bg-white border border-[#2C2D5B] rounded-lg text-xs font-bold font-['Lato',sans-serif]">
                Request Quote
              </button>
            </div>
            <div>
              <button className="px-2 py-[9px] md:px-5 md:py-[13px] text-white bg-[#2C2D5B] rounded-lg text-xs font-bold font-['Lato',sans-serif]">
                Join Now
              </button>
            </div>
          </div>
          <div className="flex gap-7 lg:hidden">
            <div className="flex text-white text-2xl sm:text-3xl">
              <div>
                <GiHamburgerMenu className="text-[#2C2D5B]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Navbar;

// font-['Lato',sans-serif]
/* 
color : #ffffff
toggle color: #2C2D5B
*/


        {/* <div className="h-12 flex justify-between px-8 pt-5 items-center sm:h-14">
        <div className="text-[#F67366] font-['Lato',sans-serif] font-semibold text-2xl">
          <div>
            track<span className="text-[#2C2D5B]">.d</span>
          </div>
        </div>


        <div className='flex gap-2 justify-end border border-red-700'>
          <div>
            <button className="px-2 py-2 text-[#2C2D5B] bg-white border border-[#2C2D5B] rounded-lg text-xs font-bold font-['Lato',sans-serif]">
              Request Quote
            </button>
          </div>
          <div>
            <button className="px-2 py-2 text-white bg-[#2C2D5B] rounded-lg text-xs font-bold font-['Lato',sans-serif]">
              Join Now
            </button>
          </div>
        </div>


        <div>
          <div className="flex gap-7 lg:hidden">
            <div className="flex text-white text-2xl sm:text-3xl">
              <div>
                <GiHamburgerMenu
                  onClick={toggleHamburger}
                  className="text-[#2C2D5B]"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}