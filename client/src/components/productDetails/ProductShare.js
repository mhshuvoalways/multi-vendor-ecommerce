import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const ProductShare = ({ products, productUrl }) => {
  const frontend_url = process.env.REACT_APP_FRONTEND_PRODUCTION;

  return (
    <div className="mt-10 flex gap-5">
      <FacebookShareButton
        media={products.image[0].url}
        url={`${frontend_url}/details/${productUrl}`}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        media={products.image[0].url}
        url={`${frontend_url}/details/${productUrl}`}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        media={products.image[0].url}
        url={`${frontend_url}/details/${productUrl}`}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

export default ProductShare;
