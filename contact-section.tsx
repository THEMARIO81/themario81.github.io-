import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, FileText, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-primary text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities,
              collaborating on projects, or just having a conversation about
              technology and finance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent p-3 rounded-lg">
                      <Mail className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <a
                        href="mailto:mario.bustillos@bc.edu"
                        className="text-slate-300 hover:text-white transition-colors"
                      >bustill@bc.edu</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-accent p-3 rounded-lg">
                      <Phone className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <a
                        href="tel:+16175551234"
                        className="text-slate-300 hover:text-white transition-colors"
                      >(737) 326-4371 </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-accent p-3 rounded-lg">
                      <MapPin className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-slate-300">Boston, MA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-slate-700 hover:bg-accent text-[#ffffff]"
                    onClick={() => window.open('https://www.linkedin.com/in/mario-bustillos512/', '_blank')}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  
                  
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-slate-700 hover:bg-accent text-[#ffffff]"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                    title="View Resume"
                  >
                    <FileText className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        First Name
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder-slate-300"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Last Name
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder-slate-300"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-slate-300"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-slate-300"
                      placeholder="Let's discuss opportunities"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder-slate-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-blue-600 text-white"
                    size="lg"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
