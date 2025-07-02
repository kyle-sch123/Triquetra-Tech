import GrainImage from "@/app/assets/images/grain.jpg";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-24" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#111111] text-gray-900 py-8 px-8 md:py-10 md:px-12 rounded-md border-2 border-white  relative overflow-hidden">
          {/* Grain texture background */}
          <div className="absolute inset-0 opacity-5 -z-10">
            <Image src={GrainImage} alt="" layout="fill" objectFit="cover" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
            <div className="md:max-w-xl">
              <h2 className="text-xl md:text-2xl text-white/90 font-roboto font-semibold">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm  md:text-base mt-2 md:mt-3 text-white/90 font-roboto">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="mailto:gavin@triquetratech.co.za?subject=Let's Connect - Project Inquiry&body=Hi Gavin,%0D%0A%0D%0AI'd love to discuss a potential project with you.%0D%0A%0D%0ABest regards"
                className="inline-flex items-center gap-2 bg-white text-[#111111] px-6 h-12 rounded-md border border-gray-900 hover:bg-[#111111] hover:text-white transition-colors hover:border-white/90"
              >
                <span className="font-semibold">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
