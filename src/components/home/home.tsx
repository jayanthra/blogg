import { useEffect, useState } from "react";
import BlogList from "../bloglist/BlogList";
import './home.scss'

const Home = () => {

  const [blogs, updateBlogs] = useState<any[]>([])

  useEffect(() => {
    fetch('http://localhost:8000/blogs').then(res => {
      return res.json()
    }).then(data => {
      updateBlogs(data)
    })
  },[])

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
}

export default Home