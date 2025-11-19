"use client";

export default function Hero() {
  return (
    <section className="relative h-auto bg-[#F9F9F7] pt-[calc(3.5rem+3rem)] pb-12 sm:pt-[calc(3.5rem+4rem)] sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading with Highlight Block */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 leading-tight">
          <span className="inline-block bg-[#C62828] text-white px-3 py-0.5 sm:px-4 sm:py-1 rounded-lg sm:rounded-xl">
            Fire Horse
          </span>{" "}
          <span className="font-serif">New Year&apos;s Eve Celebration</span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-5 max-w-2xl mx-auto font-sans">
          Sergey warmly invites you to his annual NYE celebration.
        </p>

        {/* RSVP Button */}
        <div>
          <a
            href="https://docs.google.com/forms/d/1ux2z83abNjUl_wvzkCOsM0P4eqpf_qf0wA6I4MqIIxE/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-semibold text-black bg-[#D4AF37] rounded-full hover:bg-[#D4AF37]/90 transition-all duration-200"
          >
            RSVP
          </a>
        </div>
      </div>
    </section>
  );
}

