import React from "react";
import { useHistory } from "react-router-dom";
import MyButton from '../components/UI/button/MyButton'
import '../styles/App.css'

const PostItem = (props) => {
    const router = useHistory()
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div>
                <div className='post__btns'>
                    <MyButton onClick={() => router.push(`/posts/${props.post.id}`)} >Open</MyButton>
                    <MyButton onClick={() => props.remove(props.post)} >Delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem