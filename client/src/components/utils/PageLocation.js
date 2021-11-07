import React from "react";

const PageLocation = ({ value }) => {
  return (
    <nav className="bg-gray-100 py-6 rounded mb-10">
      <ol className="flex justify-center">
        {value.map((el) => (
          <li key={el}>{el}</li> 
        ))}
      </ol>
    </nav>
  );
};

export default PageLocation;
