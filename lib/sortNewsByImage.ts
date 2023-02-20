export default function sortNewsByImage(news: NewsResponse) {
  const newsWithImages = news.data.filter((item) => item.image != null);
  const newsWithoutImages = news.data.filter((item) => item.image == null);

  const sortedImages = {
    pagination: news.pagination,
    data: [...newsWithImages],
  };
  //, ...newsWithoutImages
  return sortedImages;
}
