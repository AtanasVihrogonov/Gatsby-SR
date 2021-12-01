import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimpleRecipes</span>. Build with
        <a href="https://reactjs.org"> React</a>,
        <a href="https://gatsbyjs.com"> Gatsby</a>,
        <a href="https://graphql.org"> GraphQL</a>,
        <a href="https://contentful.com"> Contentful</a>
      </p>
    </footer>
  )
}

export default Footer
