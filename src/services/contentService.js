import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.tigerhall.net/v2/",
  cache: new InMemoryCache(),
});

export const getContent = async (query, offset) => {
  const response = await client.query({
    query: gql`
      query GetContent($keywords: String!, $offset: Int!) {
        contentCards(
          filter: {
            limit: 40
            keywords: $keywords
            offset: $offset
            types: [PODCAST]
          }
        ) {
          edges {
            ... on Podcast {
              name
              image {
                ...Image
              }
              categories {
                ...Category
              }
              experts {
                ...Expert
              }
            }
          }
        }
      }

      fragment Image on Image {
        uri
      }

      fragment Category on Category {
        name
      }

      fragment Expert on Expert {
        firstName
        lastName
      }
    `,
    variables: { keywords: query, offset },
  });

  return response.data.contentCards.edges;
};
