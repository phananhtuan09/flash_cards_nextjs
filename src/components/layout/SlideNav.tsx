"use client";

// Import necessary libraries and components
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Define the Sidenav component
export default function SideNav({ sidebarOpen, setSidebarOpen }: any) {
  // Define state for sidebar expansion
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // Create a reference to the sidebar element
  const sidebar = useRef(null);

  // Effect to add or remove a class to the body element based on sidebar expansion
  useEffect(() => {
    if (sidebarExpanded) {
      document
        .getElementById("main-section")
        ?.classList.add("sidebar-expanded");
    } else {
      document
        .getElementById("main-section")
        ?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <>
      {/* Sidebar backdrop (visible on mobile only) */}
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`fixed inset-0 border-r border-gray-200 sm:translate-x-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`fixed flex flex-col z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-full overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:w-64  w-72 bg-white lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 sm:translate-x-0 p-4 transition-all duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-72"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between pr-3 sm:px-2">
          {/* Sidebar Logo */}
          <Link href="/">
            <span
              className={
                "block welcome-step text-2xl font-medium tracking-tighter text-black focus:outline-none focus:ring whitespace-nowrap cursor-pointer"
              }
            >
              <Image
                className="mt-2 mb-8 h-8 w-8"
                src="/assets/images/logo.jpg"
                height={32}
                width={32}
                alt="logo"
              />
            </span>
          </Link>

          {/* Expand / collapse button */}
          <div className="pt-3 lg:inline-flex  mt-auto ">
            <div className="flex-1" />
            <div className="px-3 py-2 justify-end">
              <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                <span className="sr-only">Expand / collapse sidebar</span>
                <svg
                  className={`w-6 h-6 hidden lg:block fill-current ${
                    !sidebarExpanded ? "rotate-0" : "rotate-180"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <p
            className={`${
              sidebarExpanded ? "lg:hidden" : "block"
            } px-2 text-xs font-base text-gray-400 uppercase`}
          >
            Actions
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  <Image
                    src="/assets/images/search.svg"
                    height={16}
                    width={16}
                    alt="search icon"
                  />

                  <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 whitespace-nowrap `}
                  >
                    Write a Blog
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
