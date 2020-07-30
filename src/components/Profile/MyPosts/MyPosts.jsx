import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import PostReduxForm from "./PostForm/PostForm";

const MyPosts = React.memo((props) => {
    let postsElement = props.postsData.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>)

    const onAddPost = (value) => {
        props.onAddPost(value.textPost);
    }
    return (
        <div className={s.postsBlock}>

            <h3>My posts</h3>
            <div>
                <PostReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>)
})

export default MyPosts;