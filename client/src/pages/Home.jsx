import React from 'react';
import placeLogo from '../images/f.png';
import messageLogo from '../images/d.jpg';
import exitLogo from '../images/e.png';
import { useHistory } from 'react-router-dom';


<link rel = "stylesheet" href = "Home.css"/>

const Home = (props) => {
    const history = useHistory();

    return (
        <body>
            <div>
                <input className = "search-field" type = "text" placeholder = "search here"/>
            </div>
            <div>
               <button class="search-button" type="submit">Search</button>
            </div>
            <div class="icons">
                <img class= "img-place" src = {placeLogo} alt = ""/>
                <img class= "img-message" src = {messageLogo} alt = ""/>
                <img class= "img-exit" src = {exitLogo} alt = ""/>
            </div>
            <div class="btn-nav">
                <button class="buttonLoc" type="submit" id="btn-location" onClick = {() => history.push('./Locations')}>Locations</button>
                <button class="buttonMsg" type="submit" id="btn-message" onClick = {() => history.push('./Messages')}>Messages</button>
                <button class="buttonExit" type="submit" id="btn-exit" onClick = {() => history.push('./')}>Exit</button>
            </div>
        </body>
    ) 
}

export default Home;