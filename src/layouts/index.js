import SEO from 'components/SEO'
import Header from 'components/Header'
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="app">
      <SEO />
      <Header />
      <main className="layout">{children}</main>
    </div>
  )
}

export default Layout
