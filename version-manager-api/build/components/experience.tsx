"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

const workExperience = [
  {
    title: "Full Stack Developer",
    company: "Reliance Jio",
    period: "July 2023 - Present",
    description:
      "Working on enterprise-level applications for cybersecurity, device management, and authentication systems.",
    achievements: [
      "Developed a Breach Attack Simulation Tool to automate red team tasks for Endpoint Assessment and Email Phishing Attacks using Node.js, Express, React and Postfix server",
      "Developed a Mobile Device Manager (MDM) for Android to manage Reliance Retail Stores POS Devices, rolled out for 1800 devices",
      "Deployed the MDM solution for RCP Campus Security, optimizing employee attendance tracking",
      "Developed a Cybersecurity Policy Awareness Chatbot using Langchain and NLP",
      "Developed a REST API for LDAP authentication for devices with Reliance Active Directory",
      "Built a Python-based agent to capture and reconstruct outbound emails from packet data for DLP integration",
      "Managing application deployment using Linux and Windows servers on Nginx, Docker and IIS",
    ],
    technologies: ["React", "Node.js", "Express", "Docker", "Nginx", "IIS", "LDAP", "Python", "NLP", "Langchain"],
  },
  {
    title: "Software Engineer Intern",
    company: "AMD",
    period: "June 2022 - May 2023",
    description:
      "Worked on data engineering, automation, and sentiment analysis projects for product reviews and social media coverage.",
    achievements: [
      "Developed 60+ Automation Scripts in Python and Selenium to extract product reviews from different community forums",
      "Developed around 20 ETL scripts as part of Data Engineering activities using Python and SQL",
      "Performed Sentiment Analysis on AMD, Intel and Nvidia Products using TensorFlow and BERT",
      "Built the Social Media Coverage Dashboard for AMD in PowerBI",
      "Developed Email Alert Automation for failing ETL scripts using Python and Microsoft Graph API",
    ],
    technologies: ["Python", "Selenium", "SQL", "ETL", "TensorFlow", "BERT", "PowerBI", "Microsoft Graph API"],
  },
  {
    title: "Research Intern",
    company: "IIT Roorkee",
    period: "April 2020 - June 2020",
    description: "Conducted research in natural language processing and data visualization.",
    achievements: ["Developed an Automatic Linguistic Summarizer for clustering results using Python and Matplotlib"],
    technologies: ["Python", "Matplotlib", "NLP", "Data Visualization"],
  },
]

const education = [
  {
    degree: "M.Tech. in Computer Science and Engineering",
    institution: "NIT Jamshedpur",
    period: "August 2021 - June 2023",
    description: "Focused on machine learning, database management systems, and data structures.",
    achievements: [
      "GPA: 8.5/10",
      "Developed the Waste Management Analytics Dashboard using Sentiment Analysis, Python and React",
      "Coursework: Machine Learning, DBMS and Data Structures",
    ],
  },
  {
    degree: "Publications",
    institution: "Academic Research",
    period: "2021 - 2022",
    description: "Published multiple research papers in international conferences.",
    achievements: [
      "Sentiment Analysis & Sarcasm Detection of Loksabha Election Tweets-2014 (ANTIC-2021)",
      "Email Assistant: Automation of E-Mail Handling & Management using Robotics Process Automation (DASA)",
      "Linguistic Protoform Based Summarization of Clustering Results (ICECCME)",
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-slate-700">My professional journey and educational background.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-blue-200 pl-8 ml-3">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-10 relative"
                >
                  <div className="absolute -left-10 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold">{job.title}</h4>
                        <Badge variant="outline">{job.period}</Badge>
                      </div>
                      <p className="text-blue-600 font-medium mb-3">{job.company}</p>
                      <p className="text-slate-700 mb-4">{job.description}</p>

                      <h5 className="font-semibold mb-2">Key Achievements:</h5>
                      <ul className="space-y-1 mb-4">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></div>
                            <span className="text-slate-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative border-l-2 border-blue-200 pl-8 ml-3">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-10 relative"
                >
                  <div className="absolute -left-10 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold">{edu.degree}</h4>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <p className="text-blue-600 font-medium mb-3">{edu.institution}</p>
                      <p className="text-slate-700 mb-4">{edu.description}</p>

                      <h5 className="font-semibold mb-2">Achievements:</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></div>
                            <span className="text-slate-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
