import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowRightToLine } from "lucide-react";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-[1400] mx-auto px-4">
      <div className="flex-2 text-center container mx-auto">
        <h1 className="text-5xl lg:text-7xl pb-6 gradient-title">
          Manage your money with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto mt-4">
          Finly combines powerful budgeting tools and AI-driven insights to help
          you take control of your financial future.
        </p>
        <div className="flex space-x-6 justify-center mt-4">
          <Link href="/dashboard">
            <Button size="lg" className="cursor-pointer">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <Button variant="outline" size="lg" className="cursor-pointer">
              Watch Demo
              <ArrowRightToLine />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-3">
        <div>
          <Image
            src="/banner.png"
            alt="Finly Hero Image"
            width={1280}
            height={720}
            className="object-contain rounded-xl mx-auto border shadow-2xl m-4"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
