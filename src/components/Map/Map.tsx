import React from "react";
import GoogleMapReact from 'google-map-react';
import './Map.css'


const LocationPin = () => <a href="https://goo.gl/maps/GF3sjUB9n6Y43bJh7" target="_blank" rel="noreferrer" className="locationMarker"><i className="fas fa-times fa-lg"></i></a>
;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 58.4256488916357,
      lng: 16.961908548442743
    },
    zoom: 11
  };

  return (
    <>
        {/* <p style={{textAlign: 'center'}}>Aspöja 1, 610 25 Vikbolandet</p> */}
        <div style={{ height: '70vh', width: '100%', marginTop: '40px' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBbfyGi9iE_zhgi-IHqvKQIxOuLhN_6-No" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <LocationPin
            lat={58.4256488916357}
            lng={16.961908548442743}
            />
        </GoogleMapReact>
        </div>
    </>
  );
}