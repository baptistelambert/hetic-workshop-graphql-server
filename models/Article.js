import Mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const ArticleSchema = new Mongoose.Schema(
  {
    url: String,
    title: String,
    topic: String,
    date: String,
    img: String,
    excerpt: String
  },
  {
    timestamps: true
  }
);

ArticleSchema.plugin(mongoosePaginate);

const Article = Mongoose.model('Article', ArticleSchema);

export default Article;
