'use client'

import { motion } from "framer-motion";
import Me from "@/public/me.jpg"
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex bg-white text-black dark:bg-[#212529] dark:text-white transition duration-500">

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between p-7 gap-24">

        {/* Left Content */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="flex flex-col flex-1 text-center md:text-left gap-6"
        >
          <h2 className="text-4xl font-bold">About <span className="text-gray-600 dark:text-gray-400 transition duration-500">Me!</span></h2>
          <p>
            My name is Adithya Prasetio Hutahaean, I was born in Semarang on January 29 2008.
            I am a BackEnd Developer. Currently I am studying at SMK Negeri 8 Semarang class 11 PPLG 1.
            I love gazing at the beautiful stars on a quiet night.
            My hobbies are watching anime, reading comics, and playing games.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="w-[300px] h-[350px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src={Me}
            alt="profile"
            width={837}
            height={966}
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>

    </main>
  )
}