import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import Boston_college_campus from "@assets/Boston college campus.jpg";

export default function AboutSection() {
  const programmingSkills = ["Python", "Java", "SQL"];
  const analyticsTools = ["Microsoft Excel", "Tableau", "Google Sheets", "Google Data Studio"];
  const csSkills = ["Algorithms", "Data Structures", "OOP", "API Integration"];
  const financeSkills = ["Financial Modeling", "Budget Tracking", "Risk Analysis", "Market Research"];
  const languages = ["English", "Spanish"];
  const professionalSkills = ["Communication", "Leadership", "Problem-Solving", "Time Management"];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Bridging Technology & Finance
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a sophomore at Boston College pursuing a Computer Science major
                with a Finance minor. My passion lies in leveraging technology
                to solve complex business problems and create meaningful impact
                in the financial sector.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Through coursework and personal projects, I've developed
                expertise in full-stack development, data analysis, and
                financial modeling. I'm particularly interested in fintech
                innovations and algorithmic trading systems.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-semibold text-primary mb-4">
                  Skills & Expertise
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-slate-700 mb-2">Programming Languages</h5>
                    <div className="flex flex-wrap gap-2">
                      {programmingSkills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 bg-blue-100 text-blue-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-700 mb-2">Analytics & Tools</h5>
                    <div className="flex flex-wrap gap-2">
                      {analyticsTools.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 bg-green-100 text-green-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-700 mb-2">CS Concepts</h5>
                    <div className="flex flex-wrap gap-2">
                      {csSkills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 bg-purple-100 text-purple-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-slate-700 mb-2">Finance Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {financeSkills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 bg-orange-100 text-orange-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-slate-700 mb-2">Languages</h5>
                      <div className="flex flex-wrap gap-2">
                        {languages.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="px-3 py-1 bg-yellow-100 text-yellow-800"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-slate-700 mb-2">Professional</h5>
                      <div className="flex flex-wrap gap-2">
                        {professionalSkills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="px-3 py-1 bg-slate-100 text-slate-800"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src={Boston_college_campus}
                alt="Boston College Campus"
                className="rounded-xl shadow-lg w-full h-auto"
              />

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    Education
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold">Boston College</div>
                      <div className="text-slate-600">
                        Bachelor of Science in Computer Science
                      </div>
                      <div className="text-slate-500 text-sm">
                        Minor in Finance | Expected 2028
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="text-sm text-slate-600">
                        <strong>Relevant Coursework:</strong> Computer Science I, 
                        Computer Organization, Financial Accounting, Economics, 
                        Statistics, Calculus I
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
