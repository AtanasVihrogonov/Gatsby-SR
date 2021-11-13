import React from 'react'
import {Link} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

// if recipes is not provided just return empty array
const RecipesList = ({recipes = []}) => {
  // iterate over the recipes

  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const {id, title, image, prepTime, cookTime} = recipe
        // set a helper function instate the image is not provided to avoid the fat error!
        const pathToImage = getImage(image)
        // set Link to dynamic pages
        return (
          <Link key={id} to={`/${title}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime}min | Cook: {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
