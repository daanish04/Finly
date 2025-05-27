"use client";

import { scanReceipt } from "@/actions/transaction";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { Camera, LoaderCircle } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { toast } from "sonner";

export const ReceiptScanner = ({ onScanComplete }) => {
  const fileRef = useRef();

  const {
    loading: isScanning,
    fn: scanReceiptFn,
    data: scannedData,
  } = useFetch(scanReceipt);

  const handleReceiptScan = async (file) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size should be less than 5MB");
      return;
    }
    await scanReceiptFn(file);
  };

  useEffect(() => {
    if (scannedData && !isScanning) {
      onScanComplete(scannedData);
      toast.success("Receipt scanned successfully");
    }
  }, [scannedData, isScanning]);

  return (
    <div>
      <input
        type="file"
        ref={fileRef}
        className="hidden"
        accept="image/*"
        capture="environment"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleReceiptScan(file);
        }}
      />
      <Button
        type="button"
        variant="outline"
        className="w-full p-2 h-10 text-white hover:text-white bg-gradient-to-br from-blue-400 via-purple-700 to-pink-400 hover:opacity-85 cursor-pointer font-medium "
        onClick={() => fileRef.current?.click()}
        disabled={isScanning}
      >
        {!isScanning ? (
          <>
            <Camera className="mr-2" />
            <span>Scan Receipt with AI</span>
          </>
        ) : (
          <>
            <LoaderCircle className="mr-2 animate-spin" />
            <span>Scanning Receipt</span>
          </>
        )}
      </Button>
    </div>
  );
};
