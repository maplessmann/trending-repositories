import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, href, external, ...props }) => {
  return external ? (
    <a
      className="link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ) : (
    <GatsbyLink className="link" to={href} {...props}>
      {children}
    </GatsbyLink>
  )
}

export default Link
