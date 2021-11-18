import React from 'react'
// global component
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { StaticImage } from 'gatsby-plugin-image'
import AllRecipes from '../components/AllRecipes'

export default function Home() {
  return (
    <Layout>
      <SEO />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
