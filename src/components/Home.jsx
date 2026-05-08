import {
  ArrowRight,
  Sparkles,
  Palette,
  Users,
} from "lucide-react";

export default function HomePage() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Gradient Orbs */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[80px] opacity-60 bg-gradient-to-r from-purple-500/40 to-pink-500/30 animate-pulse"></div>

      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full blur-[80px] opacity-50 bg-gradient-to-r from-blue-500/30 to-purple-500/20 animate-pulse"></div>

      <div className="absolute top-[30%] right-[25%] w-[350px] h-[350px] rounded-full blur-[80px] opacity-50 bg-gradient-to-r from-pink-500/30 to-orange-400/20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex flex-col items-center text-center gap-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm">
            <Sparkles size={16} />
            <span>Available for new projects</span>
          </div>

          {/* Heading */}
          <h1 className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            leading-tight
            max-w-5xl
            bg-gradient-to-r
            from-gray-900
            to-gray-600
            bg-clip-text
            text-transparent
          ">
            Designing experiences that inspire & delight
          </h1>

          {/* Subheading */}
          <p className="
            text-gray-500
            text-lg
            md:text-xl
            leading-relaxed
            max-w-2xl
          ">
            A passionate UX designer crafting intuitive, user-centered digital
            products that solve real problems and create meaningful connections.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">

            <a
              href="#work"
              className="
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                rounded-xl
                bg-gray-900
                text-white
                font-semibold
                shadow-lg
                transition-all
                duration-300
                hover:bg-gray-800
                hover:-translate-y-1
              "
            >
              View My Work
              <ArrowRight size={20} />
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                rounded-xl
                border-2
                border-gray-200
                text-gray-900
                font-semibold
                transition-all
                duration-300
                hover:border-gray-900
                hover:-translate-y-1
              "
            >
              Get In Touch
            </a>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-12">

            {/* Stat 1 */}
            <div className="flex flex-col items-center gap-2">

              <div className="
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                bg-gradient-to-r
                from-pink-500
                to-pink-700
              ">
                <Palette size={24} color="white" />
              </div>

              <div className="text-3xl font-bold text-gray-900">
                50+
              </div>

              <div className="text-sm text-gray-500 font-medium">
                Projects Delivered
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center gap-2">

              <div className="
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                bg-gradient-to-r
                from-purple-500
                to-purple-700
              ">
                <Users size={24} color="white" />
              </div>

              <div className="text-3xl font-bold text-gray-900">
                30+
              </div>

              <div className="text-sm text-gray-500 font-medium">
                Happy Clients
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center gap-2">

              <div className="
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                bg-gradient-to-r
                from-blue-500
                to-blue-700
              ">
                <Sparkles size={24} color="white" />
              </div>

              <div className="text-3xl font-bold text-gray-900">
                5+
              </div>

              <div className="text-sm text-gray-500 font-medium">
                Years Experience
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}