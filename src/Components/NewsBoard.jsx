import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="container">
        <div className="row">
          {news.map((item, i) => (
            <NewsItem key={i} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsBoard;
