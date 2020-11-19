import React from "react"
import Header from "./components/Header"
import WeatherBox from "./components/WeatherBox"
console.log(process.env.REACT_APP_API_KEY);

class App extends React.Component {
  constructor(){
    super();
    this.state = {cities: [
                    {name: "Silverton", id: 5752024},  
                    {name: "Salem", id: 5750162}, 
                    {name: "Iwanuma", id:2112527}, 
                    {name: "Hakodate", id:2130188} ],
                  weather: []  
                  }
  }

  componentDidMount(){
    const IDs = this.state.cities.map(obj=>obj.id).join(",");
    fetch(`https://api.openweathermap.org/data/2.5/group?id=${IDs}&appid=`)
            .then(response => response.json())
            .then(response => {
                const data = response.list;
                this.setState({weather: data});
            })
  }

  render(){
    console.log(this.state)
    const content = this.state.weather.map(object => <WeatherBox key={object.id}data={object}/> );
    return (
      <div className="App">
        <Header />
          <main>
              <div className="weatherContainer">
                {content}
            </div>
          </main>
      </div>
    );
  }
}

export default App;
