import React from "react";
import Header from "./Header.jsx";
import Card from "./Card.jsx"
import Footer from "./Footer"
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="section">
      <div className="wrapper">
      <Card
          img="https://www.sparfell.aero/app/uploads/2021/09/Cover-Bell-206-2-e1632322107582.jpg"
          name="Bell Jet Ranger"
      />
      <Card
          img="https://s3-eu-west-1.amazonaws.com/coavmi.prod.com/s3fs-public/avion/1980-agusta-bell-206-jet-ranger-for-sale-fly-en.jpg"
          name="Bell Jet Ranger"
      />
      <Card
          img="https://thumbs.dreamstime.com/z/air-force-boeing-ah-d-apache-attack-helicopter-tarmac-kleine-brogel-airbase-kleine-brogel-belgium-sep-military-apache-131517490.jpg"
          name="Apache"
      />
       <Card
          img="https://www.helisimmer.com/media/20084/cowan-simulation-bell-206-x-plane-04.png"
          name="Bell Jet Ranger"
      />
      </div>
      <div className="wrapper2">
      <Card
          img="https://besthqwallpapers.com/Uploads/29-12-2017/35493/thumb2-bell-206-4k-twin-engined-helicopter-civil-aviation-bell.jpg"
          name="Bell Jet Ranger"
      />
      <Card
          img="https://www.airbus.com/sites/g/files/jlcbta136/files/styles/airbus_608x608/public/2021-10/SliderHelicopters-3.jpg?itok=IXpmsbJ6"
          name="Airbus H160"
      />
      <Card
          img="https://cdn.jetphotos.com/full/1/27619_1141402160.jpg"
          name="HH-10|MD500E"
      />
       <Card
          img="https://storage.googleapis.com/stateless-aeroclassifieds-main/2021/04/72f6dc18-md-500-helicopter-for-sale-2021-04-22-at-16.31.41.png"
          name="MD500"
      />
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
