import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  return (
    <div className="sticky top-0 w-full backdrop-blur-lg bg-white/30 border border-gray-200 z-20">
      <nav className="flex justify-between items-center px-4 ">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Finly Logo"
            width={80}
            height={100}
            className="h-20 object-contain"
          />
        </Link>
        <div className="flex items-center">
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="primary" className="border">
                Log In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard" className="mr-4">
              <Button variant="outline">
                <LayoutDashboard size={20} />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create" className="mr-4">
              <Button variant="secondary" className="border border-gray-300">
                <PenBox size={20} />
                <span className="hidden sm:inline">Create Transaction</span>
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
