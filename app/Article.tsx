import React from 'react';
import LiveTimestamp from './LiveTimestamp';
import ReadMoreButton from './ReadMoreButton';

type Props = {
  article: Article;
};

function Article({ article }: Props) {
  return (
    <article
      className="bg-slate-100 dark:bg-slate-800 flex flex-col
        rounded-lg shadow-sm hover:scale-105 hover:shadow-lg
        hover:bg-slate-200 transition-all duration-200 ease-out"
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}

      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col py-5 px-0">
          <h3 className="font-bold font-serif line-clamp-3">{article.title}</h3>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-4">{article.description}</p>
          </section>
          <footer className="text-xs leading-5 tracking-wide text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{article.source} </p>
            <p>
              <LiveTimestamp time={article.published_at} />
            </p>
            <p></p>
          </footer>
        </div>

        {/*ReadMore button*/}
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}

export default Article;
