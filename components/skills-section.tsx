"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: "UI/UX DESIGN (Photo shop,Adobe", level: 70, category: "Backend" },
  { name: "SQL Database running and CRUD", level: 80, category: "Database" },
  { name: "MySQL Basics Operating", level: 50, category: "Database" },
  { name: "HTML", level: 60, category: "Frontend" },
  { name: "CSS", level: 60, category: "Frontend" },
  { name: "Word,excel,PPT(Intermediate)", level: 75, category: "Tool" },
  { name: "GitHub basic", level: 75, category: "Tools" },
  { name: "OOPs Concepts", level: 45, category: "Concepts" },
  { name: "CRUD Operations", level: 90, category: "Backend" },
   { name: "CANVA", level: 90, category: "Design Tools" },
 
]


const categories = ["All", "Backend", "Frontend", "Database", "Tools", "Design Tools","Concepts"]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/20 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels in various technologies.
          </p>
        </motion.div>

        {/* Category Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {skill.category}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Always eager to learn new technologies and expand my skill set.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
