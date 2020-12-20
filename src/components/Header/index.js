import { useStaticQuery, graphql } from 'gatsby'
import Link from 'components/Link'
import Navigation from 'components/Navigation'

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
        <Link to="/">
          <h1 className="title">⬆ {data.site.siteMetadata.title}</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
