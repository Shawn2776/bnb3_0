import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Mapp = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  // transform the search results object into the
  // { latitude: 52.343, longitude: 13.345 }
  // object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "10%",
    height: "10%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/shawn2776/cleyspa6f000c01of1wkzgovi"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {searchResults.map((result, index) => (
        <div key={index}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-1}
            offsetTop={-1}
          >
            <div className="text-2xl animate-bounce">📌</div>
          </Marker>
        </div>
      ))}
    </Map>
  );
};

export default Mapp;
