import React from 'react'
import {Link} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import slugify from 'slugify'

// if recipes is not provided just return empty array. In case you not provided a props in ResipesList in about page.
const RecipesList = ({recipes = []}) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const {id, title, image, prepTime, cookTime} = recipe
        // set a helper function instate the image is not provided to avoid the fat error!
        const pathToImage = getImage(image)
        // set Link to dynamic pages
        const slug = slugify(title, {lower: true})
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
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
