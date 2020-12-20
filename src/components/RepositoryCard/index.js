import Link from 'components/Link'
import StarIcon from './StarIcon'

import './RepositoryCard.scss'

const RepositoryCard = ({ name, url, description, stars }) => {
  return (
    <Link className="repository-card" href={url} external>
      <h2 className="name">{name}</h2>
      <div className="description">{description}</div>
      <div className="stats">
        <small className="stars">
          <StarIcon />
          {stars}
        </small>
      </div>
    </Link>
  )
}

export default RepositoryCard
