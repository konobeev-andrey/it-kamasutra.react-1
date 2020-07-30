import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png" />
      {props.message}
      <div>
        <span>Likes {props.like}</span>
      </div>
    </div>)
}
export default Post;