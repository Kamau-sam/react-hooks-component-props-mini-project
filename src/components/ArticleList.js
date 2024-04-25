import React from "react";
import Article from "./Articles";

function ArticleList({ posts }) {
  const postArticle = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });
  return <main>{postArticle}</main>;
}

export default ArticleList;
