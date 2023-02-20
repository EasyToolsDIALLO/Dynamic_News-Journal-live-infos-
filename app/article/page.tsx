import { notFound } from 'next/navigation'; //7.5k (gzipped: 2.1k)
import LiveTimestamp from '../LiveTimestamp';

type Props = {
  searchParams: Article;
};

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }
  const article: Article = searchParams;
  return (
    <article className="pb-48">
      <section>
        {article.image && (
          <img
            className="h-96 max-w-md mx-auto md:max-w-lg lg:max-w-4xl object-cover rounded-lg shadow-md pt-10"
            src={article.image}
            alt={article.title}
          />
        )}

        <div className="px-10 pt-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>

          <div className="flex divide-x-2 space-x-4 pt-10">
            <h2 className="font-bold">By:{article.author || 'unknow'}</h2>
            <h2 className="font-bold pl-4">Source: {article.source}</h2>
            <p className="pl-4">
              <LiveTimestamp time={article.published_at} />
              {'   '}
              {article.published_at}
            </p>
          </div>

          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}
export default ArticlePage;
