import React, {useState, useEffect} from 'react';
import './index.css';
import WorldMap from './components/WorldMap';
import Header from './components/Header';
import Loader from './components/Loader';


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

  }, [])

  return (
    <div className="header">
      <Header/>
      {!loading ? <WorldMap eventData={eventData} /> : <Loader/>}
    </div>
  );
}

export default App;
