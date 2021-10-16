import React from 'react';
import { useHistory } from 'react-router-dom';
import colLogo from '../images/college.png';

<link ref = "stylesheet" href = "College.css"/>

const College = (props) => {
     const history = useHistory();
    return (
        <form className = "college">
           <h1 style = {{textAlign: 'center', color: 'white'}}>College</h1>
           <img src = {colLogo} className = "img-col" alt = ""/>
           <div>
                <input className = "col1" type = "text" placeholder = "search here"/>
           </div>
           <div>
               <button className = "col2" type = "submit">Search</button>
          </div>
          <div>
               <button className = "col2" type = "submit" onClick = {() => history.push('./Col')}>Query</button>
          </div>
          <div>
               <button class="col3" type="submit" onClick = {() => history.push('./Locations')}>Exit</button>
          </div>
       </form> 
    )
}

export default College; 