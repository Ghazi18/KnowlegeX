import originality from "../assets/Originality.png";
import trust from "../assets/Trust.png";
import learn from "../assets/Learn.png";
import connect from "../assets/Connect.png";

export default function OurValue() {
  const items = [
    {
      number: "01",
      title: "Originality",
      image: originality,
    },
    {
      number: "02",
      title: "Trust",
      image: trust,
    },
    {
      number: "03",
      title: "Learn",
      image: learn,
    },
    {
      number: "04",
      title: "Connect",
      image: connect,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-10 md:px-16 py-14 bg-gray-100 dark:bg-gray-900">
      {/* العنوان */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Our Values
      </h2>

      {/* المستطيلات */}
      <div className="space-y-6 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-36 rounded-lg overflow-hidden shadow-lg"
          >
            {/* صورة الخلفية */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* التدرج الأزرق */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071C2F]/80 to-transparent z-10" />

            {/* المحتوى */}
            <div className="absolute inset-0 flex items-center px-6 z-20">
              <div className="text-left text-white flex flex-row gap-x-4">
                <div className="text-xl font-bold">{item.number}</div>
                <div className="text-2xl font-semibold">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
