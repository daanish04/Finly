"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LayoutDashboard, PenBox } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import ThemeToggle from "./themeToggle";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <SignedOut>
        <SignInButton forceRedirectUrl="/dashboard">
          <Button variant="primary" className="border cursor-pointer">
            Log In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Link href="/dashboard">
          <Button
            variant="outline"
            className="border border-gray-300 cursor-pointer"
          >
            <LayoutDashboard size={20} />
            <span className="hidden sm:inline">Dashboard</span>
          </Button>
        </Link>
        <Link href="/transaction/create">
          <Button
            variant="secondary"
            className="border border-gray-300 cursor-pointer"
          >
            <PenBox size={20} />
            <span className="hidden sm:inline">Create Transaction</span>
          </Button>
        </Link>
        <UserButton />
      </SignedIn>
      <ThemeToggle />
    </div>
  );
}
