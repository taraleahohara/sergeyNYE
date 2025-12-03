"use client";

export default function FireHorseEnergy() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            The Fire Horse Energy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-lucky-red via-lucky-gold to-lucky-emerald mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Context Card */}
          <div className="bg-red-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🐎🔥</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                The Fire Horse Year
              </h3>
              <p className="text-gray-800 leading-relaxed text-lg">
                The Fire Horse year is especially potent because both the sign
                (Horse) and the year are associated with the Fire element,
                symbolizing passion, courage, and transformation. The natural
                energy of the Horse is amplified, leading to a year of
                dynamism and creativity.
              </p>
            </div>
          </div>

          {/* Dress Code Card */}
          <div className="bg-yellow-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">💃</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Dress Code
              </h3>
              <p className="text-gray-800 leading-relaxed text-lg">
                Everyone is encouraged to dress in the lucky colours to bring
                good energy into the new year. Blue is an unlucky colour, it is recommended to avoid wearing it.
              </p>
            </div>
          </div>
        </div>

        {/* Colors Grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Red Card */}
          <div className="bg-red-100 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">❤️</div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Red</h3>
            <p className="text-gray-800 leading-relaxed">
              Symbolizes <span className="font-semibold">success, passion, and courage</span> (Fire element).
            </p>
          </div>

          {/* Gold Card */}
          <div className="bg-yellow-100 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">✨</div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Gold</h3>
            <p className="text-gray-800 leading-relaxed">
              Attracts <span className="font-semibold">wealth and prosperity</span> (Earth/Metal energies).
            </p>
          </div>

          {/* Emerald Green Card */}
          <div className="bg-green-100 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🍀</div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
              Emerald Green
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Represents <span className="font-semibold">growth, renewal, and stability</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

