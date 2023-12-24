import { useState } from "react";
import styles from "../styles/Home.module.css";
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
        <div className="flex items-center justify-center gap-1 mb-8">
          <h1 className="text-2xl">Ethereum</h1>
          <span className="bg-[#1C212C] bg-opacity-80 px-2 mt-0.5 rounded-xl text-white text-opacity-50">
            ETH
          </span>
        </div>
        <FormEth />
      </main>
    </div>
  );
}
