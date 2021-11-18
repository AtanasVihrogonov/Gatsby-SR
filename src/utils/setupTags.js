import React from 'react'

const setupTags = recipes => {
  const allTags = {}
  // iterate twice, iterate over the recipes, but since tags was an array itself also iterate it over this tags.
  // So every time as I'm iterating over the recipes, I will set up forEach loop inside of that recipe over the tags as well.
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      // If allTags object has the particular tags then add + 1
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })

  const newTags = Object.entries(allTags).sort((a, b) => {
    // access the string inside of the object - array destructure
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setupTags
