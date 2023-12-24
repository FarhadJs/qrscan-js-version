import React from "react";

const Amount = () => {
  return (
    <div className="relative">
      <button className="flex items-center justify-center gap-1 w-24 bg-[#16191E] p-1 py-1 rounded active:bg-neutral-50 active:bg-opacity-10 text-white absolute top-1 right-0.5 z-10 transition-all outline-none border border-transparent focus-within:border-neutral-500 active:border-transparent">
        MAX
        <span className="rounded bg-blue-500 p-0 px-2">ETH</span>
      </button>
      <input
        type="number"
        className="w-full p-2 rounded bg-transparent border border-neutral-50 focus-within:border-neutral-500 outline-none transition-all"
        placeholder="Amount:"
      />
    </div>
  );
};

export default Amount;
