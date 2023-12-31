import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constant";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-6">
        <div className="flex flex-col justify-start items-start gap-6">
          {/* <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          /> */}
          <h2 className="lg:text-3xl font-bold sm:text-lg">
            AL <span className="text-primary-blue ">Amir</span> Cars{" "}
          </h2>
          <p className="text-base text-gray-700">
            AL Amir Cars 2023 <br />
            All right is reserved{" "}
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 AL Amir Cars . All right resvered</p>
        <div className="footer__copyrights-link ">
          <Link href="/" className="text-gray-500 ">
            privacy policy
          </Link>
          <Link href="/" className="text-gray-500 ">
            terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
