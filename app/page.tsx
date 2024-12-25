'use client'
import { ReactTyped } from 'react-typed'
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import Violet from '@/public/'

export default function Home() {
  return (
    <main>
      <div>
        <h3>Hello, I&apos;m</h3>
        <h1>Adithya Prasetio Hutahaean</h1>
        <h3>And I&apos;m a
          <ReactTyped
            strings={[
              "Web Developer",
              "Backend Developer",
            ]}
            typeSpeed={70}
            backSpeed={70}
            loop
          ></ReactTyped>
        </h3>
        <div>
          <Link href="https://github.com/HikaruYo"><FaGithub /></Link>
          <Link href="https://www.instagram.com/adithaean/"><FaInstagram /></Link>
        </div>
      </div>

      <div>
        <img src={Violet} alt="Violet" />
      </div>
    </main>
  )
}
