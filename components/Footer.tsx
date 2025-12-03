"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Message */}
          <p className="text-white text-xl sm:text-2xl font-medium">
            See you in 2026! 🥂
          </p>

          {/* RSVP Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdn0x85gageegBa4t9xiMy3eI4q1Dr2a0LtLm3aSfObNBMJUw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full font-bold text-gray-900 bg-lucky-gold hover:bg-lucky-gold/90 hover:shadow-2xl hover:shadow-lucky-gold/30 transform hover:scale-105 transition-all duration-300"
          >
            RSVP
          </a>
        </div>
      </div>
    </footer>
  );
}

