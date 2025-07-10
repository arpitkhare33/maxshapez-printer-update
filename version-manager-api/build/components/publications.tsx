"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink } from "lucide-react"

const publications = [
  {
    title: "Sentiment Analysis & Sarcasm Detection of Loksabha Election Tweets-2014",
    conference: "International Conference on Advanced Network Technologies and Intelligent Computing (ANTIC-2021)",
    year: "2021",
    authors: "Arpit Khare, Sudhakar Singh, et al.",
    link: "#",
  },
  {
    title: "Email Assistant: Automation of E-Mail Handling & Management using Robotics Process Automation",
    conference: "International Conference on Decision Aid Sciences & Applications (DASA)",
    year: "2022",
    authors: "Arpit Khare, Sudhakar Singh, et al.",
    link: "#",
  },
  {
    title: "Linguistic Protoform Based Summarization of Clustering Results",
    conference:
      "International Conference on Electrical, Computer, Communications and Mechatronics Engineering (ICECCME)",
    year: "2022",
    authors: "Arpit Khare, Dheeraj Kumar, et al.",
    link: "#",
  },
]

export default function Publications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Publications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-slate-700">My research contributions to academic conferences.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((publication, index) => (
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
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    <Badge>{publication.year}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{publication.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{publication.conference}</p>
                  <p className="text-slate-700 mb-4">{publication.authors}</p>
                  <a
                    href={publication.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Publication <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
