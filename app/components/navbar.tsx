"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    {
      name: "ABOUT",
      href: "/about",
      hasDropDown: true,
    },
    {
      name: "SERVICES",
      href: "/services",
      hasDropDown: true,
    },
    {
      name: "PROJECTS",
      href: "/projects",
      hasDropDown: true,
    },
    {
      name: "BLOG",
      href: "/blog",
      hasDropDown: true,
    },
    {
      name: "PAGE",
      href: "/page",
      hasDropDown: true,
    },
    {
      name: "CONTACT",
      href: "/contact",
      hasDropDown: true,
    },
  ];
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-32">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-900 p-1">
                    <img
                      src="/assets/images/logo.svg"
                      alt="Logo"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-xl font-bold text-green-900">
                    RouteX
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center px-2 py-2 text-sm font-medium text-green-900 hover:text-green-600"
                >
                  {item.name}
                  {item.hasDropDown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center rounded-full bg-green-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Get An Appointment <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-green-900 hover:bg-gray-100 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600 "
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/appointment"
            className="mt-4 block w-full rounded-full bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-600"
          >
            Get Appointement
          </Link>
        </div>
      </div>
    </header>
  );
}
