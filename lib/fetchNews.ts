import { gql } from 'graphql-request';
import sortNewsByImage from './sortNewsByImage';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "us,gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  //Fetch function with Next.js 13 catching
  const res = await fetch(
    'https://northwalsham.stepzen.net/api/fantastic-heron/__graphql',
    {
      method: 'POST',
      cache: isDynamic ? 'no-cache' : 'default',
      next: isDynamic ? { revalidate: 0 } : { revalidate: 15 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
          limit: 100,
        },
      }),
    }
  );

  console.log('Responses from api query, ', category);

  const newsResponse = await res.json();

  // Sort function by images vs not images
  const news = sortNewsByImage(newsResponse.data.myQuery);

  return news;
  // return res
};

//stepzen import curl http://api.mediastack.com/v1/news?access_key=secret_keya&sources=business,sports&limit=50

//
export default fetchNews;
