import { useState } from "react";
import Html5QrcodePlugin from "./components/html5-qrcode";
import styles from "../styles/Home.module.css";
import QrScanner from "./components/qr-scanner";

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
      <main className={styles.main}>
        {/* <Html5QrcodePlugin
          fps={10}
          qrbox={1000}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        /> */}
        {/* <p>QrCode Result : {qrcode_result}</p> */}
        <QrScanner />
      </main>
    </div>
  );
}
