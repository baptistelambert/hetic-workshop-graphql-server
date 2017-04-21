import Article from '../models/Article';

const resolvers = {
  Query: {
    article: (root, args) => Article.find({ title: args.title }).lean(),
    articleFeed: (root, args) => {
      const page = args.page || 1;
      const limit = args.limit || 10;

      return Article.paginate({}, { page, limit });
    }
  },
  ArticleFeed: {
    articles: articleFeed => articleFeed.docs
  }
};

export default resolvers;
