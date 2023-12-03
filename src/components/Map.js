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
    <div id='map'className="flex flex-col justify-center items-center space-y-6">
      <h1 className="text-3xl font-bold mb-4">Find us</h1>
       
    <div style={{ height: '80vh', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD-ZMuEInDRQTPeG0pKB-bPlDhpaZmiSto" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={locations.latitude}
          lng={locations.longitude}
          text="Location"
        />
      </GoogleMapReact>
    </div>

    </div>
  
  );
}