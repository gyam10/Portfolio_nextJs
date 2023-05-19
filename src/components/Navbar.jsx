// "use client"; // This is client component which is required
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16">
        <Link href="/">
          <Image src={logo} alt="logo" width="50" height="50" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li
                className="ml-10 text-sm uppercase hover:border-b
              "
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className="ml-10 text-sm uppercase hover:border-b
              "
              >
                About
              </li>
            </Link>
            <Link href="/skills">
              <li
                className="ml-10 text-sm uppercase hover:border-b
              "
              >
                Skills
              </li>
            </Link>
            <Link href="/project">
              <li
                className="ml-10 text-sm uppercase hover:border-b
              "
              >
                Project
              </li>
            </Link>
          </ul>
          <div onClick={handleToggle} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        {/* For Hidden navbar */}
        <div
          className={
            toggle
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60"
              : ""
          }
        >
          <div
            className={
              toggle
                ? "fixed left-0 top-0 w-[75%] sm:[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between ">
                <Link href="/">
                  <Image src={logo} alt="logo" width="50" height="50" />
                </Link>
                <div
                  onClick={handleToggle}
                  className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
                >
                  <AiOutlineClose size={20} />
                </div>
              </div>
              <div className="border-b border-gray-400 my-4">
                <p className="w-[85%] md:w-[90$] py-2">Let's build something</p>
              </div>
            </div>
            {/* Menu part */}
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/about">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/skill">
                  <li className="py-4 text-sm">Skill</li>
                </Link>
                <Link href="/project">
                  <li className="py-4 text-sm">Project</li>
                </Link>
              </ul>
              <div className="pt-40 ">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's Connect
                </p>
                {/* Socials */}
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-100">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-100">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-100">
                    <FaFacebook />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-100">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
