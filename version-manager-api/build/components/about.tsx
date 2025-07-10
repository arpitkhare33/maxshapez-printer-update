"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-slate-200">
              <img src="/profile-photo.png" alt="Arpit Khare" className="object-cover w-full h-full" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Full-Stack Developer with Enterprise Experience</h3>
            <p className="text-slate-700 mb-4">
              With 3+ years of experience specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), I
              have a strong foundation in backend development, system integration, and automation.
            </p>
            <p className="text-slate-700 mb-4">
              I have a proven track record in building scalable applications for enterprise environments, including
              Breach Attack Simulation Systems, MDM systems, and RESTful APIs. I'm experienced in deploying and managing
              apps on both Linux and Windows servers using Docker, Nginx, and IIS.
            </p>
            <p className="text-slate-700 mb-4">
              My expertise extends to handling authentication (LDAP), chatbot development (LangChain, NLP), and
              Python-based automation for data extraction and cybersecurity. I'm passionate about developing
              high-performance web applications and delivering end-to-end solutions tailored to business needs.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Problem Solver</span>
              <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Team Player</span>
              <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Adaptable</span>
              <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Time Management</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
