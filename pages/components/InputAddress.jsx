/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import ModalQrcode from "./modal";
import QrCodeIcon from "../../assets/Scanqr.svg";
import Image from "next/image";

const InputAddress = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [QRCode, setQRCode] = useState("");

  const OpenModal = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setQRCode(e.target.value);
    console.log(QRCode);
  };

  const onQrCodeScanned = (scannedCode) => {
    setQRCode(scannedCode);
  };

  return (
    <div className="relative">
      <ModalQrcode
        showModal={isOpen}
        onOpenChange={OpenModal}
        getQrCodeResult={onQrCodeScanned}
      />
      <Button
        onPress={OpenModal}
        className="flex items-center justify-center w-5 bg-transparent p-0 hover:bg-neutral-50 hover:bg-opacity-10 text-white absolute top-2 right-2 z-10">
        paste
        <Image className="w-5" src={QrCodeIcon} />
      </Button>
      <Input
        type="text"
        variant="bordered"
        placeholder="Address:"
        size="md"
        value={QRCode}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputAddress;
