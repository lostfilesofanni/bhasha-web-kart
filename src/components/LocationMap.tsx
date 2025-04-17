
import { useEffect, useRef } from "react";

interface LocationMapProps {
  location: string;
}

const LocationMap = ({ location }: LocationMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!location) return;

    // Create a URL for the Google Maps embed
    const encodedLocation = encodeURIComponent(location);
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedLocation}`;

    // Create the iframe for the map
    if (mapContainerRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = mapUrl;
      iframe.width = '100%';
      iframe.height = '300';
      iframe.style.border = '0';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';

      // Clear previous content and append the iframe
      mapContainerRef.current.innerHTML = '';
      mapContainerRef.current.appendChild(iframe);
    }
  }, [location]);

  if (!location) {
    return (
      <div className="w-full h-[300px] bg-muted flex items-center justify-center rounded-lg">
        <div className="text-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-muted-foreground">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <p className="text-muted-foreground">Enter a location to see the map</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg overflow-hidden border border-border">
      <div className="flex items-center justify-between px-4 py-3 bg-secondary/10">
        <h3 className="font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Find Us
        </h3>
        <a 
          href={`https://maps.google.com/maps?q=${encodeURIComponent(location)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline"
        >
          Open in Google Maps
        </a>
      </div>
      <div className="w-full h-[300px]" ref={mapContainerRef}></div>
      <div className="p-3 bg-muted">
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </div>
  );
};

export default LocationMap;
