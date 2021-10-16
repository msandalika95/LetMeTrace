import React from 'react';
import { useHistory } from 'react-router-dom';

const Messages = (props) => {
    const history = useHistory();
    return(
        
        <div>
           <h1> Text Here!!! </h1>
           <button onClick = {() => history.push('./Home')}>Back</button>
        </div>
        
    )
}

export default Messages;