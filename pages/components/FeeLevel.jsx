import React from "react";
import Select from "./ui/select";
const FeeLevel = () => {
  const feeLevels = [
    { label: "low", value: "low fee" },
    { label: "Medium", value: "Medium fee" },
    { label: "High", value: "High fee" },
  ];
  return (
    <div>
      <h1 className="text-neutral-400 mb-1 text-base">
        Fee level
      </h1>
      <Select feeItems={feeLevels} />
    </div>
  );
};

export default FeeLevel;
