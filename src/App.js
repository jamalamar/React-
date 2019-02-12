import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './CrimesList/crimes.css'
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

    removeCrime = (index) =>{
      this.setState(
      this.state.crimes.splice(index,1)
      )
    }
    

    componentDidMount(){
      this.getCrimes()
      .then((data) => console.log(data, ' from famous quotes'));
    }
  
  render() {

    return (
      <div className="App">
        <h1>Crimes List</h1>
        <CrimesList className='crimeslist' crimes={this.state.crimes} removeCrime={this.removeCrime}/>
      </div>
    );
  }
}

export default App;
