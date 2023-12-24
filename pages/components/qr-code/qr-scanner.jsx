"use client";
import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";

const ScanQR = ({ ScanSuccess }) => {
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
          ScanSuccess(true, scanResult);
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
  });

  return (
    <video
      ref={videoRef}
      style={{ width: "250px", borderRadius: "30px" }}
    />
  );
};

export default ScanQR;
