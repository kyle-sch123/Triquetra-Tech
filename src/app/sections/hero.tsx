import GrainImage from "@/app/assets/images/grain.jpg";
import ArrowUpRightIcon from "@/app/assets/icons/arrow-up-right.svg";

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
        {/* Large central circles */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-290 h-290  md:w-200 md:h-200 lg:w-290 lg:h-290  border  border-white rounded-full bg-green-500  opacity-6 wave-animate"
          style={{ animationDelay: "1.4s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-250 h-250  md:w-200 md:h-200 lg:w-250 lg:h-250  border  border-white rounded-full bg-green-500  opacity-10 wave-animate"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-210 h-210 border border-white rounded-full bg-green-600 opacity-16 wave-animate"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-170 h-170 border border-green-900 rounded-full bg-green-700 opacity-20 wave-animate"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-130 h-130 border-2 border-green-800 rounded-full bg-green-800 opacity-26 wave-animate"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-70 md:h-70 lg:w-90 lg:h-90 border-2 border-green-700 rounded-full  bg-green-900 opacity-28 wave-animate"
          style={{ animationDelay: "0.4s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 h-30 md:w-40 md:h-40 lg:w-45 lg:h-45 border-2 border-green-600/80 rounded-full bg-green-950 opacity-30 wave-animate"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Header */}
        <h1 className="text-2xl md:text-3xl lg:text-[45px] font-medium font-roboto-mono mb-2.5 ">
          Enable. Empower. Elevate.
        </h1>

        {/* Sub Heading */}
        <p className="text-white/58  lg:text-xl leading-relaxed mt-10 mb-12 max-w-3xl mx-auto font-roboto tracking-wide  lg:max-w-150 text-center">
          In an era defined by rapid change and evolving skill demands,
          effective training is more than a checkbox—it's the foundation of
          organizational excellence.
        </p>

        {/* Action Links */}
        <div className="flex flex-col items-center space-y-4">
          <div>
            <a
              href="mailto:gavin@triquetratech.co.za?subject=Let's Connect - Project Inquiry&body=Hi Gavin,%0D%0A%0D%0AI'd love to discuss a potential project with you.%0D%0A%0D%0ABest regards"
              className="text-white text-lg md:text-xl underline decoration-0 underline-offset-4 hover:text-gray-300 transition-colors duration-200 tracking-wider font-extralight"
            >
              Let's Connect
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
