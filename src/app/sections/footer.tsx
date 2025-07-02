import ArrowUpRight from "@/app/assets/icons/arrow-up-right.svg";
import Image from "next/image";

const footerLinks = [
  {
    title: "X",
    href: "#",
  },
  {
    title: "TikTok",
    href: "#",
  },
  {
    title: "LinkedIn",
    href: "#",
  },
];

const companyLinks = [
  { title: "About", href: "#" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const legalLinks = [
  { title: "Privacy Policy", href: "#" },
  { title: "Terms of Service", href: "#" },
  { title: "Cookies", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip backdrop-blur-sm">
      {/* Gradient background effect */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="container relative mx-auto px-6 md:px-12 lg:px-24 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Triquetra Tech</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Empowering organizations with innovative e-learning solutions for
              a safer, more productive workforce.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-green-400 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-green-400 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-wrap gap-4">
              {footerLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.title}
                  className="inline-flex items-center gap-1.5 group"
                >
                  <span className="font-medium text-white/80 group-hover:text-green-400 transition-colors">
                    {link.title}
                  </span>
                  <Image
                    src={ArrowUpRight}
                    alt=""
                    className="w-3 h-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()} Triquetra Tech. All rights
            reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/40">Made with</span>
            <span className="text-green-400">Next.js</span>
            <span className="text-white/40">and</span>
            <span className="text-green-400">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
