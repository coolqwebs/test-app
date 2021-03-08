import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            cars: [
                { name: "Ford", year: 2018, model: "1" },
                { name: "Audi", year: 2016, model: 2 },
                { name: "Mazda", year: 2010, model: "3" },
            ],
            pageTitle: "React components",
            showCars: false,
        };
    }
    onChangeName(name, index) {
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({
            cars,
        });
    }
    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars,
        });
    };
    deleteHandler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);

        this.setState({
            cars,
        });
    }
    UNSAFE_componentWillMount() {
        console.log("App componentWillMount");
    }
    componentDidMount() {
        console.log("App componentDidMount");
    }
    render() {
        console.log("App render");
        const divStyle = {
            textAlign: "center",
        };

        // const cars = this.state.cars;
        let cars = null;

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            index={index}
                            model={car.model}
                            onDelete={this.deleteHandler.bind(this, index)}
                            onChangeName={(event) => {
                                this.onChangeName(event.target.value, index);
                            }}
                        />
                    </ErrorBoundary>
                );
            });
        }
        return (
            <div style={divStyle}>
                {/* <h1>{this.state.pageTitle}</h1> */}
                <h1>{this.props.title}</h1>
                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter />
                </ClickedContext.Provider>

                <hr />
                <button
                    style={{ marginTop: "20px" }}
                    onClick={this.toggleCarsHandler}
                >
                    Toggle cars
                </button>
                <button onClick={() => this.setState({ clicked: true })}>
                    Change clicked
                </button>
                <div
                    style={{
                        width: 400,
                        margin: "auto",
                        paddingTop: "20px",
                    }}
                >
                    {cars}
                </div>
                {/* {this.state.showCars
                    ? this.state.cars.map((car, index) => {
                          return (
                              <Car
                                  key={index}
                                  name={car.name}
                                  year={car.year}
                                  onChangeTitle={() => {
                                      this.changeTitleHandler(car.name);
                                  }}
                              />
                          );
                      })
                    : null} */}
            </div>
        );
    }
}

export default App;
