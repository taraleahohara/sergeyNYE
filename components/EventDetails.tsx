"use client";

export default function EventDetails() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: The Details */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              The Details
            </h2>
            <div className="border-l-4 border-lucky-gold pl-6 sm:pl-8">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-3xl sm:text-4xl flex-shrink-0">⏰</span>
                  <div>
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium">
                      Time: <span className="font-normal">6:00 PM until Late</span>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl sm:text-4xl flex-shrink-0">📍</span>
                  <div>
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium">
                      Location: <span className="font-normal">120 Homewood Avenue, Unit 3305</span>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl sm:text-4xl flex-shrink-0">🔑</span>
                  <div>
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium">
                      Access: <span className="font-normal">Buzzer 3416</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Google Map */}
          <div className="w-full">
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.0985613588805!2d-79.37887398819566!3d43.66691995142281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb4d92ee2beb%3A0x3062a6ca796e2c66!2s120%20Homewood%20Ave%2C%20Toronto%2C%20ON%20M4Y%202J3!5e0!3m2!1sen!2sca!4v1764763638983!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

