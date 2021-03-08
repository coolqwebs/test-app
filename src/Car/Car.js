import React from "react";
import "./Car.css";
import PropTypes from "prop-types";
import withClass from "../hoc/withClass";

class Car extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }
    componentDidMount() {
        if (this.props.index === 1) {
            this.inputRef.current.focus();
        }
    }
    render() {
        const inputClasses = ["input"];

        if (this.props.name !== "") {
            inputClasses.push("green");
        } else {
            inputClasses.push("red");
        }
        if (this.props.name.length > 4) {
            inputClasses.push("bold");
        }
        return (
            <React.Fragment>
                <h3>Car: {this.props.name}</h3>
                <p>Year: {this.props.year}</p>
                <p>Model: {this.props.model}</p>
                <input
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(" ")}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        );
    }
}
Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    model: PropTypes.string,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
};
export default withClass(Car, Car);
