import React from 'react';
import styles from './../styles/Post.module.css';
import userLogo from './../assets/userLogo.svg'

const Post = ({ post, deletePost }) => (
  <div className={styles.post}>
    <div className={styles.userLogo}>
      <img src={userLogo} alt="user logo" />
    </div>
    <div className={styles.postContent}>
      <div className={styles.postHeader}>
        <h3>Заголовок</h3>
      </div>
      <div className={styles.postBody}>
      <p >{post.title}</p>
        <p > {post.text}</p>
      </div>
    </div>
    <button onClick={() => deletePost(post.id)}>Удалить</button>
  </div>
);

export default Post;