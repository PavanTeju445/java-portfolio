"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Lightbulb, Users, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const strengths = [
  { icon: Lightbulb, title: "Problem Solving", description: "Analytical approach to complex challenges" },
  { icon: Users, title: "Team Player", description: "Collaborative mindset with strong communication" },
  { icon: Zap, title: "Quick Learner", description: "Adaptable to new technologies and frameworks" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a passionate software developer with a strong interest in building modern web applications.
              My journey in programming started with curiosity about how applications work and has grown into a commitment to creating efficient and user-friendly solutions.
              I also have knowledge of SQL and database management, and I enjoy working with data-driven applications while learning new technologies and improving my coding skills.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With a strong interest in full-stack development, I enjoy working on projects that challenge me to learn new concepts and improve my skills.
              I also have knowledge of SQL and database management, which helps me build data-driven applications.
              I believe in writing clean, maintainable code and following best practices in software development.
            </p>

            {/* Education Card */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-1">Education</h3>

                    {/* MCA */}
                    <p className="text-blue-300  text-lg">
                      A.P.S COLLEGE OF ENGINEERING, SOMANAHALLI
                    </p>
                    <p className="text-foreground font-medium">
                      MASTER OF COMPUTER APPLICATIONS (MCA)
                    </p>
                    <p className="text-green-400 ">
                      CGPA: 8.19
                    </p>

                    {/* BSC */}
                    <p className="text-blue-300  text-lg">
                      S.E.A COLLEGE OF SCIENCE, COMMERCE & ARTS, KRPURAM
                    </p>
                    <p className="text-foreground font-medium">
                      BACHELOR OF SCIENCE (BSC)
                    </p>
                    <p className="text-green-400 ">
                      CGPA: 7.93
                    </p>

                    {/* PUC */}
                    <p className="text-blue-300  text-lg">
                      SIVERS PRE UNIVERSITY COLLEGE, CHANDAPURA
                    </p>
                    <p className="text-foreground font-medium">
                      12TH STANDARD (PUC)
                    </p>
                    <p className="text-green-400 ">
                      Percentage: 74%
                    </p>

                    {/* SSLC */}
                    <p className="text-blue-300  text-lg">
                      ALVAS ENGLISH MEDIUM SCHOOL, DAKSHINA KANNADA
                    </p>
                    <p className="text-foreground font-medium">
                      10TH STANDARD (SSLC)
                    </p>
                    <p className="text-green-400 ">
                      Percentage: 80.19%
                    </p>

                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6">My Strengths</h3>

            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                          <strength.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{strength.title}</h4>
                          <p className="text-muted-foreground text-sm">
                            {strength.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { value: "3+", label: "Projects" },
                { value: "5+", label: "Technologies Basic" },
                { value: "MCA", label: "Degree" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-secondary/50">
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}