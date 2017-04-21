const typeDefs = `
type Article {
  url: String
  title: String
  topic: String
  date: String
  img: String
  excerpt: String
}

type ArticleFeed {
  articles: [Article],
  total: Int
  limit: Int
  page: Int
  pages: Int
}

type Query {
  article(title: String): Article
  articleFeed(page: Int, limit: Int): ArticleFeed
}
`;

export default [typeDefs];
