import React, {useState, useEffect} from 'react';
import './index.css';
// import Header from './components/Header';
import WorldMap from './components/WorldMap';
import Header from './components/Header';

function App() {
  const [eventData, setEventData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const fetchEvents =  async ()=>{
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const {events}  = await res.json() 
      
      setEventData(events)
      setLoading(false)
    }

    fetchEvents()

    console.log(eventData)

  }, [])


  return (
    <div className="header">
      <Header/>

      {!loading ? <WorldMap eventData={eventData} /> : <h1>Loading..</h1>}
    </div>
  );
}

export default App;
