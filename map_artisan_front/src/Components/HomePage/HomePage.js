import React from 'react';
import Navbar from '../Navbar/Navbar';
import MapArtisans from '../MapArtisans/MapArtisans';
import ButtonsList from '../ButtonsList/Buttons.list';
import MapArtisan2 from '../MapArtisan2/MapArtisan2';

const HomePage = () => {

// let transformAdress =()=>{
//   axios(`https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=${apiKey}&searchtext=${number}+${adress}+${city}`)
//   .then(function(response) {
//     console.log(response)
//     console.log (response.data)
//     let lat = response.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude
//     let lon = response.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude
//     console.log(lat, lon)
//   })
 
//}

  return (
    <>
      <Navbar/>
      <p>Home Page</p>
      <ButtonsList/>
      {/* <MapArtisans/> */}
      <MapArtisan2/>
    </>
  )
};

export default HomePage;