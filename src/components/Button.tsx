import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import clsx from "clsx"; 

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string; 
};

export default function Button({ buttonLink, buttonText, className }: Props) {

  if (!buttonLink || !("link_type" in buttonLink)) {
    console.warn("Invalid buttonLink provided:", buttonLink);
    return null;
  }

  return (
    <PrismicNextLink
      field={buttonLink}
      className={clsx(
    "inline-block px-4 py-2 rounded-lg text-white bg-blue-400 hover:bg-orange-700 font-bold text-xl uppercase tracking-wide transition duration-300 mt-4 md:text2xl",
        className,
      )}
    > 
      {buttonText}
    </PrismicNextLink>
  );
}
