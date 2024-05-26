import React from "react";
import articlesContent from "./article-content";
import Articles from "../components/Articles";

const ArticleList = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 texxt-gray-900">
        Articles Lists for Blog
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap m-4">
          <Articles articles={articlesContent} />
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
