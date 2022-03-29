import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./map.css"
mapboxgl.accessToken = 'pk.eyJ1IjoibmF2aWRuYWJpbCIsImEiOiJjbDE2MzJnMWwwNTlnM2Jtd2Zuc2djdTcyIn0.UIYnpGMIMwPxtpllPNQgxg';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(90.3929);
  const [lat, setLat] = useState(23.7607);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

   useEffect(() => {
     if (!map.current) return; // wait for map to initialize
     map.current.on('move', () => {
       setLng(map.current.getCenter().lng.toFixed(4));
       setLat(map.current.getCenter().lat.toFixed(4));
       setZoom(map.current.getZoom().toFixed(2));
     });
   });

  return (
    <div style={{overflow:'hidden'}}>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
