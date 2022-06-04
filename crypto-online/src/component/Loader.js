import React from 'react';
import spinner from '../gif/Reload-Image-Gif-1.gif';
const Loader = () => {
    return (
        <div>
            <img src = {spinner} alt="Loading" />
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;