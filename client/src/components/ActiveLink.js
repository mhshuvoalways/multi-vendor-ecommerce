import React from "react";
import { Link } from "@reach/router";

const ActiveLink = ({ partial = true, ...props }) => (
  <Link
    {...props}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      const isActive = partial ? isPartiallyCurrent : isCurrent;
      return {
        style: {
          color: isActive ? "text-purple-600" : "",
        },
      };
    }}
  />
);

export default ActiveLink;
