import ArticleCard from '../components/ArticleCard';

export default function Home({ articles }) {
  return (
    <div className="article-grid" key={articles.id}>
      {articles && articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('https://strapi-css-backend.herokuapp.com/posts');
  const articles = await response.json();
  return {
    props: {
      articles,
    },
  };
}