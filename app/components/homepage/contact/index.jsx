// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub,  } from "react-icons/io";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-1 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/*<ContactForm />*/}
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-2">
              <CiLocationOn
                className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#FFB74D] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={30}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-7">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#FFB74D] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={30}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#FFB74D] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={30}
              />
            </Link>
            <Link target="_blank" href={personalData.twitter}>
              <FaXTwitter
                className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#FFB74D] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={30}
              />
            </Link>
            <Link target="_blank" href={personalData.stackOverflow}>
              <FaStackOverflow
                className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#FFB74D] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={30}
              />
            </Link>
            <Link target="_blank" href={personalData.facebook}>
              <FaFacebook
                className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#FFB74D] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={30}
              />
            </Link>
            <Link target="_blank" href={personalData.youtube}>
              <FaYoutube
                className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#FFB74D] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;