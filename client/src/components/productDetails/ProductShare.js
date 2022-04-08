import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import frontendUrl from "../../utils/frontendUrl";

const ProductShare = ({ products, productUrl }) => {
  return (
    <div className="mt-10 flex gap-5">
      <FacebookShareButton
        media={products.image[0].url}
        url={`${frontendUrl}/details/${productUrl}`}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        media={products.image[0].url}
        url={`${frontendUrl}/details/${productUrl}`}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        media={products.image[0].url}
        url={`${frontendUrl}/details/${productUrl}`}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

export default ProductShare;
