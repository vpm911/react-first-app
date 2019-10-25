import React, { Component } from 'react'
import './Recipe.css'

const Recipe = ({ title, calories, image, ingredients }) => {
  console.log('style=')
  return (
    <div className="recipe">
      <h2>{title}</h2>
      <ol>
        <lh>Ingredients</lh>
        {ingredients.map((ing,index) => (
          <li key={index}>{ing.text}</li>
        ))}
      </ol>
      <p>{`Calories: ${parseInt(calories)}`}</p>
      <img src={image} alt='' />
    </div>
  )
}

export default Recipe
