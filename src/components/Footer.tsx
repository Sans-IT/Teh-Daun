import { MapPin, Phone } from "lucide-react";
import React from "react";
import MaxWidthDiv from "./MaxWidthDiv";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-emerald-100 bg-opacity-50 w-full h-full" id="footer">
      <MaxWidthDiv className="px-5 py-10 ">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <h2 className="text-3xl text-primary font-semibold mb-4 font-berkshire">
              Tentang Teh Daun
            </h2>
            <p className="text-base">
              Teh Daun menghadirkan cita rasa alami dari daun teh pilihan yang
              diracik dengan penuh perhatian. Nikmati kesegaran dalam setiap
              tegukan.
            </p>
          </div>

          <ul className="flex flex-col gap-5 text-balance sm:mx-auto me-0">
            {/* alamat */}
            <li className="flex gap-2 group">
              <div className="rounded-full border-2 border-black p-2 w-12 h-12 text-center ">
                <MapPin className="group-hover:text-primary w-full h-full" />
              </div>
              <Link className="flex flex-col" href="/">
                <h3 className="text-primary font-semibold">Alamat:</h3>
                <p className="group-hover:text-primary">
                  Jl. Kendangsari utara no 20
                </p>
              </Link>
            </li>
            {/* no telp */}
            <li className="flex gap-2 group">
              <div className="rounded-full border-2 border-black p-2 w-12 h-12 text-center ">
                <Phone className="group-hover:text-primary w-full h-full" />
              </div>
              <Link className="flex flex-col" href="/">
                <h3 className="text-primary font-semibold">No Telp/Wa:</h3>
                <p className="group-hover:text-primary">08912374414</p>
              </Link>
            </li>
          </ul>

          <div>
            {/* medsos */}
            <h2 className="text-3xl text-primary font-semibold mb-4 font-berkshire">
              Ikuti Kami
            </h2>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-primary hover:scale-105"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-primary hover:scale-105"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-primary hover:scale-105"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthDiv>
      <div className="w-full bg-black py-2 text-white text-center text-sm">
        @ {new Date().getFullYear().toString()} Teh Daun Surabaya Official
      </div>
    </div>
  );
}

export default Footer;
