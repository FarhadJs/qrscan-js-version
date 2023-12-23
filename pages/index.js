import { useState } from "react";
import Html5QrcodePlugin from "./components/qr-code/html5-qrcode";
import styles from "../styles/Home.module.css";
import QrScanner from "./components/qr-code/qr-scanner";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/react";
import FormEth from "./components/FormEth";

export default function Home() {
  const [showScanner, setScannerST] = useState(false);
  const [qrcode_result, setQrcodeResult] = useState(false);

  const toggleScanner = () => setScannerST(!showScanner);
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log(decodedText, decodedResult);
    setQrcodeResult(decodedText);
  };

  return (
    <div className={styles.container}>
      <main className="min-h-[100vh] flex items-center justify-start flex-col p-3 pt-10">
        {/* <Html5QrcodePlugin
          fps={10}
          qrbox={1000}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        /> */}
        {/* <p>QrCode Result : {qrcode_result}</p> */}
        {/* <QrScanner /> */}
        <div className="flex gap-1">
          <h1 className="mb-8 text-2xl">Ethereum</h1>
          <Chip className="bg-[#1C212C] mt-1.5 bg-opacity-80 text-white text-opacity-50" size="sm">
            ETH
          </Chip>
        </div>
        <FormEth />
      </main>
    </div>
  );
}
