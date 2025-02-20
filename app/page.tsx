'use client'
import { ReactTyped } from 'react-typed'
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import Violet from '@/public/Violet.jpg'

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-8 gap-80 bg-[#323946]">
      <div className="space-y-3">
        <h3 className="font-bold text-3xl text-white">Hello, I&apos;m</h3>
        <h1 className="max-w-[460px] leading-tight font-bold text-5xl text-white">Adithya Prasetio Hutahaean</h1>
        <h3 className="font-bold text-3xl text-white">And I&apos;m a<span> </span>
          <ReactTyped
            strings={[
              "Web Developer",
              "Backend Developer",
            ]}
            typeSpeed={70}
            backSpeed={70}
            loop
            className="text-[#5b6cde]"
          ></ReactTyped>
          {/* Sosmed */}
          <div className="my-12 space-x-4">
            <Link href="https://github.com/HikaruYo">
              <FaGithub
                className="inline-flex justify-center items-center w-10 h-10 border-2 border-[#5b6cde] rounded-full p-2 text-[#5b6cde] hover:text-[#323946] bg-transparent hover:bg-[#5b6cde] transition duration-500"
              />
            </Link>
            <Link href="https://www.instagram.com/adithaean/">
              <FaInstagram
                className="inline-flex justify-center items-center w-10 h-10 border-2 border-[#5b6cde] rounded-full p-2 text-[#5b6cde] hover:text-[#323946] bg-transparent hover:bg-[#5b6cde] transition duration-500"
              />
            </Link>
          </div>
        </h3>
      </div>

      <div>
        <img src={Violet} alt="Violet" className="w-[25vw] rounded-2xl"/>
      </div>
    </main>
  )
}
