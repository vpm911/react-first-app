import React from 'react'
import './App.css'
import Recipe from './Recipe'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { recipes: [], search: '', query: 'chicken' }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getRecipes()
    }
  }

  componentDidMount () {
    this.getRecipes()
  }

  getRecipes = async () => {
    const APP_ID = 'c1dd0778'
    const APP_KEY = 'c53fad95c5366096a9cf0ae24712c094'
    const exampleRequest = `https://api.edamam.com/search?q=${
      this.state.query
    }&app_id=${APP_ID}&app_key=${APP_KEY}`
    const response = await fetch(exampleRequest)
    const data = await response.json()
    console.log(data.hits)
    this.setState({ recipes: data.hits })
    console.log('recipes')
    console.log(this.state.recipes)
  }

  updateSearch = event => {
    event.preventDefault()
    this.setState({ search: event.target.value })
  }

  search = event => {
    event.preventDefault()
    this.setState({ query: this.state.search, search: '' })
  }
  render () {
    return (
      <div className='App'>
        <form className='search-form' onSubmit={this.search}>
          <input
            className='search-bar'
            type='text'
            value={this.state.search}
            onChange={this.updateSearch}
          />
          <button className='search-button' type='submit'>
            Search
          </button>
        </form>
        <div className="recipes">
          {this.state.recipes.map((recipe, index) => (
            <Recipe
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              key={index}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
