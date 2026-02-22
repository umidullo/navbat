"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

const VENUES = [
  {
    name: "Kings Barbershop",
    category: "Барбершоп",
    address: "Амира Темура, 45",
    rating: 4.9,
    price: "от 40 000 сум",
    icon: "✂️",
    lat: 41.2985,
    lng: 69.2702,
  },
  {
    name: "Nail Studio Maftuna",
    category: "Маникюр / Педикюр",
    address: "Чилонзор, 12-квартал",
    rating: 4.8,
    price: "от 60 000 сум",
    icon: "💅",
    lat: 41.2776,
    lng: 69.2093,
  },
  {
    name: "MedLife Klinika",
    category: "Клиника",
    address: "Мирзо-Улугбек, 78",
    rating: 4.7,
    price: "от 50 000 сум",
    icon: "🏥",
    lat: 41.3264,
    lng: 69.2892,
  },
  {
    name: "Baxor Hammomlari",
    category: "Баня / СПА",
    address: "Яшнобод, 5-массив",
    rating: 4.9,
    price: "от 80 000 сум",
    icon: "🛁",
    lat: 41.2350,
    lng: 69.2834,
  },
  {
    name: "Relax Massage Center",
    category: "Массаж",
    address: "Юнусабад, 19-квартал",
    rating: 4.6,
    price: "от 100 000 сум",
    icon: "🧖",
    lat: 41.3505,
    lng: 69.2630,
  },
  {
    name: "Gulsanam Kosmetolog",
    category: "Косметолог",
    address: "Сергели, 11-квартал",
    rating: 5.0,
    price: "от 120 000 сум",
    icon: "💆",
    lat: 41.2100,
    lng: 69.1823,
  },
];

export default function VenueMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<ReturnType<typeof import("leaflet")["map"]> | null>(null);
  const markersRef = useRef<ReturnType<typeof import("leaflet")["marker"]>[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !mapRef.current || mapInstanceRef.current) return;
      // Fix default marker icon broken by webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [41.2995, 69.2401],
        zoom: 12,
        zoomControl: false,
      });

      L.control.zoom({ position: "bottomright" }).addTo(map);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      const markers = VENUES.map((venue, i) => {
        const el = document.createElement("div");
        el.innerHTML = `
          <div style="
            background: white;
            border: 2.5px solid #4f46e5;
            border-radius: 12px;
            padding: 5px 10px;
            font-size: 12px;
            font-weight: 700;
            color: #1e1b4b;
            white-space: nowrap;
            box-shadow: 0 4px 12px rgba(79,70,229,0.25);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 5px;
          ">
            <span>${venue.icon}</span>
            <span>${venue.name.split(" ")[0]}</span>
          </div>
        `;

        const icon = L.divIcon({ html: el.innerHTML, className: "", iconAnchor: [0, 0] });

        const marker = L.marker([venue.lat, venue.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<div style="min-width:180px;font-family:sans-serif;">
              <p style="font-weight:800;font-size:14px;margin:0 0 2px">${venue.name}</p>
              <p style="color:#6366f1;font-size:11px;font-weight:600;margin:0 0 4px">${venue.category}</p>
              <p style="color:#9ca3af;font-size:11px;margin:0 0 8px">📍 ${venue.address}, Ташкент</p>
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <span style="font-size:12px;font-weight:700;color:#111">⭐ ${venue.rating.toFixed(1)}</span>
                <span style="font-size:12px;color:#374151">${venue.price}</span>
              </div>
              <button style="
                margin-top:10px;width:100%;padding:7px;background:#4f46e5;color:white;
                border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;
              ">Записаться</button>
            </div>`,
            { closeButton: false, maxWidth: 220 }
          );

        marker.on("click", () => setActiveIndex(i));
        markersRef.current.push(marker);
        return marker;
      });

      markersRef.current = markers;
      mapInstanceRef.current = map;
    });

    return () => {
      cancelled = true;
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
      markersRef.current = [];
      if (mapRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (mapRef.current as any)._leaflet_id;
      }
    };
  }, []);

  // Pan to venue when sidebar item is clicked
  const handleSidebarClick = (index: number) => {
    setActiveIndex(index);
    const venue = VENUES[index];
    const marker = markersRef.current[index];
    mapInstanceRef.current?.flyTo([venue.lat, venue.lng], 15, { duration: 0.8 });
    setTimeout(() => marker?.openPopup(), 850);
  };

  return (
    <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-gray-200 shadow-xl shadow-gray-100 h-[540px]">
      {/* Sidebar */}
      <div className="w-full lg:w-72 shrink-0 bg-white overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
            {VENUES.length} заведений · Ташкент
          </p>
        </div>
        {VENUES.map((venue, i) => (
          <button
            key={venue.name}
            onClick={() => handleSidebarClick(i)}
            className={`flex items-start gap-3 p-4 text-left transition-colors border-b border-gray-50 last:border-0 ${
              activeIndex === i
                ? "bg-indigo-50 border-l-2 border-l-indigo-500"
                : "hover:bg-gray-50"
            }`}
          >
            <span className="text-xl mt-0.5 shrink-0">{venue.icon}</span>
            <div className="min-w-0">
              <p className="font-semibold text-gray-900 text-sm truncate">{venue.name}</p>
              <p className="text-xs text-indigo-600 font-medium">{venue.category}</p>
              <p className="text-xs text-gray-400 truncate mt-0.5">{venue.address}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs font-bold text-gray-700">⭐ {venue.rating.toFixed(1)}</span>
                <span className="text-xs text-gray-400">{venue.price}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Map */}
      <div ref={mapRef} className="flex-1 min-h-64 z-0" />
    </div>
  );
}
