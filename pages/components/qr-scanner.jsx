"use client";
import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";

const ScanQR = () => {
  const videoRef = useRef(null);
  const [scanResult, setScanResult] = useState("");
  const [hasFlash, setHasFlash] = useState(false);

  const cameras = QrScanner.listCameras(true);

  const initializeScanner = async () => {
    if (videoRef.current) {
      const qrScanner = new QrScanner(
        videoRef.current,
        (result) => {
          setScanResult(result.data);
        },
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );

      try {
        await qrScanner.start();
        setHasFlash(await qrScanner.hasFlash());
      } catch (error) {
        console.error(error);
      }

      return qrScanner;
    }
  };

  useEffect(() => {
    const qrScanner = initializeScanner();

    return () => {
      qrScanner.then((scanner) => {
        scanner?.stop();
        scanner?.destroy();
      });
    };
  }, []);

  return (
    <div style={{width:"200px"}}>
      <video ref={videoRef} style={{width:"200px"}} />
      <p>Scanned QR Code: {scanResult}</p>
    </div>
  );
};

export default ScanQR;
