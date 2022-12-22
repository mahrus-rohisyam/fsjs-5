import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import defaultPlaceHolder from "../../../assets/images/PlaceHolder.svg";

type Props = {
  src: string;
  placeholder?: string;
  alt?: string;
};

const Image = (props: Props) => {
  const { src, placeholder, alt } = props;

  return (
    <LazyLoadImage
      effect="blur"
      height={'100%'}
      width={'100%'}
      alt={alt}
      src={src}
      placeholderSrc={placeholder === "" ? defaultPlaceHolder : placeholder}
    />
  );
};

export default Image;
