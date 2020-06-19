import React from 'react';
import './App.css';
import Searchbar from "./Searchbar.js";
import SearchDropdown from "./SearchDropdown.js";

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      catName: 'test',
      searchDrop: false
    };
    this.getCat = this.getCat.bind(this);
    this.onCatNameChange = this.onCatNameChange.bind(this);
    this.getSearchedCat = this.getSearchedCat.bind(this);
    this.searchDropAnimation = this.searchDropAnimation.bind(this);
    this.searchDropFade = this.searchDropFade.bind(this);
  }
  componentDidMount () {
    this.getCat();
    console.log('component mounts')

  }

  getCat (event) {
    var catName = this.state.catName;
    console.log('get request cat name: ', catName);
    axios.get(`/cats/${catName}`)
      .then(res => {
        this.setState({
          cats: res.data
        })
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log('axios error getting cats: ', err);
      })
  }

  getSearchedCat (event) {
    event.preventDefault();
    this.getCat(event);
  }

  onCatNameChange (event) {
    console.log(this.state.catName);
    event.preventDefault();
    this.setState ({
      catName: event.target.value
    })
  }

  searchDropAnimation (event) {
    setTimeout(() => {
    this.setState ({
      searchDrop: true
    })}, 200);
  }

  searchDropFade (event) {
    this.setState ({
      searchDrop: false
    })
  }

  render() {

    var renderedCat = 'NO KITTY'
    var renderSearchDrop = '';

    if(this.state.cats.length !== 0) {
      console.log(this.state.cats)
      renderedCat = this.state.cats[0].name
    }
    if(this.state.searchDrop === true) {
      renderSearchDrop = <SearchDropdown searchDrop={this.searchDropFade} />
    }
    return (
      <div>
      <div>
        <Searchbar
          searchDropdown={this.searchDropAnimation}
          getSearchedCat={this.getSearchedCat}
          getCat={this.getCat}
          catChange={this.onCatNameChange}
        />
      </div>

      <div className="testCat">Test, Cat from Database: {renderedCat}  </div>
      <div>{renderSearchDrop}</div>

      </div>
    );
  }
}

export default App;

