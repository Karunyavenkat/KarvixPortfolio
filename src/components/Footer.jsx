import {
  Mail,
  Heart,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    // { name: "Process", href: "#process" },
  ];

  const services = [
    { name: "UX Research", href: "#services" },
    { name: "UI Design", href: "#services" },
    { name: "Prototyping", href: "#services" },
    { name: "User Testing", href: "#services" },
  ];

  const socialIcons = [
    { icon: FaLinkedin, href: "#" },
    { icon: FaGithub, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: Mail, href: "mailto:hello@alexmorgan.com" },
  ];

  return (
    <footer id = "contact" className="relative bg-slate-950 text-white overflow-hidden">

      {/* Top Gradient Line */}
      <div className="
        absolute
        top-0
        left-0
        w-full
        h-[1px]
        bg-gradient-to-r
        from-transparent
        via-purple-500
        to-transparent
      "></div>

      {/* Background Orbs */}
      <div className="
        absolute
        -top-[200px]
        left-[10%]
        w-[400px]
        h-[400px]
        rounded-full
        blur-[100px]
        opacity-30
        bg-purple-500
      "></div>

      <div className="
        absolute
        -bottom-[150px]
        right-[15%]
        w-[350px]
        h-[350px]
        rounded-full
        blur-[100px]
        opacity-20
        bg-pink-500
      "></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* Top Section */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-12
          pb-12
          border-b
          border-white/10
        ">

          {/* Brand */}
          <div className="flex flex-col gap-4">

            <div>
                <h2 className="
                    text-2xl
                    font-bold
                    text-white
                    ">
                    <span className="text-white">Kar</span>
                    <span className="text-gray-400">vix</span>
                </h2>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-[300px]">
              Creating beautiful, user-centered digital experiences
              that make a difference.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">

              {socialIcons.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-white/10
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      hover:bg-purple-500/30
                      hover:-translate-y-1
                    "
                  >
                    <Icon size={20} />
                  </a>
                );
              })}

            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">

            <h3 className="text-base font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    text-sm
                    text-white/70
                    hover:text-white
                    transition
                  "
                >
                  {link.name}
                </a>
              ))}

            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">

            <h3 className="text-base font-semibold">
              Services
            </h3>

            <div className="flex flex-col gap-3">

              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="
                    text-sm
                    text-white/70
                    hover:text-white
                    transition
                  "
                >
                  {service.name}
                </a>
              ))}

            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">

            <h3 className="text-base font-semibold">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/70">

              <a
                href="mailto:hello@alexmorgan.com"
                className="hover:text-white transition"
              >
                hello@alexmorgan.com
              </a>

              <a
                href="tel:+1234567890"
                className="hover:text-white transition"
              >
                +1 (234) 567-890
              </a>

              <span>
                San Francisco, CA
              </span>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          pt-8
        ">

          <div className="
            flex
            items-center
            gap-2
            text-sm
            text-white/60
          ">
            <span>© 2026 Alex Morgan. Made with</span>

            <Heart
              size={16}
              fill="currentColor"
            />
          </div>

          <div className="
            flex
            flex-wrap
            gap-6
            text-sm
            text-white/60
          ">

            <a
              href="#privacy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="hover:text-white transition"
            >
              Terms of Service
            </a>

            <a
              href="#cookies"
              className="hover:text-white transition"
            >
              Cookie Policy
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}