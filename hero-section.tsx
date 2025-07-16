import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import bcBackground from "@assets/bs-computer-science-software-dev-scaled.jpg_1752690138526.webp";

import tempImagegdnalh from "@assets/tempImagegdnalh.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bcBackground})`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-slate-900/80"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden">
            <img
              src={tempImagegdnalh}
              alt="Alex Chen Professional Headshot"
              className="w-full h-full object-cover ml-[0px] mr-[0px] mt-[2px] mb-[2px]"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-[#ffffff]">Mario Bustillos</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Sophomore Computer Science major at Boston College with a Finance minor. I
            build innovative solutions at the intersection of technology and
            business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 text-lg font-semibold"
            >
              Learn About Me
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-2 border-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg font-semibold text-[#000000]"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
}
