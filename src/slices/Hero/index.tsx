"use client";

import { asText, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
// import { useEffect } from "react";
import { Bounded } from "./Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  useGSAP(() => {
    // Ensure the GSAP animation logic only runs on the client side
    if (typeof window !== "undefined") {
      const introTl = gsap.timeline();

      introTl.set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.4,
          stagger: 1,
        })
        .from(".hero-subheading", {
          opacity: 0,
          y: 30,
        }, "+=.8")
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo("body", {
          backgroundColor: "#C4A484",
        }, {
          backgroundColor: "#D9F99D",
          overwrite: "auto",
        })
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        });
    }
  }, []);

  // Transform button_link to LinkField if it's a string
  const buttonLink =
    typeof slice.primary.button_link === "string"
      ? { link_type: "Web", url: slice.primary.button_link }
      : slice.primary.button_link;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero opacity-0"
    >
      <div className="grid">
        {/* Hero Section */}
        <div className="grid h-90 w-88 place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header lg:text-[7rem] text-6xl font-black uppercase leading-[.8] text-orange-500 md:text-[7rem]">
              <TextSplitter className="hero-header-word" text="SURVIVAL OF FITTEST" wordDisplayStyle="block" />
            </h1>
            <div className="hero-subheading mt-12 text-4xl font-semibold text-sky-950 lg:text-5xl">
              <PrismicRichText field={slice.primary.subheading} />
            </div>
            <div className="hero-body text-2xl font-normal text-sky-950">
              <PrismicRichText field={slice.primary.body} />
            </div>
            {/* Button */}
            {buttonLink && slice.primary.button_text && (
              <Button
                buttonLink={buttonLink}
                buttonText={slice.primary.button_text}
                className="hero-button mt-4"
              />
            )}
          </div>
        </div>

        {/* Secondary Section */}
        <div className="grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2">
          <PrismicNextImage
            className="w-full md:hidden"
            field={slice.primary.cans_images}
            alt=""
          />
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
              <TextSplitter
                text={asText(slice.primary.second_heading)}
              />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font normal text-sky-950">
              <PrismicRichText field={slice.primary.second_body} />
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
