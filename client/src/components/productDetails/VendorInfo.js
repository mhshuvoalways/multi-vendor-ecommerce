import React from "react";

const AdditionalInfo = ({ vendorReducer }) => {
  return (
    <ul className="text-base list-disc px-5">
      <li className="mb-2">
        Vendor Name:
        <p className="font-bold">
          {vendorReducer.vendor.author && vendorReducer.vendor.author.storeName}
        </p>
      </li>
      <li className="mb-2">
        Vendor's Author Name:
        <p className="font-bold">
          {vendorReducer.vendor.author &&
            vendorReducer.vendor.author.firstName +
              " " +
              vendorReducer.vendor.author.lastName}
        </p>
      </li>
      <li className="mb-2">
        Vendor's Followers:
        <p className="font-bold">
          {vendorReducer.vendor.followers &&
            vendorReducer.vendor.followers.length}
        </p>
      </li>
    </ul>
  );
};

export default AdditionalInfo;
