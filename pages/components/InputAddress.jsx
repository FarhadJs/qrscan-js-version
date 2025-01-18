/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQrCodeResult } from "../../features/qrCodeResult";

import ModalQrcode from "./modal";
import QrCodeIcon from "../../assets/Scanqr.svg";
import Image from "next/image";

const InputAddress = () => {
  const [isOpen, setIsOpen] = useState(false);
  const QRCode = useSelector((state) => state.qrCode.value);
  const dispatch = useDispatch();

  const OpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <ModalQrcode showModal={isOpen} onOpenChange={OpenModal} />
      <button
        onClick={OpenModal}
        className="flex rounded items-center justify-center gap-1 w-20 bg-[#16191E] text-white absolute top-1 right-1 z-10 focus:outline outline-none transition-all border border-transparent p-0.5 hover:bg-neutral-500/20 focus:border-neutral-500 focus:bg-neutral-500/50 active:border-transparent">
        paste
        <div className="w-5 h-7 flex items-center justify-center">
          <Image src={QrCodeIcon} />
        </div>
      </button>
      <input
        type="text"
        placeholder="Address:"
        value={QRCode}
        onChange={(e) => dispatch(setQrCodeResult(e.target.value))}
        className="w-full p-2 rounded bg-transparent border border-neutral-50 focus-within:border-neutral-500 outline-none transition-all"
      />
    </div>
  );
};

export default InputAddress;
