"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink, Database, Layout, Code } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Hospital Management System",
    description:
      "A comprehensive hospital management solution with patient registration, doctor management, appointment booking, and complete CRUD operations for efficient healthcare administration.",
    image: "/images/hospital-project.jpg",
    techStack: ["Java", "MySQL", "JDBC", "Swing"],
    features: [
      "Patient Registration & Management",
      "Doctor Profile Management",
      "Appointment Booking System",
      "Complete CRUD Operations",
    ],
    icon: Database,
    githubUrl: "https://github.com/PavanTeju445/Hospital-Management-System",
    liveUrl: null,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my projects, skills, and experience as a Java Full Stack Developer. Built with modern web technologies.",
    image: "/images/portfolio-project.jpg",
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    features: [
      "Responsive Design",
      "Smooth Animations",
      "Dark Theme",
      "Contact Form Integration",
    ],
    icon: Layout,
    githubUrl: "https://github.com/pavang/portfolio",
    liveUrl: "#",
  },
  {
    title: "Student Grade Calculator",
    description:
      "A Java-based application for calculating and managing student grades with features like grade averaging, GPA calculation, and report generation.",
    image: "/images/grade-project.jpg",
    techStack: ["Java", "JavaFX", "File I/O"],
    features: [
      "Grade Calculation",
      "GPA Computation",
      "Report Generation",
      "Data Persistence",
    ],
    icon: Code,
    githubUrl: "https://github.com/pavang/grade-calculator",
    liveUrl: null,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in software development and problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group h-full flex flex-col overflow-hidden">
                {/* Project Image/Icon Header */}
                <CardHeader className="p-0">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                    <project.icon className="h-16 w-16 text-primary/60 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 gap-3">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild size="sm" className="flex-1">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com/PavanTeju445"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
