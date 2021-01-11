import { useEffect, useState } from "react";
import BlogList from "../bloglist/BlogList";
import './home.scss'

const Home = () => {

  const [blogs, updateBlogs] = useState<any[]>([])
  const [isPending, setisPending] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:8000/blogs').then(res => {
      if(!res.ok) {
        throw Error('Resourse not found')
      }
      return res.json()
    }).then(data => {
      updateBlogs(data)
      setisPending(false)
      setErrorMessage('')
    }).catch(err => {
      setErrorMessage(err.message)
      setisPending(false)
    })
  },[])

  return (
    <div className="home">
      {errorMessage && <p>{errorMessage}</p>}
      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
}

export default Home