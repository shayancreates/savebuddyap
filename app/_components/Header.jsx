"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link href="/" className="flex items-center">
          <span className="ml-2 text-xl font-bold text-blue-800">
            Savebuddy
          </span>
        </Link>

        <div className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-black transition">
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-black transition"
          >
            About
          </Link>
          {isSignedIn && (
            <>
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-black transition"
              >
                Dashboard
              </Link>
              <Link
                href="https://turincodes8689-savebuddybot-newbot-yxye02.streamlit.app/"
                className="text-gray-700 hover:text-black transition"
              >
                Savebuddy Bot
              </Link>
              <Link
                href="https://savebuddyschemes.vercel.app/index.html"
                className="text-gray-700 hover:text-black transition"
              >
                Schemes
              </Link>
            </>
          )}
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex gap-4">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <Link href="/sign-in">
              <Button className="bg-black text-white hover:bg-white hover:text-black transition-all">
                Sign In
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t p-4">
          <Link
            href="/"
            className="block py-2 text-gray-700 hover:text-black transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 text-gray-700 hover:text-black transition"
          >
            About
          </Link>
          {isSignedIn && (
            <>
              <Link
                href="/dashboard"
                className="block py-2 text-gray-700 hover:text-black transition"
              >
                Dashboard
              </Link>
              <Link
                href="https://turincodes8689-savebuddybot-newbot-yxye02.streamlit.app/"
                className="block py-2 text-gray-700 hover:text-black transition"
              >
                Savebuddy Bot
              </Link>
              <Link
                href="https://savebuddyschemes.vercel.app/index.html"
                className="block py-2 text-gray-700 hover:text-black transition"
              >
                Schemes
              </Link>
            </>
          )}
          {!isSignedIn && (
            <Link href="/sign-in">
              <Button className="w-full mt-2 bg-black text-white hover:bg-white hover:text-black transition-all">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
