import Marquee from "react-fast-marquee";
import kingFaisalUni from "../assets/kingFaisalUni.svg";
import sultanUni from "../assets/sultanUni.svg";
import indusrty from "../assets/indusrty.svg";

export default function StrategicPartnerships() {
  const logos = [
    {
      src: kingFaisalUni,
      alt: "Ministry of Industry and Mineral Resources",
    },
    {
      src: sultanUni,
      alt: "King Faisal University",
    },
    {
      src: indusrty,
      alt: "Prince Sultan University",
    },
    // أضف المزيد هنا إذا أردت
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Strategic Partnerships:{" "}
        <span className="text-[#071C2F]">Accelerating Innovation Together</span>
      </h2>

      <div className="overflow-hidden">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className="flex items-center"
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center mx-24"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
