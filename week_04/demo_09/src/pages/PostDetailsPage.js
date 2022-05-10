import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/posts.json';

const PostDetailsPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(posts.find(post => post.id === postId))
  }, [postId])

  return (
    <div>
      {post && (
        <div>
          <h1 className="post__title">{post.title}</h1>
          <p className="post__synopsis">{post.synopsis}</p>
          <div className="post__body" dangerouslySetInnerHTML={{__html: post.body}}></div>
        </div>
      )}
    </div>
  );
};

export default PostDetailsPage;