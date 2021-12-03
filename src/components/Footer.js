import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        Build with
        <a href="https://reactjs.org"> React</a> /
        <a href="https://gatsbyjs.com"> Gatsby</a> /
        <a href="https://graphql.org"> GraphQL</a> /
        <a href="https://contentful.com"> Contentful CMS</a>
      </p>
      <p>
        &copy; {new Date().getFullYear()} <span>SimpleRecipes. </span>All rights
        reserved.
      </p>
    </footer>
  )
}

export default Footer
