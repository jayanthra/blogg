import { useEffect, useState } from "react";
import BlogList from "../bloglist/BlogList";
import './home.scss'

const Home = () => {

  const [blogs, updateBlogs] = useState<any[]>([])

  const handleDelete = (id : number) => {
    if(blogs.length) {
      let filterBlogs = blogs.filter(blog => blog?.id !== id)
      updateBlogs(filterBlogs)
    }
  }

  const [name, setstate] = useState<string>('mario')
  useEffect(() => {
    fetch('http://localhost:8000/blogs').then(res => {
      return res.json()
    }).then(data => {
      updateBlogs(data)
    })
  },[])

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
      {name}
      <button onClick={() => setstate( Math.random().toString() + 'lugi')}>CHANge</button>
    </div>
  );
}

export default Home