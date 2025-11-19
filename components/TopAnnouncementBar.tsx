"use client";

import { useState, useEffect } from "react";

export default function TopAnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: January 1, 2026, 00:00:00 EST (Toronto time)
    const targetDate = new Date("2026-01-01T00:00:00-05:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-14 bg-[#D4AF37] z-50 border-b border-black/10">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Left: COUNTDOWN TO 2026 */}
          <div className="flex-shrink-0 hidden sm:block">
            <span className="text-black font-bold text-xs sm:text-sm uppercase tracking-wide">
              COUNTDOWN TO 2026:
            </span>
          </div>

          {/* Center: Countdown Timer */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
              <div className="flex flex-col items-center">
                <span className="font-mono text-sm sm:text-lg md:text-xl font-bold text-black tabular-nums">
                  {timeLeft.days.toString().padStart(2, "0")}
                </span>
                <span className="text-black text-[8px] sm:text-[10px] md:text-xs font-medium uppercase">Days</span>
              </div>
              <span className="text-black font-bold text-xs sm:text-sm md:text-base pb-2">:</span>
              <div className="flex flex-col items-center">
                <span className="font-mono text-sm sm:text-lg md:text-xl font-bold text-black tabular-nums">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </span>
                <span className="text-black text-[8px] sm:text-[10px] md:text-xs font-medium uppercase">Hrs</span>
              </div>
              <span className="text-black font-bold text-xs sm:text-sm md:text-base pb-2">:</span>
              <div className="flex flex-col items-center">
                <span className="font-mono text-sm sm:text-lg md:text-xl font-bold text-black tabular-nums">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </span>
                <span className="text-black text-[8px] sm:text-[10px] md:text-xs font-medium uppercase">Mins</span>
              </div>
              <span className="text-black font-bold text-xs sm:text-sm md:text-base pb-2">:</span>
              <div className="flex flex-col items-center">
                <span className="font-mono text-sm sm:text-lg md:text-xl font-bold text-black tabular-nums">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </span>
                <span className="text-black text-[8px] sm:text-[10px] md:text-xs font-medium uppercase">Secs</span>
              </div>
            </div>
          </div>

          {/* Right: RSVP Button */}
          <div className="flex-shrink-0">
            <a
              href="https://docs.google.com/forms/d/1ux2z83abNjUl_wvzkCOsM0P4eqpf_qf0wA6I4MqIIxE/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold text-[#D4AF37] bg-black hover:bg-black/90 transition-all duration-200"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

