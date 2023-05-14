// src/components/postList.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  content: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/post/${id}`);
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="post-list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => {handleDelete(post.id)}}>
            Delete
          </button>s
        </div>
      ))}
    </div>
  );
};

export default PostList
