// /* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Html5Qrcode from "../components/qr-code/html5-qrcode";
import { useDispatch } from "react-redux";
import { setQrCodeResult } from "../../features/qrCodeResult";

const ModalQrcode = ({ showModal, onOpenChange }) => {
  const dispatch = useDispatch();

  const ShowQRCodeResult = (qrcode) => {
    dispatch(setQrCodeResult(qrcode));
    onOpenChange();
  };
  const [isAnimating, setIsAnimating] = useState(false);

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onOpenChange();
    }, 10);
  };

  return (
    <div
      className={`fixed inset-0 filter-backdrop backdrop-blur-sm z-30 flex items-center justify-center transition-all ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
      <div
        id="ModalContent"
        className={`bg-neutral-700 w-96 h-[26em] text-neutral-200 rounded-lg p-8 shadow-lg transform transition-all relative ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}>
        <h2 className="text-xl font-bold mb-8 -mt-4">Scan Qr Code</h2>
        <div>
          <div className="flex flex-col items-center justify-center h-full">
            <div className=" w-full">
              <Html5Qrcode
                fps={60}
                qrbox={500}
                qrCodeSuccessCallback={ShowQRCodeResult}
              />
            </div>
          </div>
        </div>
        <button
          className="bg-neutral-500 hover:bg-neutral-600 transition-all text-white font-bold py-2 px-4 mt-4 rounded absolute bottom-2 right-32 left-32"
          onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalQrcode;
