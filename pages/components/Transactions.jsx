import React from "react";

const Transactions = () => {
  return (
    <div className="bg-[#16191E] p-2  rounded w-96 md:w-[50%]">
      <h1 className="text-xl m-3 text-neutral-400">Resent Transactions</h1>
      <div className="w-full flex flex-col items-center justify-center">
        <span>You do not have any activity yet</span>
      </div>
    </div>
  );
};

export default Transactions;
