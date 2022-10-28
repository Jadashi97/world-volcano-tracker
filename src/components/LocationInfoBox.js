
const LocationInfoBox = ({infor}) => {
  return (
    <div className="location-infor">
        <h2>Event Location Infor</h2>
        <ul>
            <li>ID: <strong>{infor.id}</strong></li>
            <li>TITLE: <strong>{infor.title}</strong></li>
        </ul>
      
    </div>
  )
}

export default LocationInfoBox
