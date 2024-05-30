import React, { useState } from 'react';
import Post from './Post';
import styles from './../styles/PostList.module.css';

const PostList = ({ posts, deletePost }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className={styles.postList}>
      <h2>Список постов</h2>
      {currentPosts.map(post => (
        <Post key={post.id} post={post} deletePost={deletePost} />
      ))}
      {indexOfLastPost < posts.length && (
        <button className={styles.loadMore} onClick={nextPage}>Далее</button>
      )}
    </div>
  );
};

export default PostList;