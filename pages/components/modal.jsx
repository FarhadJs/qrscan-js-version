/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import QrIcon from "../../assets/Scanqr.svg";
import QrScanner from "../components/qr-code/qr-scanner";

const ModalQrcode = ({ showModal, onOpenChange, getQrCodeResult }) => {
  const SendQRCodeResult = (close_modal, qrcode_result) => {
    getQrCodeResult(qrcode_result);
    onOpenChange(close_modal);
  };
  return (
    <Modal
      backdrop="blur"
      className="bg-neutral-600 h-96"
      isOpen={showModal}
      onOpenChange={onOpenChange}
      placement="center"
      hideCloseButton={true}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Scan Qr Code</ModalHeader>
        <ModalBody className="flex flex-col items-center justify-center relative">
          <Image
            alt="Qr Code Icon"
            src={QrIcon}
            className="w-40 opacity-30 absolute top-12 bottom-0 z-0"
          />
          <QrScanner ScanSuccess={SendQRCodeResult} />
        </ModalBody>
        <ModalFooter>
          <Button className="text-white" variant="flat" onPress={onOpenChange}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalQrcode;
