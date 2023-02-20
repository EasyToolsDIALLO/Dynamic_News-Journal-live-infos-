import React from 'react';
import Article from './Article';

type Props = {
  news: NewsResponse;
};

function NewLists({ news }: Props) {
  return (
    <main className="grid grid-cols-1 justify-items-center md:grid-cols-1 lg:grid-cols-3 p-10 gap-10 ">
      {news.data.map((article) => (
        <Article key={article.published_at} article={article} />
      ))}
    </main>
  );
}

export default NewLists;
