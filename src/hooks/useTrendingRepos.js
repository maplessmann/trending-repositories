import { useStaticQuery, graphql } from 'gatsby'
import { useQuery, gql } from '@apollo/client'

const REPOSITORIES_QUERY = gql`
  query getRepositories {
    repositories {
      id
      name
      description
      url
      stars
    }
  }
`

const useTrendingRepos = () => {
  const {data, loading, error} = useQuery(REPOSITORIES_QUERY)

  console.log({ data: data?.repositories })

  return {
    repositories: data?.repositories,
    loading,
  }
}

export default useTrendingRepos
