import React from 'react';
import { useHistory } from 'react-router-dom';

import airport from '../images/airport.png';
import bank from '../images/bank.jpg';
import cafe from '../images/cafe.png';
import hospital from '../images/hospital.png';
import policeStation from '../images/policeStation.png';
import postOffice from '../images/postOffice.png';
import railwayStation from '../images/railwayStation.png';
import mall from '../images/mall.png';
import college from '../images/college.png';
import busStand from '../images/busStand.png';


<link rel = "stylesheet" href = "Locations.css"/>

const Locations = (props) => {
  const history = useHistory();

    return (
      <form className = "form1">
        <div className = "loc1">
           <div className = "imgset1"> 
            <img className = "img1" src = {airport} alt = ""/>
            <img className = "img2" src = {bank} alt = ""/>
            <img className = "img3" src = {busStand} alt = ""/>
            <img className = "img4" src = {cafe} alt = ""/>
            <img className = "img5" src = {college} alt = ""/>
           </div>
           <div className = "button1">
              <button className = "btn-air" onClick = {() => history.push('./Airport')}>Airport</button>
              <button className = "btn-bank" onClick = {() => history.push('./Bank')}>Bank</button>
              <button className = "btn-bus" onClick = {() => history.push('./BusStand')}>Bus Stand</button>
              <button className = "btn-caf" onClick = {() => history.push('./Cafe')}>Cafe</button>
              <button className = "btn-col" onClick = {() => history.push('./College')}>College</button>
           </div>
          <div className = "imgset2"> 
            <img className = "img6" src = {hospital} alt = ""/>
            <img className = "img7" src = {policeStation} alt = ""/>
            <img className = "img8" src = {postOffice} alt = ""/>
            <img className = "img9" src = {railwayStation} alt = ""/>
            <img className = "img10" src = {mall} alt = ""/>
          </div>  
          <div  className = "button2">
              <button className = "btn-hos" onClick = {() => history.push('./Hospital')}>Hospital</button>
              <button className = "btn-pol" onClick = {() => history.push('./PoliceStation')}>Police Station</button>
              <button className = "btn-post" onClick = {() => history.push('./PostOffice')}>Post Office</button>
              <button className = "btn-rail" onClick = {() => history.push('./RailwayStation')}>Railway Station</button>
              <button className = "btn-mall" onClick = {() => history.push('./Mall')}>Mall</button>
          </div>
          <div>
            <button className = "bckbtn" onClick = {() => history.push('./Home')}>Back</button>
          </div>
        </div>
      </form>
    )
}

export default Locations;