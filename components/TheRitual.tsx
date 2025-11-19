"use client";

import Image from "next/image";

export default function TheRitual() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            The Ritual: Bring a Horse 🐴
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed text-center mb-12">
            This year, everyone is encouraged to bring a statue or figurine of a
            horse to usher in all their hopes and wishes into the new year. All
            horses will be placed on a table and adorned with your wishes for
            2026. 🔮
          </p>

          {/* Image Placeholders - Polaroid Style */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square bg-white border-8 border-white shadow-lg mb-4">
                <Image
                  src="https://placehold.co/400x400?text=Horse+Example"
                  alt="Horse Example 1"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Example 1
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square bg-white border-8 border-white shadow-lg mb-4 rotate-2">
                <Image
                  src="https://placehold.co/400x400?text=Horse+Example"
                  alt="Horse Example 2"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Example 2
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square bg-white border-8 border-white shadow-lg mb-4">
                <Image
                  src="https://placehold.co/400x400?text=Horse+Example"
                  alt="Horse Example 3"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Example 3
              </span>
            </div>
          </div>

          {/* Secondary RSVP Button */}
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/1ux2z83abNjUl_wvzkCOsM0P4eqpf_qf0wA6I4MqIIxE/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full font-semibold text-white bg-lucky-red hover:bg-lucky-red/90 hover:shadow-xl hover:shadow-lucky-red/30 transform hover:scale-105 transition-all duration-300"
            >
              RSVP Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

