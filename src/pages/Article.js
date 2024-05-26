import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";
import Articles from "../components/Articles";

// components
import CommentsList from "../components/CommentsList";

const Article = () => {
  const { name } = useParams();

  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);
  if (!article)
    return (
      <h1 className="text-2xl">
        Article not found?{" "}
        <a href="/articles" className="text-blue-400">
          click here to all articles present inside the blog
        </a>
      </h1>
    );

  const otherarticles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <p className=" text-blue-400 text-2xl">
        To see List of other articles :{" "}
        <a href="/articles" className="text-blue-600">
          click here
        </a>
      </p>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 texxt-gray-900">
        {article.title}
      </h1>

      <img
        src={article.thumbnail}
        className="img-responsive my-5"
        alt={article.name}
      />

      {article.content.map((para, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {para}
        </p>
      ))}

      <CommentsList comments={articleInfo.comments} />
      <h1 className="sm:text-4xl text-2xl font-bold my-6 texxt-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap m-4">
        <Articles articles={otherarticles} />
      </div>
    </>
  );
};

export default Article;
