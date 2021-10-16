import React from 'react';
import { useHistory } from 'react-router-dom';
import bankLogo from '../images/bank.jpg';


<link rel = "stylesheet" href ="Bank.css"/>

const Bank = (props) => {
     const history = useHistory();
    return (
        <form className = "bank">
           <h1 style = {{textAlign: 'center', color: 'white'}}>Bank</h1>
           <img src = {bankLogo} className = "img-bank" alt = ""/>
           <div>
                <input className = "search-bank1" type = "text" placeholder = "search here"/>
           </div>
           <div>
               <button className = "search-bank2" type = "submit">Search</button>
          </div>
          <div>
               <button className = "search-bank2" type = "submit" onClick = {() => history.push('./Ban')}>Query</button>
          </div>
          <div>
               <button class="search-bank3" type="submit" onClick = {() =>history.push('./Locations')}>Exit</button>
          </div>
       </form> 
    )
}

export default Bank;