import "./post.css"
import {Link} from 'react-router-dom';

const Post = ({post}) => {
  const PF="https://blogsitebackend3.onrender.com/images/";
  return (
    <div className="post">
      {
         post.photo&& (<img className="postImg" src={PF + post.photo} alt="#"/>) 
      }
      <div className="postInfo">
        <div className="postCategories">
          {
            post.categories.map(c=>(    
              <span className="postCategory">{c.name}</span>
            ))
          }
        </div>
        <Link to={`/post/${post._id}`} className="link">
           <span className="postTitle">{post.title}</span>
        </Link>
        <hr/>
        <span className="postDate">
           {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">
        {post.desc};
      </p>
    </div>
  )
}

export default Post
