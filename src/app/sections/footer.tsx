import ArrowUpRight from "@/app/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import Link from "next/link";

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
  { title: "About", href: "/#about-us" },
  { title: "Projects", href: "/#projects" },
  { title: "Contact", href: "/#contact" },
];

const legalLinks = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip backdrop-blur-sm">
      {/* Gradient background effect */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="container relative mx-auto px-6 md:px-12 lg:px-24 py-16 text-center md:text-left">
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
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-green-400 transition-colors"
                  >
                    {link.title}
                  </Link>
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
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-green-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-wrap flex-col gap-2 justify-center items-center text-center md:items-start md:text-left  md:justify-start">
              {footerLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.title}
                  className="inline-flex items-center gap-1.5 group"
                >
                  <span className="text-white/60 hover:text-green-400 transition-colors">
                    {link.title}
                  </span>
                </Link>
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
