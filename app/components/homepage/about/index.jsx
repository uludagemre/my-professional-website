// @flow strict

import {personalData} from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
      <div id="about" className="my-20 lg:my-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="font-medium mb-5 text-orange-400 text-xl uppercase">
              Who I am?
            </p>
            <p className="text-gray-200 text-sm lg:text-lg">
              {personalData.description}
            </p>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
                src={personalData.profile}
                width={480}
                height={480}
                alt="Emre Uludag"
                className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </div>
  );
};

export default AboutSection;