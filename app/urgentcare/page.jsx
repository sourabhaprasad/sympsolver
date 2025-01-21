"use client";
import { useEffect, useState } from "react";

const UrgentCare = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (document.getElementById("google-maps-script")) {
      return; // Prevent multiple script loads
    }

    // Load Google Maps API dynamically
    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src =
      "https://maps.gomaps.pro/maps/api/js?key=AlzaSyVp5oVvR1skwUjaesFSlM1Ib0axArkQngK&libraries=geometry,places&callback=initMap";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setIsScriptLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!isScriptLoaded) return;

    // Initialize Google Maps
    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 12.9268265, lng: 77.5264939 },
        zoom: 13,
      });

      const input = document.getElementById("pac-input");
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo("bounds", map);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          console.log(
            "No details available for the input: '" + place.name + "'"
          );
          return;
        }

        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }

        new google.maps.Marker({
          position: place.geometry.location,
          map: map,
        });
      });
    };

    window.initMap();
  }, [isScriptLoaded]);

  return (
    <div className="flex h-screen font-merriweather">
      <div className="w-1/2 p-4 bg-white shadow-md flex flex-col">
        <input
          id="pac-input"
          type="text"
          placeholder="Search for a place"
          className="border p-2 rounded-md w-full mb-4"
        />
        <div id="map" className="h-full w-full border border-gray-300"></div>
      </div>

      <div className="w-1/2 p-6 bg-gray-100 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Hospital Information</h2>
        <p className="text-gray-700">
          Select a hospital from the map to see details here.
        </p>
        {/* Add dynamic hospital details here when selected */}
      </div>
    </div>
  );
};

export default UrgentCare;
