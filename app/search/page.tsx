import React from 'react';
import fetchNews from '../../lib/fetchNews';
import NewLists from '../NewLists';

type Props = {
  searchParams?: { terms: string };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    'general',
    searchParams?.terms,
    true
  );
  return (
    <div>
      <h1 className="headerTitle">Resultats pour: {searchParams?.terms}</h1>
      <NewLists news={news} />
    </div>
  );
}

export default SearchPage;
