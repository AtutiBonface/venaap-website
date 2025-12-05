"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Chrome } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Companion App", href: "/companion-app" },
    { name: "Support", href: "/support" },
    { name: "Privacy", href: "/privacy" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image 
              src="/xe-96.png" 
              alt="VenaApp Logo" 
              width={32} 
              height={32}
              className="rounded-lg group-hover:opacity-90 transition-opacity"
            />
            <span className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
              VenaApp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-surface-light rounded-lg transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side - Desktop */}
          <div className="hidden md:flex items-center">
            <Button className="bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg transition-all">
              <Chrome className="mr-2 h-4 w-4" />
              Add to Chrome
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface-light transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-text-secondary hover:text-primary hover:bg-surface-light rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-primary hover:bg-primary-dark text-white shadow-md mt-4">
              <Chrome className="mr-2 h-4 w-4" />
              Add to Chrome
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
