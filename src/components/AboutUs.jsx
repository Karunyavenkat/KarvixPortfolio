import {
//   ArrowRight,
  Sparkles,
  Target,
  Zap,
  Heart,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {

  const values = [
    {
      title: "User-Centered Approach",
      description:
        "Every decision is driven by user needs and validated through research.",
    },
    {
      title: "Innovation & Creativity",
      description:
        "We bring fresh perspectives and innovative solutions to every project.",
    },
    {
      title: "Attention to Detail",
      description:
        "Pixel-perfect designs that deliver seamless user experiences.",
    },
    {
      title: "Collaborative Spirit",
      description:
        "We work closely with you to bring your vision to life.",
    },
    {
      title: "Results-Driven",
      description:
        "Our designs are measurable and focused on achieving your business goals.",
    },
    {
      title: "Continuous Learning",
      description:
        "Staying ahead with the latest design trends and technologies.",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        py-28
        overflow-hidden
        bg-white
      "
    >

      {/* Background Orbs */}
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Hero Section */}
        <div className="text-center mb-20">

          {/* Badge */}
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
            <span>About Us</span>
          </div>

          {/* Heading */}
          <h1 className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-extrabold
            leading-tight
            mb-6
            bg-gradient-to-r
            from-gray-900
            to-gray-600
            bg-clip-text
            text-transparent
          ">
            Fresh Ideas, Exceptional Results
          </h1>

          {/* Description */}
          <div className="
  max-w-[950px]
  mx-auto
  text-center
  space-y-4
">

  <p className="
    text-lg
    md:text-xl
    text-gray-500
    leading-[1.9]
  ">
    We’re a{" "}
    <span className="text-purple-600 font-semibold">
      new and energetic team
    </span>{" "}
    passionate about creating digital experiences that matter.
    While we're fresh in the industry, our commitment to excellence
    and innovative approach ensures we deliver solutions that exceed
    expectations.
  </p>

  <p className="
    text-lg
    md:text-xl
    font-bold
    text-gray-800
    leading-[1.8]
  ">
    Don’t just take our word for it — review our work
    and see the quality for yourself.
  </p>

</div>
          {/* <p className="
            text-lg
            md:text-xl
            text-gray-500
            leading-relaxed
            max-w-[900px]
            mx-auto
            text-center
          ">
            We’re a{" "}
            <span className="text-purple-600 font-semibold">
              new and energetic team
            </span>{" "}
            passionate about creating digital experiences that matter.
            While we're fresh in the industry, our commitment to excellence
            and innovative approach ensures we deliver solutions that exceed
            expectations.

            <strong className="text-gray-800">
              {" "}
              Don’t just take our word for it — review our work and see
              the quality for yourself.
            </strong>
          </p> */}
        </div>

        {/* Cards */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mb-20
        ">

          {/* Card 1 */}
          <div className="
            bg-white
            rounded-3xl
            p-10
            shadow-md
            border
            border-black/5
            hover:-translate-y-2
            transition-all
            duration-300
          ">

            <div className="
              w-14
              h-14
              rounded-2xl
              flex
              items-center
              justify-center
              mb-6
              bg-gradient-to-r
              from-pink-500
              to-pink-700
            ">
              <Target size={28} color="white" />
            </div>

            <h3 className="
              text-2xl
              font-bold
              text-gray-900
              mb-3
            ">
              Fresh Perspective
            </h3>

            <p className="
              text-gray-500
              leading-relaxed
            ">
              Our fresh approach means we're not bound by outdated
              practices. We bring modern, innovative solutions tailored
              to today's digital landscape.
            </p>
          </div>

          {/* Card 2 */}
          <div className="
            bg-white
            rounded-3xl
            p-10
            shadow-md
            border
            border-black/5
            hover:-translate-y-2
            transition-all
            duration-300
          ">

            <div className="
              w-14
              h-14
              rounded-2xl
              flex
              items-center
              justify-center
              mb-6
              bg-gradient-to-r
              from-purple-500
              to-purple-700
            ">
              <Zap size={28} color="white" />
            </div>

            <h3 className="
              text-2xl
              font-bold
              text-gray-900
              mb-3
            ">
              Hungry for Success
            </h3>

            <p className="
              text-gray-500
              leading-relaxed
            ">
              We’re eager to prove ourselves, which means you get our
              absolute best effort, dedication, and attention on every
              single project.
            </p>
          </div>

          {/* Card 3 */}
          <div className="
            bg-white
            rounded-3xl
            p-10
            shadow-md
            border
            border-black/5
            hover:-translate-y-2
            transition-all
            duration-300
          ">

            <div className="
              w-14
              h-14
              rounded-2xl
              flex
              items-center
              justify-center
              mb-6
              bg-gradient-to-r
              from-blue-500
              to-blue-700
            ">
              <Heart size={28} color="white" />
            </div>

            <h3 className="
              text-2xl
              font-bold
              text-gray-900
              mb-3
            ">
              Passion-Driven
            </h3>

            <p className="
              text-gray-500
              leading-relaxed
            ">
              We genuinely love what we do. This passion translates into
              designs that are not just functional, but truly delightful
              to use.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="
          bg-white
          rounded-[32px]
          p-8
          md:p-16
          shadow-xl
          mb-20
        ">

          <h2 className="
            text-4xl
            font-extrabold
            text-center
            text-gray-900
            mb-12
          ">
            What Drives Us
          </h2>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          ">

            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-4"
              >

                <div className="
                  w-8
                  h-8
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-r
                  from-purple-600
                  to-pink-600
                  shrink-0
                ">
                  <CheckCircle2
                    size={18}
                    color="white"
                  />
                </div>

                <div>
                  <h4 className="
                    text-lg
                    font-semibold
                    text-gray-900
                    mb-2
                  ">
                    {value.title}
                  </h4>

                  <p className="
                    text-sm
                    text-gray-500
                    leading-relaxed
                  ">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="
          relative
          overflow-hidden
          bg-gray-900
          rounded-[32px]
          px-8
          py-20
          text-center
        "> */}

          {/* CTA Orbs */}
          {/* <div className="
            absolute
            -top-[100px]
            -right-[50px]
            w-[300px]
            h-[300px]
            rounded-full
            blur-[80px]
            opacity-30
            bg-purple-500
          "></div> */}

          {/* <div className="
            absolute
            -bottom-[80px]
            -left-[40px]
            w-[250px]
            h-[250px]
            rounded-full
            blur-[80px]
            opacity-30
            bg-pink-500
          "></div> */}

          {/* <div className="relative z-10">

            <h2 className="
              text-4xl
              md:text-5xl
              font-extrabold
              text-white/70
              mb-4
            ">
              Ready to See What We Can Do?
            </h2>

            <p className="
              text-lg
              text-white/70
              max-w-3xl
              mx-auto
              leading-relaxed
              mb-8
            ">
              Explore our portfolio and discover how we transform
              ideas into exceptional digital experiences.
            </p>

            <a
              href="#work"
              className="
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                rounded-xl
                bg-white
                text-gray-900
                font-semibold
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              View Our Work
              <ArrowRight size={20} />
            </a>

          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}