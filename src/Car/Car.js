import React from "react";

function Car(props) {
    const divStyle = {
        textAlign: "center",
        padding: "10px",
        margin: "10px",
    };

    return (
        <div style={divStyle}>
            <p>Car: {props.name}</p>
            <p>Year: {props.year}</p>
            <p>Model: {props.model}</p>
        </div>
    );
}

export default Car;
