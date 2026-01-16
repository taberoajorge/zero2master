import React from "react";
import PropTypes from 'prop-types';


const App = ({ saludo, subtitle }) => {

    return (
        <>
            <h1>{saludo}</h1>
            <h3>{subtitle}</h3>
            {/* <h1> {JSON.stringify(greeting, null, 5)} </h1> */}
            <p>My first App</p>
        </>
    );
};

App.propTypes = {
    saludo: PropTypes.string.isRequired,
    other: PropTypes.number.isRequired,
}

App.defaultProps = {
    subtitle: 'Hola'
}

export default App;
