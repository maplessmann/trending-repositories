import { useStaticQuery, graphql } from 'gatsby'

const useTrendingRepos = () => {
  const data = useStaticQuery(graphql`
    query MyQuery($query: String = "language:JavaScript stars:>10") {
      github {
        search(query: $query, type: REPOSITORY, first: 10) {
          repos: edges {
            repo: node {
              ... on GitHub_Repository {
                id
                name
                url
                descriptionHTML
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  `)

  return {
    repositories: data?.github?.search?.repos.map(({ repo }) => repo),
  }
}

export default useTrendingRepos
