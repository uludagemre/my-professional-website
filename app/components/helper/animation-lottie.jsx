"use client"

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationData }) => {
  return <Lottie animationData={animationData} loop />;
};


export default AnimationLottie;