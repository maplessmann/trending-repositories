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
  const { data, loading, error } = useQuery(REPOSITORIES_QUERY)
  const sourceData = useStaticQuery(graphql`
    {
      trendingRepositories {
        repositories {
          id
          name
          description
          stars
        }
      }
    }
  `)

  return {
    repositories:
      data?.repositories || sourceData.trendingRepositories.repositories,
    loading,
  }
}

export default useTrendingRepos
