import React, { useRef } from "react";

import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
const HowItsWork = () => {
  const hiwVideo = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      duration: 1,
      y: 0,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-with">
        <div id="chip" className="flex-center my-20 w-full">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br />A monster win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It’s here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mb-14 mt-10 md:mt-20">
          <div className="flex-center relative h-full">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="relative z-10 bg-transparent"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={hiwVideo}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="mt-3 text-center font-semibold text-gray">
            Honkai: Star Rail
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex-center flex-1 flex-col justify-center">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphics performance by far.
              </span>
            </p>
            <div className="flex-center flex-1">
              <p className="hiw-text g_fadeIn">
                Mobile{" "}
                <span className="text-white">
                  games will look and feel so immersive
                </span>
                , with incredibly detailed environments and more realistic
                characters. And with industry-leading speed and efficiency, A17
                Pro takes fast and runs with it.
              </p>
            </div>
          </div>

          <div className="g_fadeIn flex flex-1 flex-col justify-center">
            <p className="hiw-text">New</p>
            <p className="text-white">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItsWork;
