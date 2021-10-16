import React from 'react';
import Police from '../images/policeStation.png';
import { useHistory } from 'react-router-dom';


<link rel = "stylesheet" href ="Airport.css"/>

const Airport = (props) => {
  const history = useHistory(); 
    return (
       <form className = "air">
           <h1 style = {{textAlign: 'center', color: 'white'}}>Police Station</h1>
           <img src = {Police} className = "img-air" alt = ""/>
           <div>
                <input className = "search-field1" type = "text" placeholder = "search here"/>
           </div>
           <div>
               <button className = "search-button1" type = "submit">Search</button>
          </div>
          <div>
               <button className = "search-button1" type = "submit" onClick = {() => history.push('./Polis')}>Query</button>
          </div>
          <div>
               <button class="search-button2" type="submit" onClick = {() => history.push('./Locations')}>Exit</button>
          </div>
       </form> 
    )
}

export default Airport;
