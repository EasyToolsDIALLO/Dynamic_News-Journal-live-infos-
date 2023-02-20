import React from 'react';
import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';
import NewLists from './NewLists';

async function Homepage() {
  //fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(','));

  console.log(news.data);
  return (
    <div className="w-full max-w-6xl mx-auto">
      <NewLists news={news} />
    </div>
  );
}

export default Homepage;
