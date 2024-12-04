import * as React from 'react'; 
import { useState } from 'react';
import '../styles/Component.css'; 

const Component = () => {
    const [ count, setCount ] = useState(0);
    
    return(
        <>
            <button onClick={() => setCount(count + 1)}>You clicked me {count} times!</button>
        </>
    );
}

export default Component;