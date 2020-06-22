import React from 'react';
import Searchbar from "./components/Searchbar.jsx";
import SearchDropdown from "./components/SearchDropdown.jsx";
import CategoryDropdown from "./components/CategoryDropdown.jsx";
import Navbar from "./components/Navbar.jsx";
import bodyImg from "./images/bodyImg.png";

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      catName: 'walnut',
      searchDrop: false,
      categoryDrop: false
    };
    this.getCat = this.getCat.bind(this);
    this.onCatNameChange = this.onCatNameChange.bind(this);
    this.getSearchedCat = this.getSearchedCat.bind(this);
    this.searchDropAnimation = this.searchDropAnimation.bind(this);
    this.searchDropFade = this.searchDropFade.bind(this);
    this.categoryDropAnimation = this.categoryDropAnimation.bind(this);
    this.categoryDropFade = this.categoryDropFade.bind(this);
    this.getSuggestedCat = this.getSuggestedCat.bind(this);

  }

  componentDidMount () {
    this.getCat();
    console.log('component mounts')

  }
  getCat () {
    // var catName = this.state.catName;
    console.log('get request cat name: ');
    axios.get(`/api/search/${this.state.catName}`)
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
    this.getCat();
  }

  getSuggestedCat (event) {
    event.preventDefault();
    console.log(event);
    this.getCat(event)
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
      searchDrop: true,
      categoryDrop: false,
    })}, 200);
  }

  searchDropFade (event) {
    this.setState ({
      searchDrop: false
    })
  }

  categoryDropAnimation (event) {
    setTimeout(() => {
      this.setState ({
        categoryDrop: true,
        searchDrop: false
      })}, 200);
  }

  categoryDropFade (event) {
    this.setState ({
      categoryDrop: false

    })
  }

  render() {

    var renderedCat = 'NO KITTY'
    var renderSearchDrop = '';
    var renderCategoryDrop = '';

    if(this.state.cats.length !== 0) {
      console.log(this.state.cats)
      renderedCat = this.state.cats[0].name
    }
    if(this.state.searchDrop === true) {
      renderSearchDrop = <SearchDropdown getSuggestedCat={this.getSuggestedCat} searchDrop={this.searchDropFade} />
    }
    if(this.state.categoryDrop === true) {
      renderCategoryDrop = <CategoryDropdown categoryDropFade={this.categoryDropFade} />
    }

    return (
      <div>
        <div>
          <Searchbar
            categoryDropdown={this.categoryDropAnimation}
            searchDropdown={this.searchDropAnimation}
            getSearchedCat={this.getSearchedCat}
            getCat={this.getCat}
            catChange={this.onCatNameChange}
          />
        </div>
        <div>
          <Navbar />
        </div>

        <div className="testCat">Test, Cat from Database: {renderedCat}  </div>
        <div>{renderSearchDrop}</div>
        <div>{renderCategoryDrop}</div>

      </div>
    );
  }
}

export default App;

