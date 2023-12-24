// /* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Image from "next/image";
import QrIcon from "../../assets/Scanqr.svg";
import QrScanner from "../components/qr-code/qr-scanner";

const ModalQrcode = ({ showModal, onOpenChange, getQrCodeResult }) => {
  const SendQRCodeResult = (close_modal, qrcode_result) => {
    getQrCodeResult(qrcode_result);
    onOpenChange(close_modal);
  };
  const [isAnimating, setIsAnimating] = useState(false);

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onOpenChange();
    }, 10); // Duration of transition in milliseconds
  };

  return (
    <div
      className={`fixed inset-10 filter-backdrop backdrop-blur-sm z-30 flex items-center justify-center transition-all ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
      <div
        className={`bg-neutral-700 w-96 h-80 text-neutral-200 rounded-lg p-8 shadow-lg transform transition-all relative ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}>
        {/* Modal content goes here */}
        <h2 className="text-xl font-bold mb-8 -mt-4">Scan Qr Code</h2>
        <div>
          <div className="flex flex-col items-center justify-center h-full pt-20">
            <Image
              alt="Qr Code Icon"
              src={QrIcon}
              className="w-40 opacity-30 absolute z-0"
            />
            <div className="absolute w-52">
              <QrScanner ScanSuccess={SendQRCodeResult} />
            </div>
          </div>
        </div>
        <button
          className="bg-neutral-500 hover:bg-neutral-600 transition-all text-white font-bold py-2 px-4 mt-4 rounded absolute bottom-3 right-5"
          onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalQrcode;
