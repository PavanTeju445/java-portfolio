"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download, FileText, Eye, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const resumeHighlights = [
  "Java Full Stack Development",
  "Database Management with MySQL",
  "Object-Oriented Programming",
  "Web Development (HTML, CSS, JS)",
  "Version Control with Git",
  "Problem Solving & Algorithms",
]

export function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="resume" className="py-20 md:py-32 bg-secondary/20 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download my resume to learn more about my education, skills, and experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Resume Preview Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-card/50 border-border/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[8.5/11] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                    <div className="absolute inset-4 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-4">
                      <FileText className="h-16 w-16 text-primary/40" />
                      <p className="text-muted-foreground text-sm">Resume Preview</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Resume Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Resume Highlights</h3>
                <div className="space-y-3">
                  {resumeHighlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button asChild size="lg" className="glow-primary flex-1">
                  <a href="/resume.pdf" download="Pavan_G_Resume.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-2 h-5 w-5" />
                    View Resume
                  </a>
                </Button>
              </motion.div>

              {/* Additional Note */}
              <p className="text-sm text-muted-foreground">
                Last updated: May 2026 • PDF format
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
