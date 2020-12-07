import Link from 'components/Link'
import Html from 'components/Html'

const RepositoryCard = ({ name, url, descriptionHTML, stargazers }) => {
  return (
    <div className="repository-card">
      <Link href={url} external>
        <h2>{name}</h2>
      </Link>
      <Html>{descriptionHTML}</Html>
      <small>{stargazers.totalCount} stars</small>
    </div>
  )
}

export default RepositoryCard
