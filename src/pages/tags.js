import React from 'react'
// global component
import Layout from '../components/Layout'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'

import {graphql, Link} from 'gatsby'

const Tags = ({data}) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  // console.log(newTags)

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            // destructure property from tag
            const [text, value] = tag

            const slug = slugify(text, {lower: true})
            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
