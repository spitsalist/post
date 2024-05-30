import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import PostList from './ PostList'
import PostForm from './PostForm';
import '../styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://65f87d2bdf151452460f84d2.mockapi.io/api/products');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://65f87d2bdf151452460f84d2.mockapi.io/api/products/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleFormSubmitSuccess = () => {
    fetchPosts();
  };

  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <PostList posts={posts} deletePost={deletePost} />
        <PostForm onSubmitSuccess={handleFormSubmitSuccess} />
      </main>
    </div>
  );
};

export default App;