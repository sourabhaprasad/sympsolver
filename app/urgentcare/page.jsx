"use client";
import { useEffect, useState } from "react";

const UrgentCare = () => {
  const [mapSearch, setMapSearch] = useState(""); // Left search box (Map)
  const [placeSearch, setPlaceSearch] = useState(""); // Right search box (Place Details)
  const [placeDetails, setPlaceDetails] = useState(null); // Stores searched place details
  const [extraDetails, setExtraDetails] = useState(null); // Stores additional details
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      // "https://maps.gomaps.pro/maps/api/js?key=AlzaSyVp5oVvR1skwUjaesFSlM1Ib0axArkQngK&libraries=geometry,places&callback=initMap";
      script.async = true;
    script.defer = true;
    script.onload = () => {
      const newMap = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 12.9268265, lng: 77.5264939 }, // Default center
        zoom: 13,
      });
      setMap(newMap);

      // Fetch the user's location using Geolocation API
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            newMap.setCenter(userLocation);
            newMap.setZoom(15);

            if (marker) {
              marker.setMap(null); // Remove previous marker
            }

            const newMarker = new google.maps.Marker({
              position: userLocation,
              map: newMap,
            });
            setMarker(newMarker);
          },
          (error) => {
            console.error("Error fetching geolocation:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array to run once on mount

  const handleMapSearch = async () => {
    if (!mapSearch) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${mapSearch}&format=json`
      );
      const data = await response.json();

      if (data.length > 0) {
        const place = data[0];

        if (map) {
          const location = {
            lat: parseFloat(place.lat),
            lng: parseFloat(place.lon),
          };
          map.setCenter(location);
          map.setZoom(15);

          if (marker) {
            marker.setMap(null);
          }

          const newMarker = new google.maps.Marker({
            position: location,
            map: map,
          });

          setMarker(newMarker);
        }
      }
    } catch (error) {
      console.error("Error fetching map location:", error);
    }
  };

  const handlePlaceSearch = async () => {
    if (!placeSearch) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${placeSearch}&format=json&addressdetails=1&extratags=1&accept-language=en`
      );
      const data = await response.json();

      if (data.length > 0) {
        const place = data[0];
        setPlaceDetails(place);

        // Fetch additional details using OpenStreetMap details API (if available)
        if (place.osm_id && place.osm_type) {
          fetchOSMDetails(place.osm_type, place.osm_id);
        }
      } else {
        setPlaceDetails(null);
        setExtraDetails(null);
      }
    } catch (error) {
      console.error("Error fetching place details:", error);
    }
  };

  const fetchOSMDetails = async (osmType, osmId) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/details?osmtype=${osmType[0].toUpperCase()}&osmid=${osmId}&format=json`
      );
      const data = await response.json();
      setExtraDetails(data);
    } catch (error) {
      console.error("Error fetching additional place details:", error);
      setExtraDetails(null);
    }
  };

  return (
    <div className="flex h-screen font-merriweather">
      {/* Left Section: Map Search */}
      <div className="w-1/2 p-4 bg-white  m-5 shadow-md flex flex-col">
        <input
          type="text"
          placeholder="Search for a location on map"
          className="border p-2 rounded-md w-full mb-4"
          value={mapSearch}
          onChange={(e) => setMapSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleMapSearch()}
        />
        <div id="map" className="h-full w-full border border-gray-300"></div>
      </div>

      {/* Right Section: Place Details Search */}
      <div className="w-1/2 p-6 bg-[#E8F2FF] shadow-md m-5 flex flex-col">
        <input
          type="text"
          placeholder="Search for a hospital or place details"
          className="border p-2 rounded-md w-full mb-4"
          value={placeSearch}
          onChange={(e) => setPlaceSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handlePlaceSearch()}
        />
        {placeDetails ? (
          <>
            <h2 className="text-lg font-bold m-5">
              {placeDetails.display_name}
            </h2>

            {/* Contact Details (if available) */}
            {extraDetails?.extratags?.phone && (
              <p className="text-gray-700 mx-5">
                <strong>Contact:</strong> {extraDetails.extratags.phone}
              </p>
            )}
            {extraDetails?.extratags?.email && (
              <p className="text-gray-700 mx-5">
                <strong>Email:</strong> {extraDetails.extratags.email}
              </p>
            )}

            {/* Opening Hours (if available) */}
            {extraDetails?.extratags?.opening_hours && (
              <p className="text-gray-700 mx-5">
                <strong>Opening Hours:</strong>{" "}
                {extraDetails.extratags.opening_hours}
              </p>
            )}

            {/* Directions Links */}
            <div className="mt-4 mx-5">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${placeDetails.lat},${placeDetails.lon}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Get Directions
              </a>
              <br />
            </div>
          </>
        ) : (
          <p className="text-gray-700 mx-5">
            Search for a hospital and view details here.
          </p>
        )}
      </div>
    </div>
  );
};

export default UrgentCare;
