import { useState } from "react";
import BlogList from "../bloglist/BlogList";
import './home.scss'

const Home = () => {

  const [blogs, updateBlogs] = useState([
    {
      title: 'How I trained a dragon',
      author: 'Hiccup Horrendous',
      id: 1,
      content: 'Lorem ipsum',
    },
    {
      title: 'How to escape Jumanji',
      author: 'Robin Williams',
      id: 2,
      content: 'Lorem ipsum',
    },
    {
      title: 'Where is the hidden temple',
      author: 'Indiana Jones',
      id: 3,
      content: 'Lorem ipsum',
    },
    {
      title: 'How Micah Bell was the rat',
      author: 'Arthur Morgan',
      id: 4,
      content: 'Lorem ipsum',
    },
    {
      title: 'On the road to valentine',
      author: 'Arthur Morgan',
      id: 5,
      content: 'Lorem ipsum',
    }
  ])

  const handleDelete = (id : number) => {
    let filterBlogs = blogs.filter(blog => blog.id !== id)
    updateBlogs(filterBlogs)
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter(item => item.author === 'Arthur Morgan')} handleDelete={handleDelete} title="Arthur's Blogs"/>
    </div>
  );
}

export default Home