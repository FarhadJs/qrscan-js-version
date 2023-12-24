import React from "react";
import InputAddress from "./InputAddress";
import Amount from "./Amount";
import FeeLevel from "./FeeLevel";


const FormEth = () => {
  return (
    <div className="bg-[#16191E] p-5 rounded w-96 md:w-[50%] relative">
      <h1 className="text-neutral-400 mb-5 text-xl">Send</h1>
      <div className="flex flex-col gap-3 px-3">
        <InputAddress />
        <Amount />
        <FeeLevel />
        <button className="bg-[#00A694] hover:bg-[#2f897e] active:bg-[#2f897e] transition-all text-white text-base rounded-full p-2">Preview Transfer</button>
      </div>
    </div>
  );
};

export default FormEth;
