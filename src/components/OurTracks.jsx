export default function OurTracks() {
  const categories = [
    {
      title: "Research Institutions and Universities",
      icon: "🏛️",
      tracks: ["Enablement Track", "Collaboration Track", "Advisory Track"],
    },
    {
      title: "Corporate",
      icon: "🏢",
      tracks: ["Enablement Track", "Collaboration Track", "Advisory Track"],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-10 md:px-16 bg-white dark:bg-gray-900">
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:mb-8  text-gray-900 dark:text-white">
        Our Tracks
      </h2>

      <div className="flex flex-col sm:gap-16 max-w-7xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-4 items-center gap-8"
          >
            {/* القسم الرئيسي */}
            <div className="bg-[#071C2F] text-white rounded-lg shadow p-6 flex flex-col items-center border-l-4 border-0 border-[#EA8316] justify-center text-center h-48 w-full min-w-[200px] mt-16">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <div className="font-semibold text-center">{cat.title}</div>
            </div>

            {/* المسارات */}
            <div className="md:col-span-3 relative flex flex-col items-center gap-6 h-full w-full">
              {/* الخط المتصل مع الدوائر - مخفي على الجوال */}
              <div className="hidden md:flex absolute -top-4 left-0 right-0 items-center justify-between px-4 z-10">
                {cat.tracks.map((_, i) => (
                  <div key={i} className="relative flex-1 flex justify-center">
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#EA8316] -z-10" />
                    <div className="w-14 h-14 rounded-full bg-[#071C2F] text-white flex items-center justify-center text-base font-bold shadow-md">
                      {`0${i + 1}`}
                    </div>
                  </div>
                ))}
              </div>

              {/* الكروت */}
              <div className="flex flex-col md:flex-row justify-between gap-4 md:mt-16 w-full z-10">
                {cat.tracks.map((track, i) => (
                  <div
                    key={i}
                    className="bg-[#EA8316] text-white text-center p-6 rounded-lg flex-1 min-w-[200px] h-48 flex items-center justify-center"
                  >
                    {track}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
