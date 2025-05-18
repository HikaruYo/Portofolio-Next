'use client'

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Violet from "@/public/Violet.jpg"
import { FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import {ReactTyped} from "react-typed";

export default function Home() {
  return (
    <main className="md:min-h-screen flex bg-white text-black dark:bg-[#212529] dark:text-white transition duration-500">

      {/* Main Content */}
      <div className="flex flex-col translate-y-14 md:translate-y-0 md:top-0 md:flex-row items-center p-7 gap-10 md:gap-24">
        {/* Profile Image */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="w-[300px] h-[300px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src={Violet}
            alt="profile"
            width={620}
            height={620}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="flex flex-col text-left gap-1 md:gap-2"
        >
          <h2 className="text-2xl md:text-2xl font-semibold">Hello, I’m</h2>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-2">
            Adithya Prasetio Hutahaean
          </h1>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-1 md:gap-2 mt-4">
            <span className="text-xl md:text-2xl font-medium">And I&apos;m a</span>
            <span
              className="text-xl md:text-2xl font-bold text-[#212529]"
            >
                <ReactTyped
                  strings={[
                    "Web Developer",
                    "Backend Developer",
                  ]}
                  typeSpeed={70}
                  backSpeed={70}
                  loop
                  className="text-black dark:text-white"
                ></ReactTyped>
              </span>
          </div>
          <div className="flex mt-4 justify-start space-x-4">
            <Link href="https://github.com/HikaruYo">
              <FaGithub
                className="inline-flex justify-center items-center w-10 h-10 border-2 border-black dark:border-white rounded-full p-2 text-black dark:text-white hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black transition duration-500"
              />
            </Link>
            <Link href="https://www.instagram.com/adithaean/">
              <FaInstagram
                className="inline-flex justify-center items-center w-10 h-10 border-2 border-black dark:border-white rounded-full p-2 text-black dark:text-white hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black transition duration-500"
              />
            </Link>
          </div>
        </motion.div>
      </div>

    </main>
  );
}
