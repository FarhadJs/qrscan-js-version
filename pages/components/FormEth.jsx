import React from "react";
import InputAddress from "./InputAddress";
import Amount from "./Amount";
import FeeLevel from "./FeeLevel";
import { Button } from "@nextui-org/react";


const FormEth = () => {
  return (
    <>
      <div className="bg-[#16191E] p-5 rounded w-96 md:w-[50%] relative">
        <h1 className="text-neutral-400 mb-5 text-xl">Send</h1>
        <div className="flex flex-col gap-3 px-3">
          <InputAddress />
          <Amount />
          <FeeLevel />
          <Button className="bg-[#00A694] text-white text-base rounded-full" >Preview Transfer</Button>
        </div>
      </div>
    </>
  );
};

export default FormEth;
