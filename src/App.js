import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CrimesList from './CrimesList/crimes.js'

class App extends Component {

  state = {
    crimes: []
  }

  getCrimes = async () => {

    try {
        const crimes = await fetch('https://data.cityofchicago.org/resource/crimes.json');
        const crimesJson = await crimes.json();
        this.setState({
          crimes: crimesJson
        });
        return crimesJson;
    }     //catch errors if they exist
          catch (err) {
          console.log(err, 'error in catch block')
          return err
        }
  }

    componentDidMount(){
      this.getCrimes()
      .then((data) => console.log(data, ' from famous quotes'));
    }
  
  render() {

    return (
      <div className="App">
        <h1>Crimes</h1>
        <CrimesList crimes={this.state.crimes}/>
      </div>
    );
  }
}

export default App;
