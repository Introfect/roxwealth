import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({locations}){
  const defaultProps = {
    center: {
      lat: locations.latitude,
      lng: locations.longitude
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD-ZMuEInDRQTPeG0pKB-bPlDhpaZmiSto" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={locations.latitude}
          lng={locations.longitude}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}