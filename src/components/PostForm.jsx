import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './../styles/PostForm.module.css';

const PostForm = ({ onSubmitSuccess }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const postData = {
        title: data.title,
        content: data.content,
      };
      await axios.post('https://65f87d2bdf151452460f84d2.mockapi.io/api/products', postData);
      reset();
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.createPost}>
      <h2>Написать пост</h2>
      <input
        type="text"
        placeholder="Заголовок"
        {...register('title', { required: true })}
        className={styles.input}
      />
      <textarea
        placeholder="Введите текст..."
        {...register('content', { required: true })}
        className={styles.textarea}
      ></textarea>
      <button type="submit" className={styles.button}>Публикация</button>
    </form>
  );
};

export default PostForm;