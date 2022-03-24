import React, { useEffect, useState } from "react";
import "./App.css";
// import Card from "./components/Card";

// import Feed from "./components/Feed";
// https://api.nasa.gov/planetary/apod?count=1&api_key=0HdcX2lic5pubhu69hRqcCY9B5ndLUpVqtlr0cLL

function App() {
  const [apodData, setApodData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?count=10&api_key=0HdcX2lic5pubhu69hRqcCY9B5ndLUpVqtlr0cLL"
    )
      .then((res) => res.json())
      .then(
        (res) => setApodData(res),
        (error) => {
          // error handling
        }
      );
  }, []);

  return (
    <div className='container'>
      <header className='header'>
        <div className='header--info'>
          <h1>Spacestagram</h1> <p>Brought to you by NASA's Image API</p>
        </div>
      </header>
      <main className='feed'>
        {apodData.map((apod) => {
          return (
            <div className='card'>
              <img
                src={apod.url}
                alt='astronomy pic of the day'
                className='card--img'
              />
              <div className='card--info'>
                <h1>{apod.title}</h1>
                <h3>{apod.date}</h3>
                <p>{apod.explanation}</p>
              </div>
              <button type='button'>
                {" "}
                <span style={{ color: "red" }}>&#9825;</span> Like
              </button>
            </div>
          );
        })}
      </main>
    </div>
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
