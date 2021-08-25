// import react and react DOM
import React from 'react';
import ReactDOM from "react-dom";
// create react component
const App = () => {

    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (error) => console.log(error)
    );
    return <div>Latitude : </div>;
};
// take the react component and show in the screen
ReactDOM.render(<App/>, document.querySelector("#root"))
