// @flow strict

import {personalData} from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {FaFacebook, FaTwitterSquare, FaYoutube} from "react-icons/fa";
import {MdDownload} from "react-icons/md";
import {SiLeetcode, SiFiverr, SiMedium, SiGmail} from "react-icons/si";

const mailToLink = `mailto:${personalData.email}`;


function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
            <Image
                src="/hero.svg"
                alt="Hero"
                width={1572}
                height={795}
                className="absolute -top-[98px] -z-10"
            />

            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
                <div
                    className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
                    <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                        Hello, <br/>
                        This is {' '}
                        <span className=" text-red-500">{personalData.name}</span>
                        {` , I'm an experienced `}
                        <span className=" text-orange-500">{personalData.designation}</span>
                        .
                    </h1>

                    <div className="my-12 flex items-center gap-5">
                        <Link
                            href={personalData.github}
                            target='_blank'
                            className="transition-all text-orange-400 hover:scale-125 duration-300"
                        >
                            <BsGithub size={20}/>
                        </Link>
                        <Link
                            href={personalData.linkedIn}
                            target='_blank'
                            className="transition-all text-orange-400 hover:scale-125 duration-300"
                        >
                            <BsLinkedin size={20}/>
                        </Link>
                        <Link
                            href={personalData.facebook}
                            target='_blank'
                            className="transition-all text-orange-400 hover:scale-125 duration-300"
                        >
                            <FaFacebook size={20}/>
                        </Link>
                        <Link
                            href={personalData.leetcode}
                            target='_blank'
                            className="transition-all text-orange-400 hover:scale-125 duration-300"
                        >
                            <SiLeetcode size={20}/>
                        </Link>
                        <Link
                            href={personalData.twitter}
                            target='_blank'
                            className="transition-all text-orange-400 hover:scale-125 duration-300"
                        >
                            <FaTwitterSquare size={20}/>
                        </Link>
                        <Link
                            href={personalData.youtube}
                            target='_blank'
                            className="transition-all text-orange-400 hover:scale-125 duration-300"
                        >
                            <FaYoutube size={20}/>
                        </Link>
                        <Link
                            href={personalData.fiverr}
                            target='_blank'
                            className="transition-all text-orange-400 hover:scale-125 duration-300"
                        >
                            <SiFiverr size={20}/>
                        </Link>
                        <Link
                            href={personalData.medium}
                            target='_blank'
                            className="transition-all text-orange-400 hover:scale-125 duration-300"
                        >
                            <SiMedium size={20}/>
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        {/*<Link href="#contact" className="bg-gradient-to-r from-red-600 to-orange-300 p-[3px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">*/}
                        {/*  <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">*/}
                        {/*    <span>Contact me</span>*/}
                        {/*    <RiContactsFill size={16} />*/}
                        {/*  </button>*/}
                        {/*</Link>*/}
                        <Link
                            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-red-600 to-orange-400 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                            role="button" target="_blank" href={personalData.resume}
                        >
                            <span>Resume</span>
                            <MdDownload size={16}/>
                        </Link>
                        <p className="text-sm md:text-xl flex items-center gap-3">
                                                   <Link
                            href={mailToLink}
                            target='_blank'
                            className="transition-all text-orange-400 hover:scale-125 duration-300"
                        >
                            <SiGmail
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#FFB74D] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            </Link>
                            <span>{personalData.email}</span>
                        </p>

                    </div>

                </div>
                <div
                    className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
                    <div className="flex flex-row">
                        <div
                            className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                    </div>
                    <div className="px-4 lg:px-8 py-5">
                        <div className="flex flex-row space-x-2">
                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                            <div className="h-3 w-3 rounded-full bg-green-200"></div>
                        </div>
                    </div>
                    <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                        <code className="font-mono text-xs md:text-sm lg:text-base">
                            <div className="blink">
                                <span className="mr-2 text-white">coder</span>
                                <span className="mr-2 text-red-700">=</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                                <span className="text-gray-400">{`'`}</span>
                                <span className="text-amber-300">Emre Uludag</span>
                                <span className="text-gray-400">{`',`}</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className=" text-white">skills:</span>
                                <span className="text-gray-400">{`['`}</span>
                                <span className="text-amber-300">AWS</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Azure</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Confluent</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Python</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">SQL</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Scala</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Java</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Dbt</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Spark</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Flink</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Kafka</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Airflow</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Terraform</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Docker</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Kubernetes</span>
                                <span className="text-gray-400">{"'],"}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">location:</span>
                                <span className="text-orange-400">Munich</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">data_engineer_since:</span>
                                <span className="text-orange-400">2020</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">number_of_years_it_experience:</span>
                                <span className="text-orange-400">6</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">current_occupation:</span>
                                <span className="text-orange-400">DataReplyDE</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">title:</span>
                                <span className="text-orange-400">DataEngineeringConsultant</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">hard_worker:</span>
                                <span className="text-orange-400">True</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">motivated:</span>
                                <span className="text-orange-400">True</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">problem_solver:</span>
                                <span className="text-orange-400">True</span>
                            </div>
                            <div><span className="text-gray-400">{`}`}</span></div>
                        </code>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;