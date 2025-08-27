import Slider from "react-slick";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function WorkTeam() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const teamMembers = [
    { name: "John Doe",    position: "Lead Developer",   description: "Responsible for leading the frontend and backend teams Responsible for leading the frontend and backend teams." },
    { name: "Sarah Ahmed", position: "UI/UX Designer",   description: "Designs intuitive user experiences and clean interfaces. Responsible for leading the frontend and backend teams Responsible for leading the frontend and backend teams" },
    { name: "Ali Hassan",  position: "Project Manager",  description: "Ensures timely delivery and coordination across teams Responsible for leading the frontend and backend teams Responsible for leading the frontend and backend teams." },
    { name: "Fatima Noor", position: "QA Engineer",      description: "Guarantees quality through rigorous testing processes Responsible for leading the frontend and backend teams." },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 450,
    slidesToShow: 5,             // Desktop
    slidesToScroll: 1,
    swipeToSlide: true,
    cssEase: "ease-out",
    rtl: isRTL,
    // نحافظ على ارتفاع موحّد؛ لذا لا نحتاج adaptiveHeight
    responsive: [
      // Laptop/Tablet
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      // Mobile
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,           // لمحة من البطاقة التالية
          centerPadding: "18px",      // غنّجها حسب تصميمك (16–24px)
          dots: true,
        },
      },
    ],
  };

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="py-16 px-4 sm:px-10 md:px-16 bg-gray-50 "
    >
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-gray-800  ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {t("workTeam.title", "Work Team")}
      </h2>

      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="px-2 sm:px-3 h-full">
            <div
              className={`
                bg-white  rounded-lg shadow-md
                p-5 sm:p-6
                flex flex-col items-center
                h-[280px] sm:h-[300px] md:h-[340px] lg:h-[360px]  /* ارتفاع موحّد عبر المقاسات */
              `}
            >
              <FaUserCircle className="text-5xl sm:text-6xl text-gray-400 mb-3 sm:mb-4 shrink-0" />

              <h3 className="text-base sm:text-lg font-bold text-gray-900  text-center">
                {member.name}
              </h3>

              <p className="text-xs sm:text-sm text-orange-600 font-medium mt-1 text-center">
                {member.position}
              </p>

              {/* الوصف: محاذاة حسب اللغة + قصّ السطور */}
              <p
                className={`
                  text-xs sm:text-sm text-gray-600 d mt-3
                  ${isRTL ? "text-right" : "text-left"}
                  line-clamp-4 md:line-clamp-5
                `}
              >
                {member.description}
              </p>

              {/* مساحة مرنة لضبط تموضع المحتوى داخل ارتفاع ثابت */}
              <div className="mt-auto" />
            </div>
          </div>
        ))}
      </Slider>

      {/* يصلّح تمدّد عناصر slick حتى تلتزم بالارتفاع */}
      <style>{`
        .slick-slide > div { height: 100%; }
        .slick-dots li button:before { font-size: 10px; }
        @media (min-width: 768px) {
          .slick-dots li button:before { font-size: 12px; }
        }
      `}</style>
    </section>
  );
}
