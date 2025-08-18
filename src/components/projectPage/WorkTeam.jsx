import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function WorkTeam() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const cardRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  const teamMembers = [
    {
      name: "John Doe",
      position: "Lead Developer",
      description:
        "Responsible for leading the frontend and backend teams Responsible for leading the frontend and backend teams.",
    },
    {
      name: "Sarah Ahmed",
      position: "UI/UX Designer",
      description:
        "Designs intuitive user experiences and clean interfaces. Responsible for leading the frontend and backend teams Responsible for leading the frontend and backend teams",
    },
    {
      name: "Ali Hassan",
      position: "Project Manager",
      description:
        "Ensures timely delivery and coordination across teams Responsible for leading the frontend and backend teams Responsible for leading the frontend and backend teams.",
    },
    {
      name: "Fatima Noor",
      position: "QA Engineer",
      description:
        "Guarantees quality through rigorous testing processes Responsible for leading the frontend and backend teams.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5, // ديسكتوب
    slidesToScroll: 1,
    rtl: isRTL,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // حساب أقصى ارتفاع
  const calculateHeights = () => {
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map((el) => (el ? el.offsetHeight : 0));
      setMaxHeight(Math.max(...heights));
    }
  };

  useEffect(() => {
    calculateHeights();

    // إعادة الحساب عند تغيير حجم الشاشة
    window.addEventListener("resize", calculateHeights);
    return () => window.removeEventListener("resize", calculateHeights);
  }, [i18n.language, teamMembers]);

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="py-16 px-4 sm:px-10 md:px-16 bg-gray-50 dark:bg-gray-900"
    >
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-10 text-gray-800 dark:text-white ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {t("workTeam.title", "Work Team")}
      </h2>

      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="px-3">
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-start"
            >
              <FaUserCircle className="text-6xl text-gray-400 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-orange-600 font-medium mt-1">
                {member.position}
              </p>
              <p
                className={`text-sm text-gray-600 dark:text-gray-300 mt-3 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
