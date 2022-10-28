import useState from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMaker from './LocationMaker';
import LocationInfoBox from './LocationInfoBox';


const WorldMap = ({eventData, center, zoom}) => {

  const [locationInfor, setLocationInfor] = useState(null);

  const markers = eventData.map( (ev, index) => {
      if(ev.categories[0].id === "volcanoes"){
        return <LocationMaker key={index} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} 
        onClick={()=> setLocationInfor({id: ev.id, title: ev.title})}
        />
      }

      return null;
  })

  return (
    <div className='map'>
        {/* using the google map React package to show google maps and using the api  */}
      <GoogleMapReact
        bootstrapURLKeys={{ key:''}}
        defaultCenter={center}
        defaultZoom={zoom}  
      >
        {markers}
      </GoogleMapReact>
        {locationInfor && <LocationInfoBox  infor={locationInfor}/>}
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
