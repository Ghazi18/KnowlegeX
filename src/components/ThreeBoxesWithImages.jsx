import kore from "../assets/KORE.png";
import scienceHub from "../assets/ScienceHub.png";
import spinsight from "../assets/Spinsight.png";

export default function ThreeBoxesWithImages() {
  const images = [kore, spinsight, scienceHub];

  return (
    <section className="w-full py-14 px-4 sm:px-10 md:px-16 bg-gray-50 dark:bg-gray-900 text-center">
      {/* العنوان والوصف */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Our Focus Areas
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          These pillars guide our work and reflect our commitment to excellence.
        </p>
      </div>

      {/* المستطيلات بالصور */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="bg-white border border-[#EA8316] rounded-lg p-6 shadow-sm flex items-center justify-center h-24"
          >
            <img
              src={src}
              alt={`Icon ${index + 1}`}
              className="h-24 w-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
