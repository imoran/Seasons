import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message }) 
        );
    }

    renderContent() {
        if (!this.state.errorMessage && this.state.lat) {
            return <h1><SeasonDisplay lat={this.state.lat} /></h1>
        } else if (this.state.errorMessage && !this.state.let) {
            return <h1>{`Error: ${this.state.errorMessage}`}</h1>
        }
        return <Loader text="Waiting for your permission to access location..."/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);