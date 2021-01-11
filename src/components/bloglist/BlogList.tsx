
const BlogList = (props: any) => {
  const { blogs, title } = props
  return (
    <div className="blog-list">
      <h2>{blogs.length ? title : ''}</h2>
      {blogs.map((blog: any) => (
        <div className="blog" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>by {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList;