import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div>
      <p className="text-3xl mb-1 text-center mt-36">{title}</p>
      <p className="border border-purple-600 max-w-xs m-auto mb-10"></p>
    </div>
  );
};

export default SectionTitle;
