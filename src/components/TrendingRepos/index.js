import useTrendingRepos from 'hooks/useTrendingRepos'
import RepositoryCard from 'components/RepositoryCard'

const TrendingRepos = () => {
  const { repositories } = useTrendingRepos()

  return (
    <div className="trending-repos">
      {repositories.map(({ id, ...props }) => (
        <RepositoryCard key={id} {...props} />
      ))}
    </div>
  )
}

export default TrendingRepos
