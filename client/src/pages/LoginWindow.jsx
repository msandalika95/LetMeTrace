import React from 'react';
import adminLogo from '../images/b.png';
import { useHistory } from 'react-router-dom';

<link rel = "stylesheet" href = "LoginWindow.css"/>



const LoginWindow = (props) => {
    const history = useHistory();


    return (
       <div className = "loginBody">
       <body1>
            <form className = "container" id = "login-form">
                <h1 style = {{textAlign: 'center', color: 'white'}}>Admin Login</h1>

                <div className = "imagecontainer">
                    <img src = {adminLogo} alt = "" width = {150} height = {150}/>
                </div>
                <div>
                    <input className = "user1" id = "userfield" type = "text" placeholder = "user name" required/> 
                </div>
                <div>
                    <input className = "pass1" id="passwordfield" type="password" placeholder="password" name="password" required/>
                </div>
                <div className="second">
                   <div>
                      <button id = "login-form-login" name ="loginbtn" type ="submit" className ="btn1" onClick = {() => history.push('./Home')}><b>Login</b></button> 
                   </div>
                      <button id = "login-form-cancel" name ="cancelbtn" type ="submit" class="btn2"><b>Cancel</b></button>
                   <div>
                      
                   </div>
                </div>


            </form>
        </body1>
        </div>
    )
}

export default LoginWindow;