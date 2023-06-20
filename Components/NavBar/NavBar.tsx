import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-red-900">
      
      <div className="lg:bg-red-900 md:bg-gray-800 mx-auto">
        <div className="flex items-center justify-center">
          <div className="">
            <a
              href="https://pizzatowns.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo.svg"
                alt="Pizza Towns"
                // className="dark:invert"
                width={600}
                height={100}
                priority
              />
            </a>
          </div>
          <div className=""></div>
        </div>
      </div>
    </nav>
  );
}
