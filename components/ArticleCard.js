import Link from 'next/link';

const ArticleCard = ({ article }) => {
  const date = new Date(article.date).toDateString();
  return (
    <div className="article">
      <div className="cover-image">
        {/* <img src={`http://localhost:1337${article.photo.url}`} /> */}
        <img src={`https://strapi-css-backend.herokuapp.com${article.photo.url}`} alt="image"/>
      </div>
      <div className="article-info">
        <p>tagname:</p>
        {article.tags.map((tag) => (
          <Link href={`/tag/${tag.tagname}`}>
            <span className="tags">{tag.tagname}</span>
          </Link>
        ))}
        <p>article title</p>
        <Link href={`/article/${article.slug}`}>
          <h2>{article.title}</h2>
        </Link>
        <div className="article-brief">{article.brief}</div>
        <p className="author-info">
          {/* <img src={`http://localhost:1337${article.author.photo.url}`} alt="Image"/> */}
          <img src={`https://strapi-css-backend.herokuapp.com${article.author.photo.url}`} alt="Image"/>
          
          <Link href={`/author/${article.author.username}`}>
            {article.author.name}
          </Link>{' '}
          on {date}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
