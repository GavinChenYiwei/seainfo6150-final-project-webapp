import React, { Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'
import './sass/main.scss'

class App extends Component {
  constructor () {
    super()
    this.state = {
      listingsData,
      city: 'All',
      bedrooms: '0',
      homeType: 'All',
      min_price: 0,
      max_price: 100000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'long'
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
  }
  componentWillMount() {

    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData
    })
  }

  change(event){
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }
  filteredData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price &&
      item.price <= this.state.max_price &&
      item.floorSpace >= this.state.min_floor_space &&
      item.floorSpace <= this.state.max_floor_space &&
      item.rooms >= this.state.bedrooms
    }) 

    if(this.state.city != "All") {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }

    if(this.state.homeType != "All") {
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
      })
    }

    if(this.state.sortby == 'price-dsc') {
      newData = newData.sort((a,b) => {
        return a.price - b.price
      })
    }

    if(this.state.sortby == 'price-asc') {
      newData = newData.sort((a,b) => {
        return b.price - a.price
      })
    }

    this.setState({
      filteredData: newData
    })  
  }

  populateForms() {
    // City
    var cities = this.state.listingsData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]
    cities = cities.sort()

    // HomeType
    var homeTypes = this.state.listingsData.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]
    homeTypes = homeTypes.sort()

    // Bedrooms
    var bedrooms = this.state.listingsData.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms = bedrooms.sort()

    this.setState({
      populateFormsData: {
        homeTypes,
        bedrooms,
        cities
      }
    }, () => {console.log(this.state.populateFormsData)})
  }

  render () {
    return (<div> 
      <header>
        <Link className="logo" to="/"> Logo</Link>
        <nav>
          <Link to="/creatads">Create Ads</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/login">Log In</Link>
          <Link to="/register" className="register-btn">Register</Link>
        </nav>
      </header>
      <Switch path="/">
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/>
          <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state}/>
        </section>
      </Switch>
    </div>)
  }
}

const app = document.getElementById('app')

export default App;
