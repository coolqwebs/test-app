import React from "react";

function Car(props) {
    const divStyle = {
        display: "block",
        textAlign: "center",
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
    };

    return (
        <div style={divStyle}>
            <p>Car: {props.name}</p>
            <p>Year: {props.year}</p>
            <p>Model: {props.model}</p>
            <input
                type="text"
                onChange={props.onChangeName}
                value={props.name}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
}

export default Car;
