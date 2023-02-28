const queryRequest = (countPerPage, searchQuery, paginationKeyword, paginationString) => {
    return {
    query: `     
    {
        search(query: "${searchQuery} stars:>100 sort:stars" type: REPOSITORY ${paginationKeyword}: ${countPerPage}, ${paginationString}){
            pageInfo {
                hasPreviousPage
                hasNextPage
                startCursor
                endCursor
            }
            edges {
                node {
                    ... on Repository {
                        id
                        url
                        name
                        nameWithOwner
                        primaryLanguage {
                            color
                            id
                            name
                          }
                          stargazerCount
                          createdAt
                          updatedAt
                          closedIssues: issues(first:1,states:CLOSED){totalCount}
                          totalIssues: issues(first:1){totalCount}
                    }
                }
            }
          }
        }
    `
    }
};

  export default queryRequest;