import { useState } from "react";
import BlogList from "../bloglist/BlogList";
import './home.scss'

const Home = () => {

  const [blogs, addBlog] = useState([
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
    }
  ])
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All list"/>
    </div>
  );
}

export default Home