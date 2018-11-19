
import React, { Component } from 'react';

const map = {
  key: 'AIzaSyCbCsd4Bqu-0_xhhIeZzmY9j9IfNDqT3Cs',
  location: '30.2688755,-97.740564',
  zoom: 16,
  size: '640x340',
};

const mapUrl =
  `https://maps.googleapis.com/maps/api/staticmap?key=${map.key}` +
  '&markers=anchor:32,10' +
  `%7C${map.location}` +
  `&center=${map.location}` +
  `&zoom=${map.zoom}` +
  '&format=png&maptype=roadmap' +
  '&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0x018edb&style=feature:water%7Celement:labels.text.fill%7Ccolor:0xeeeeee' +
  `&size=${map.size}`;

class Map extends Component {
  render() {
    return (
      <img src={mapUrl} alt="Google Maps Localisation" />
    );
  }
}

export default Map;
