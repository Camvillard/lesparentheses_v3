import React, { Component } from "react"
import { Link, graphql } from "gatsby"



class Home extends Component {
  render() {
    const data = this.props.data
    const allPagesTitle = data.allWordpressPage.edges.map( edge => {
      return edge.node.title
    })

    console.log(allPagesTitle);

    return (
      <div>
          <h1>Pages</h1>
          <h2>{allPagesTitle}</h2>
      </div>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
