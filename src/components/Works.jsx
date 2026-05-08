import { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function WorkPage() {

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Mobile Apps",
    "Web Design",
    "Branding",
    "UI/UX",
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Revolution",
      category: "Web Design",
      description:
        "Modern shopping experience with seamless checkout flow",
      tags: ["UI/UX", "Figma", "React"],
      gradient:
        "from-indigo-500 to-purple-700",
    },

    {
      id: 2,
      title: "Fitness Tracking App",
      category: "Mobile Apps",
      description:
        "Personalized workout plans and progress tracking",
      tags: ["Mobile", "iOS", "Android"],
      gradient:
        "from-pink-400 to-red-500",
    },

    {
      id: 3,
      title: "Sustainable Brand Identity",
      category: "Branding",
      description:
        "Eco-friendly brand design for green initiatives",
      tags: ["Branding", "Logo", "Guidelines"],
      gradient:
        "from-sky-400 to-cyan-400",
    },

    {
      id: 4,
      title: "Banking Dashboard",
      category: "UI/UX",
      description:
        "Intuitive financial management interface",
      tags: ["Dashboard", "Finance", "UI"],
      gradient:
        "from-green-400 to-teal-300",
    },

    {
      id: 5,
      title: "Food Delivery Platform",
      category: "Mobile Apps",
      description:
        "Fast and delightful food ordering experience",
      tags: ["Mobile", "UX", "Prototype"],
      gradient:
        "from-pink-500 to-yellow-300",
    },

    {
      id: 6,
      title: "SaaS Product Website",
      category: "Web Design",
      description:
        "Clean, conversion-focused landing page",
      tags: ["Web", "SaaS", "Marketing"],
      gradient:
        "from-cyan-400 to-indigo-950",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (p) => p.category === activeCategory
        );

  return (
    <section
      id="work"
      className="
        relative
        pt-0
        pb-24
        overflow-hidden
        bg-white
      "
    >

      {/* Gradient Orbs */}
      <div className="
        absolute
        top-[20%]
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        rounded-full
        blur-[80px]
        opacity-60
        bg-gradient-to-r
        from-purple-500/40
        to-pink-500/30
        animate-pulse
      "></div>

      <div className="
        absolute
        top-[40%]
        left-[30%]
        w-[400px]
        h-[400px]
        rounded-full
        blur-[80px]
        opacity-50
        bg-gradient-to-r
        from-blue-500/30
        to-purple-500/20
        animate-pulse
      "></div>

      <div className="
        absolute
        top-[30%]
        right-[25%]
        w-[350px]
        h-[350px]
        rounded-full
        blur-[80px]
        opacity-50
        bg-gradient-to-r
        from-pink-500/30
        to-orange-400/20
        animate-pulse
      "></div>

      <div className="
        max-w-7xl
        mx-auto
        px-6
        relative
        z-10
      ">

        {/* Header */}
        <div className="
          text-center
          mb-16
        ">

          <div className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            bg-purple-100
            text-purple-700
            text-sm
            font-medium
            mb-6
          ">
            <Sparkles size={16} />
            <span>Our Work</span>
          </div>

          <h1 className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-extrabold
            leading-tight
            mb-4
            bg-gradient-to-r
            from-gray-900
            to-gray-600
            bg-clip-text
            text-transparent
          ">
            Featured Projects
          </h1>

          <p className="
            text-lg
            md:text-xl
            text-gray-500
            leading-[1.9]
          ">
            Explore our latest creations and
            discover how we transform ideas
            into stunning digital experiences.
          </p>
        </div>

        {/* Filters */}
        <div className="
          flex
          flex-wrap
          justify-center
          gap-3
          mb-16
        ">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`
                px-6
                py-3
                rounded-xl
                text-sm
                font-medium
                transition-all
                duration-300
                shadow-sm

                ${
                  activeCategory === category
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-white text-gray-500 hover:bg-gray-100"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

          {filteredProjects.map((project) => (

            <div
              key={project.id}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-3
              "
            >

              {/* Floating Icon */}
              <div className="
                absolute
                top-4
                right-4
                z-20
                w-10
                h-10
                rounded-xl
                bg-white/90
                flex
                items-center
                justify-center
                opacity-0
                translate-x-2
                -translate-y-2
                group-hover:opacity-100
                group-hover:translate-x-0
                group-hover:translate-y-0
                transition-all
                duration-300
              ">
                <ArrowUpRight
                  size={20}
                  className="text-gray-900"
                />
              </div>

              {/* Gradient Image */}
              <div className="
                relative
                h-[260px]
                overflow-hidden
              ">

                <div
                  className={`
                    w-full
                    h-full
                    bg-gradient-to-r
                    ${project.gradient}
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  `}
                ></div>

                {/* Overlay */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-transparent
                  to-black/70
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  flex
                  items-end
                  p-6
                ">

                  <div className="
                    flex
                    items-center
                    gap-2
                    text-white
                    font-semibold
                  ">
                    <span>View Project</span>

                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <span className="
                  inline-block
                  px-3
                  py-1
                  rounded-md
                  bg-purple-100
                  text-purple-700
                  text-xs
                  font-semibold
                  mb-4
                ">
                  {project.category}
                </span>

                <h3 className="
                  text-2xl
                  font-bold
                  text-gray-900
                  mb-3
                ">
                  {project.title}
                </h3>

                <p className="
                  text-gray-500
                  text-sm
                  leading-relaxed
                  mb-5
                ">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="
                  flex
                  flex-wrap
                  gap-2
                ">

                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="
                        px-3
                        py-1
                        rounded-md
                        bg-gray-100
                        text-gray-600
                        text-xs
                        font-medium
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}