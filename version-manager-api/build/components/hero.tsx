"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/grid-pattern.png")',
          backgroundSize: "50px 50px",
          opacity: 0.15,
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Arpit Khare</h1>
            <p className="mt-2 text-xl md:text-2xl text-slate-300">Full-Stack MERN Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl"
          >
            <p>
              Specializing in MERN stack with expertise in backend development, system integration, automation, and
              cybersecurity solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex space-x-4"
          >
            <Button
              variant="outline"
              className="rounded-full bg-white text-black border-white hover:bg-slate-100 hover:text-black"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-white text-black border-white hover:bg-slate-100 hover:text-black"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-white text-black border-white hover:bg-slate-100 hover:text-black"
            >
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
