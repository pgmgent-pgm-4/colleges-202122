import { Link } from "react-router-dom";

import posts from '../data/posts.json';

const PostsPage = () => {
  return (
    <div>
      <ul>
        {posts && posts.length > 0 && posts.map(post => 
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>)}
      </ul>
    </div>
  );
};

export default PostsPage;