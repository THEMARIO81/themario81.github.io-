import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Tatari Systems",
      location: "Boston, MA (Hybrid)",
      position: "Strategic Finance Intern",
      duration: "Feb 2025 - Present",
      achievements: [
        "Automated financial reporting using Python and Excel, reducing manual reporting time by 60%",
        "Developed real-time crypto dashboards using API-sourced market data to support VC decision-making on high-volatility assets",
        "Maintained audit-ready financial documentation, managed budgets, and supported strategic planning for $500K+ in early infrastructure investments in Ethiopia",
        "Produced investor materials and market research that contributed to brand positioning during early-stage VC fundraising"
      ],
      type: "work"
    },
    {
      company: "J.P. Morgan (Forage)",
      location: "Virtual Experience Programs",
      position: "Investment Banking & Software Engineering Simulations",
      duration: "Nov 2024 - Feb 2025",
      achievements: [
        "Completed Investment Banking simulation: Built DCF valuation, performed industry research, and drafted pitch materials for a sample M&A transaction (Completed Nov 2024)",
        "Completed Software Engineering simulation: Designed secure payment feature in Java and tested API logic for transaction processing (Completed Feb 2025)"
      ],
      type: "virtual"
    },
    {
      company: "CSOC",
      location: "Austin, TX",
      position: "Student Intern",
      duration: "May 2024 – August 2024",
      achievements: [
        "Led 8+ weekly Bible studies and large-scale community events to engage over 50+ students",
        "Strengthened communication and leadership through regular public speaking and logistics coordination across campus"
      ],
      type: "leadership"
    },
    {
      company: "The Home Depot",
      location: "Austin, TX",
      position: "Department Lead",
      duration: "Feb 2022 – June 2024",
      achievements: [
        "Managed daily operations and a team of 10+ associates, increasing team workflow efficiency",
        "Handled cross-department coordination and resolved high-priority customer escalations",
        "Trained new hires on store policy, safety, and service expectations"
      ],
      type: "work"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-blue-100 text-blue-800";
      case "virtual":
        return "bg-purple-100 text-purple-800";
      case "leadership":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "work":
        return "Professional";
      case "virtual":
        return "Virtual Program";
      case "leadership":
        return "Leadership";
      default:
        return "Experience";
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Work & Leadership Experience
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Building practical experience through internships, leadership roles, and professional development programs
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-slate-800">
                            {exp.position}
                          </h3>
                          <Badge className={getTypeColor(exp.type)}>
                            {getTypeLabel(exp.type)}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="h-5 w-5 text-slate-500" />
                          <span className="text-lg font-semibold text-accent">
                            {exp.company}
                          </span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-slate-700 leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}