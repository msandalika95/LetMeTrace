import React from 'react';
import {Link} from 'react-router-dom';

<link rel = "stylesheet" href = "App.css"/>


const Navbar = () => {
    return (
        
                    <nav>
                      <button>
                        <Link to = "/Home"><b>Login</b></Link>
                      </button>
                      <button>
                         <Link to = "/"><b>Cancel</b></Link>
                      </button>
                      <button>
                         <Link to = "/Locations"><b>Next</b></Link>
                      </button>
                     
                    </nav>
            
    )
}

export default Navbar;


                