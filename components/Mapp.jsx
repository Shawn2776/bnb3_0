import React, { useState } from "react";
import { getCenter } from "geolib";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const Mapp = ({ searchResults }) => {
  // transform the search results object into the
  // { latitude: 52.343, longitude: 13.345 }
  // object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  });

  if (!isLoaded) return <div>Loading ...</div>;

  // const center = useMemo(() => ({ lat: 47.67646, lng: -116.79637 }), []);

  return (
    <div className="w-full h-full border-red-500">
      <GoogleMap
        zoom={13}
        center={{ lat: center.latitude, lng: center.longitude }}
        mapContainerClassName="map-container"
      >
        {searchResults.map((result) => (
          <div key={result.lat}>
            {console.log(result.lat)}
            <MarkerF position={{ lat: result.lat, lng: result.long }}></MarkerF>
          </div>
        ))}
      </GoogleMap>
    </div>
  );
};

export default Mapp;
