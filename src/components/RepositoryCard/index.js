import Link from 'components/Link'
import Html from 'components/Html'
import StarIcon from './StarIcon'

import './RepositoryCard.scss'

const RepositoryCard = ({ name, url, descriptionHTML, stargazers }) => {
  return (
    <Link className="repository-card" href={url} external>
      <h2 className="name">{name}</h2>
      <Html className="description">{descriptionHTML}</Html>
      <div className="stats">
        <small className="stars">
          <StarIcon />
          {stargazers.totalCount}
        </small>
      </div>
    </Link>
  )
}

export default RepositoryCard
