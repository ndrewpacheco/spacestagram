import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header";
const apiURL = `https://api.nasa.gov/planetary/apod?count=10&api_key=${process.env.REACT_APP_NASA_KEY}`;

function App() {
  const [apodData, setApodData] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then(
        (res) => setApodData(res),
        (error) => {
          console.log("Error:", error);
        }
      );
  }, []);

  return (
    <>
      <Header />

      <div className='container'>
        <main className='feed'>
          {apodData.map((apod, idx) => {
            return <Card apod={apod} id={`image_${idx + 1}`} key={idx} />;
          })}
        </main>
      </div>
    </>
  );
}

export default App;

// 0:
// copyright: "\nAnglo-Australian Telescope Board"
// date: "1997-07-19"
// explanation: "The southern sky contains wonders almost unknown in the north.  These wonders include the Large and Small Magellanic Clouds: small irregular galaxies orbiting our own larger Milky Way spiral galaxy. The Small Magellanic Cloud (SMC), pictured here, is about 250,000 light years away.  The SMC contains many young, hot, blue stars indicating it has undergone a recent period of star formation, possibly due to a collision with the LMC 500 million years ago. The bright object on the right is a globular cluster near the outskirts of the Milky Way."
// hdurl: "https://apod.nasa.gov/apod/image/smc_uks.gif"
// media_type: "image"
// service_version: "v1"
// title: "The Small Cloud of Magellan"
// url: "https://apod.nasa.gov/apod/image/smc_uks.gif"
