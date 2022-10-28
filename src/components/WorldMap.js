import GoogleMapReact from 'google-map-react';
import LocationMaker from './LocationMaker';

const WorldMap = ({center, zoom}) => {
  return (
    <div className='map'>
        {/* using the google map React package to show google maps and using the api  */}
      <GoogleMapReact
        bootstrapURLKeys={{ key:'AIzaSyBytB_b5jhS4i3vRYnbHSBHfqyEpLclDdE'}}
        defaultCenter={center}
        defaultZoom={zoom}  
      >
        <LocationMaker
            lat={center.lat}
            lng={center.lng}
        />

      </GoogleMapReact>
    </div>
  )
}
  
WorldMap.defaultProps = {
    center:{
        lat: 44.905361,
        lng: -93.261069
    },
    zoom: 6
}

export default WorldMap
