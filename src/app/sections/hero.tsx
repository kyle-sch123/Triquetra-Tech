export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen  flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 70%, transparent)",
        }}
      >
        {/* Large central circles - going from desc order*/}

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-140 h-140  md:w-205 md:h-205 lg:w-290 lg:h-290   rounded-full bg-green-700/10  wave-animate"
          style={{ animationDelay: "1.8s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-120 h-120  md:w-185 md:h-185 lg:w-250 lg:h-250  rounded-full bg-green-700/15   wave-animate"
          style={{ animationDelay: "1.6s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 h-100 md:w-160 md:h-160 lg:w-210 lg:h-210 rounded-full bg-green-700/20 wave-animate"
          style={{ animationDelay: "1.4s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-130 md:h-130 lg:w-170 lg:h-170 rounded-full bg-green-700/25  wave-animate"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-100 md:h-100 lg:w-130 lg:h-130  rounded-full bg-green-700/30  wave-animate"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-70 md:h-70 lg:w-90 lg:h-90 rounded-full  bg-green-700/35 wave-animate"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-40 md:h-40 lg:w-45 lg:h-45 border-2 border-green-700/40 rounded-full bg-green-600/15 wave-animate"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Header */}
        <h1 className="sm:text-white text-3xl md:text-3xl lg:text-[45px] font-medium font-roboto-mono mb-2.5 leading-relaxed ">
          Enable. Empower. Elevate.
        </h1>

        {/* Sub Heading */}
        <p className="text-white/58 text-lg lg:text-xl leading-relaxed mt-10 mb-12 max-w-3xl mx-auto font-roboto tracking-wide  lg:max-w-150 text-center">
          In an era defined by rapid change and evolving skill demands,
          effective training is more than a checkbox—it&apos;s the foundation of
          organizational excellence.
        </p>

        {/* Action Links */}
        <div className="flex flex-col items-center space-y-4">
          <div>
            <a
              href="mailto:gavin@triquetratech.co.za?subject=Let's Connect - Project Inquiry&body=Hi Gavin,%0D%0A%0D%0AI'd love to discuss a potential project with you.%0D%0A%0D%0ABest regards"
              className="text-white text-lg md:text-xl underline decoration-0 underline-offset-4 hover:text-gray-300 transition-colors duration-200 tracking-wider font-extralight"
            >
              Let&apos;s Connect
            </a>
          </div>

          <div>
            <a
              href="#business"
              className="text-white text-lg md:text-xl underline decoration-0 underline-offset-3 hover:text-gray-300 transition-colors duration-200 tracking-wider font-extralight"
            >
              Explore Our Business
            </a>
          </div>
        </div>
      </div>

      {/* Gradient overlay for better text readability 
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/85 via-transparent to-[#111111]/85 pointer-events-none"></div>*/}
    </section>
  );
};

export default Hero;
