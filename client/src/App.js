import React from 'react';
//import { Router } from 'react-router';
import './App.css';
//import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import './cssFiles/Home.css';
import './cssFiles/LoginWindow.css';
import './cssFiles/Airport.css';
import './cssFiles/Bank.css';
import './cssFiles/College.css';
import './cssFiles/Locations.css';
import './cssFiles/Cafe.css';
import './cssFiles/PostOffice.css';
import './cssFiles/RailwayStation.css';
import './cssFiles/Mall.css';
import './cssFiles/Hospital.css';
import './cssFiles/PoliceStation.css';
import './cssFiles/BusStand.css';

import LoginWindow from './pages/LoginWindow.jsx'
import Home from './pages/Home.jsx'
import Locations from './pages/Locations.jsx'
import Airport from './pages/Airport.jsx'
import Bank from './pages/Bank'
import College from './pages/College'
import Messages from './pages/Messages'
import Cafe from './pages/Cafe'
import PostOffice from './pages/PostOffice'
import RailwayStation from './pages/RailwayStation'
import Mall from './pages/Mall'
import Hospital from './pages/Hospital'
import PoliceStation from './pages/PoliceStation'
import BusStand from './pages/BusStand'

import AirPort from './components/AirPort';
import Ban from './components/Ban';
import Bus from './components/Bus';
import Caf from './components/Caf';
import Col from './components/Col';
import Hos from './components/Hos';
import Mal from './components/Mal';
import Polis from './components/Polis';
import PostOf from './components/PostOf';
import RailWay from './components/RailWay';



function App() {
  return (
   <React.Fragment>
    
       <Switch>
          <Route exact path = "/" component = {LoginWindow}/>
          <Route path = "/Home" component = {Home}/>
          <Route path = "/Locations" component = {Locations}/>
          <Route path = "/Airport" component = {Airport}/>
          <Route path = "/Bank" component = {Bank}/>
          <Route path = "/College" component = {College}/>
          <Route path = "/Messages" component = {Messages}/>
          <Route path = "/Cafe" component = {Cafe}/>
          <Route path = "/PostOffice" component = {PostOffice}/>
          <Route path = "/RailwayStation" component = {RailwayStation}/>
          <Route path = "/Mall" component = {Mall}/>
          <Route path = "/Hospital" component = {Hospital}/>
          <Route path = "/PoliceStation" component = {PoliceStation}/>
          <Route path = "/BusStand" component = {BusStand}/>

          <Route path = "/Air" component = {AirPort}/>
          <Route path = "/Ban" component = {Ban}/>
          <Route path = "/Bus" component = {Bus}/>
          <Route path = "/Caf" component = {Caf}/>
          <Route path = "/Col" component = {Col}/> 
          <Route path = "/Hos" component = {Hos}/>
          <Route path = "/Mal" component = {Mal}/>
          <Route path = "/Polis" component = {Polis}/>
          <Route path = "/PostOf" component = {PostOf}/>
          <Route path = "/RailWay" component = {RailWay}/>


       </Switch>
   </React.Fragment>
    
  );
}

export default App;

