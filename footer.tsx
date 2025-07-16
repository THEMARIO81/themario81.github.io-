export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-xl mb-2">Mario Bustillos</div>
            <p className="text-slate-400 text-sm">
              Computer Science & Finance Student at Boston College
            </p>
          </div>

          <div className="flex space-x-6 text-sm text-slate-400">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-white transition-colors"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-white transition-colors"
            >
              Experience
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© 2024 Mario Bustillos. All rights reserved. Built with passion and lots of coffee ☕</p>
        </div>
      </div>
    </footer>
  );
}
