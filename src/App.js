import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

    constructor(props) {
        console.log('App constructor')
        super(props)
        this.state = {
            cars:[
                {name:'Ford', year: 2018},
                // {name:'Audi', year: 2016},
                // {name:'Mazda', year: 2020}
            ],
            pagetitle: 'React components',
            showCars: false
        }
    }


  toggleCarsHandler = () => {
     this.setState({
       showCars: !this.state.showCars
     })
  }

  onChangeName(name, index) {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({
            cars:cars
        })
    }
  deleteHandler(index) {
      const cars = this.state.cars.concat()
      cars.splice(index, 1)
        this.setState({ cars })
    }

  componentWillMount() {
        console.log('App componentWillMount')
  }

  componentDidMount() {
        console.log('App componentDidMount')
  }

    render() {
        console.log('render')
    const divStyle = {
      textAlign: 'center'
    }


    let cars = null

    if(this.state.showCars) {
      cars = this.state.cars.map((cars, index) => {
        return(
            <Car
                key={index}
                name={cars.name}
                year={cars.year}
                onDelete={this.deleteHandler.bind(this, index)}
                onChangeName={event => this.onChangeName(event.target.value, index)}
            />
        )
      })
    }

    return (
        <div style={divStyle}>
          {/*<h1>{this.state.pagetitle}</h1>*/}
            <h1>{this.props.title}</h1>
          <button
              onClick={this.toggleCarsHandler}
          >toggle cars</button>
            <div style={{
                width:'400px',
                margin:'auto',
                paddingTop: '20px'
            }}>
          { cars }
            </div>
        </div>
    )
  }
}
 export default App;