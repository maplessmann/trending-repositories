import { useStaticQuery, graphql } from 'gatsby'
import './index.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="app-header">
      <div className="container">
        <h1 className="title">⬆ {data.site.siteMetadata.title}</h1>
      </div>
    </header>
  )
}

export default Header
