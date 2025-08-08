// src/components/layout/TimeWidget.tsx
'use client';
import { useState, useEffect } from 'react';

export default function TimeWidget() {
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('Detecting location...');

  useEffect(() => {
    fetch('http://ip-api.com/json/?fields=country,city,timezone')
      .then(res => res.ok ? res.json() : Promise.reject('API failed'))
      .then(data => {
        setLocation(`${data.city}, ${data.country}:`);
        const timer = setInterval(() => {
          const userTime = new Date().toLocaleTimeString('en-US', {
            timeZone: data.timezone,
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
          });
          setTime(userTime);
        }, 1000);
        return () => clearInterval(timer);
      })
      .catch(() => {
        setLocation('Local time unavailable');
      });
  }, []);

  return <div className="font-mono text-sm">{location} {time}</div>;
}