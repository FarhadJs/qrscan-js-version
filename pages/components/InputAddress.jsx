/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQrCodeResult } from "../../features/qrCodeResult";

import ModalQrcode from "./modal";
import QrCodeIcon from "../../assets/Scanqr.svg";
import Image from "next/image";

const InputAddress = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [QRCode, setQRCode] = useState("");
  const QRCode = useSelector((state) => state.qrCode.value);
  const dispatch = useDispatch();

  const OpenModal = () => {
    setIsOpen(!isOpen);
  };

  // Removed the previous handleInputChange function and its logging

  // const onQrCodeScanned = (scannedCode) => {
  //   // setQRCode(scannedCode);
  // };

  return (
    <div className="relative">
      <ModalQrcode
        showModal={isOpen}
        onOpenChange={OpenModal}
        // getQrCodeResult={onQrCodeScanned}
      />
      <button
        onClick={OpenModal}
        className="flex p-1 rounded items-center justify-center w-20 bg-transparent hover:bg-neutral-50 hover:bg-opacity-10 text-white absolute top-0.5 right-1 z-10 focus:outline outline-none transition-all border border-transparent focus:border-neutral-500 active:border-transparent">
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
