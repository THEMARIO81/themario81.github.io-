import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Trading Algorithm",
      description:
        "A Python-based algorithmic trading system that uses machine learning to optimize portfolio allocation and execute trades based on market sentiment analysis.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Pandas", "Scikit-learn", "APIs"],
      date: "Fall 2023",
    },
    {
      title: "Personal Finance Tracker",
      description:
        "A full-stack web application that helps users track expenses, set budgets, and visualize spending patterns with interactive charts and financial insights.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      date: "Summer 2023",
    },
    {
      title: "Market Data Dashboard",
      description:
        "An interactive dashboard that aggregates and visualizes real-time market data, featuring customizable charts and technical analysis indicators.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["D3.js", "JavaScript", "REST API", "CSS3"],
      date: "Spring 2023",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, payment processing, inventory management, and admin dashboard functionality.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "Express", "PostgreSQL", "Stripe"],
      date: "Spring 2024",
    },
    {
      title: "Credit Risk Assessment",
      description:
        "A machine learning model that predicts credit default risk using historical financial data and advanced feature engineering techniques.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "TensorFlow", "Pandas", "Jupyter"],
      date: "Fall 2023",
    },
    {
      title: "Student Marketplace App",
      description:
        "A React Native mobile app that connects Boston College students for buying, selling, and trading textbooks and other academic resources.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["React Native", "Firebase", "Expo", "Redux"],
      date: "Winter 2024",
    },
  ];

  const tagColors = {
    Python: "bg-blue-100 text-blue-800",
    JavaScript: "bg-yellow-100 text-yellow-800",
    React: "bg-blue-100 text-blue-800",
    "Node.js": "bg-green-100 text-green-800",
    MongoDB: "bg-green-100 text-green-800",
    PostgreSQL: "bg-purple-100 text-purple-800",
    "D3.js": "bg-orange-100 text-orange-800",
    APIs: "bg-gray-100 text-gray-800",
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my technical
              skills and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-primary">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className={
                            tagColors[tag as keyof typeof tagColors] ||
                            "bg-gray-100 text-gray-800"
                          }
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{project.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent text-white hover:bg-blue-600">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
