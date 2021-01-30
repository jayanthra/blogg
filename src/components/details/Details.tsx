import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './details.scss'

const Details = () => {
  const { id } = useParams<any>();
  const { data: blog, isPending, errorMessage } = useFetch(`http://localhost:8000/blogs/${id}`)
  return (
    <div className="article-details">
      {isPending && <h4>Loading...</h4>}
      {errorMessage && <h4>{errorMessage}</h4>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>By {blog.author}</p>
          <div>{blog.content}</div>
        </article>
      )} 
    </div>
  );
};

export default Details;