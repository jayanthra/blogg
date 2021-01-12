import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import BlogList from "../bloglist/BlogList";
import './home.scss'

const Home = () => {

  const { data: blogs, isPending, errorMessage } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {errorMessage && <p>{errorMessage}</p>}
      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home