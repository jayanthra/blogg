
const BlogList = (props: any) => {
  const { blogs, title, handleDelete } = props
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog: any) => (
        <div className="blog" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
        
      ))}
    </div>
  )
}

export default BlogList;