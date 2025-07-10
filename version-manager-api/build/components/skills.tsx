"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Server, Database, Code, Globe, Cpu, Cloud, BrainCircuit, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    skills: ["React.js", "Redux", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-8 w-8 text-blue-600" />,
    skills: ["Node.js", "Express.js", "REST APIs", "Flask", "Kafka", "LDAP Authentication"],
  },
  {
    title: "Database",
    icon: <Database className="h-8 w-8 text-blue-600" />,
    skills: ["MongoDB", "PostgreSQL", "MSSQL", "SQL"],
  },
  {
    title: "Programming Languages",
    icon: <Code className="h-8 w-8 text-blue-600" />,
    skills: ["JavaScript", "Python", "SQL", "HTML", "CSS", "C#"],
  },
  {
    title: "DevOps & Deployment",
    icon: <Cloud className="h-8 w-8 text-blue-600" />,
    skills: [
      "Docker",
      "GitHub Actions",
      "Nginx",
      "DigitalOcean",
      "Netlify",
      "Git",
      "GitHub",
      "IIS",
      "Linux",
      "Windows Server",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Cpu className="h-8 w-8 text-blue-600" />,
    skills: ["Postman", "VS Code", "Visual Studio", "Certificate Manager", "Selenium"],
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit className="h-8 w-8 text-blue-600" />,
    skills: [
      "OpenAI API",
      "TensorFlow",
      "Hugging Face",
      "Llama",
      "NLP",
      "Machine Learning",
      "BERT",
      "Sentiment Analysis",
    ],
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-8 w-8 text-blue-600" />,
    skills: ["Team Collaboration", "Time Management", "Adaptability", "Problem Solving"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-slate-700">
            A comprehensive set of technical skills acquired through professional experience and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-slate-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
