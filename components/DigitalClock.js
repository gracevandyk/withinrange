'use client';

import { useState, useEffect } from 'react';

export default function DigitalClock() {
  const [times, setTimes] = useState({});
  const [mounted, setMounted] = useState(false);

  const timeZones = [
    { name: 'New York', zone: 'America/New_York' },
    { name: 'Los Angeles', zone: 'America/Los_Angeles' },
    { name: 'London', zone: 'Europe/London' },
    { name: 'Tokyo', zone: 'Asia/Tokyo' },
    { name: 'Sydney', zone: 'Australia/Sydney' },
    { name: 'Dubai', zone: 'Asia/Dubai' },
    { name: 'Singapore', zone: 'Asia/Singapore' },
    { name: 'Hong Kong', zone: 'Asia/Hong_Kong' },
  ];

  useEffect(() => {
    setMounted(true);

    const updateClock = () => {
      const newTimes = {};
      timeZones.forEach((tz) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz.zone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        newTimes[tz.zone] = formatter.format(new Date());
      });
      setTimes(newTimes);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">World Clock</h1>
      <p className="text-lg text-gray-600 mb-12">Current time in different time zones</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {timeZones.map((tz) => (
          <div
            key={tz.zone}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-8 text-white"
          >
            <h2 className="text-xl font-bold mb-4">{tz.name}</h2>
            <div className="text-4xl font-mono font-bold tracking-wider">
              {times[tz.zone] || '--:--:--'}
            </div>
            <p className="text-sm text-blue-100 mt-4">{tz.zone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
