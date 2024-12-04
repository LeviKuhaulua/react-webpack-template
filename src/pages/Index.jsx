import { createRoot } from "react-dom/client";
import * as React from 'react'; 
import Component from "../components/Component";


const Index = () => {
    return(
        <>
            <h1>Hello World</h1>
            <Component /> 
        </>
    );
}

// Finding the div or tag with the id of root
const root = document.getElementById('root');
// Rendering the index page to the root 
createRoot(root).render(<Index />); 