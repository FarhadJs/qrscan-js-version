import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";

const Amount = () => {
  return (
    <div className="relative">
      <Button className="flex items-center justify-center w-5 bg-transparent p-1 active:bg-neutral-50 active:bg-opacity-10 text-white absolute top-2 right-2 z-10">
        MAX
        <span className="rounded bg-blue-500 p-1 px-2">ETH</span>
      </Button>
      <Input type="number" variant="bordered" placeholder="Amount:" size="md" />
    </div>
  );
};

export default Amount;
