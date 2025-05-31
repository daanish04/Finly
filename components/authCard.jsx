"use client";

import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function AuthCard({ children }) {
  const [justMounted, setJustMounted] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setJustMounted(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="mt-16 mb-5 flex justify-center items-center">
      <Card className="max-w-4xl py-8 bg-gradient-to-br from-purple-300 via-blue-200 to-orange-300 dark:bg-none">
        <CardContent className="flex flex-row justify-center items-center space-x-4 space-y-5 gap-4">
          <div className="hidden md:block ">
            <h2 className="text-5xl mt-6 gradient-title">Your Finances,</h2>
            <h2 className="text-4xl gradient-title">All in One Place</h2>
            <p className="text-md text-muted-foreground">
              Track, analyze, and optimize your spending with AI insights.
            </p>
            <Image
              src="/graphs.png"
              alt="Spending Graph"
              width={500}
              height={500}
            />
          </div>
          <div className="flex justify-center items-center min-w-[400px]">
            {justMounted ? (
              <LoaderCircle className="animate-spin text-primary" size={48} />
            ) : (
              <>
                <ClerkLoaded>{children}</ClerkLoaded>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
