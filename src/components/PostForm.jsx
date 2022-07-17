import React, {useState} from "react";
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'


const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewwPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        if(post.title) {
        create(newPost)}
        setPost({title: '', body: ''})
      }
     

    return (
        <form>
        <MyInput 
        onChange={e => setPost({...post, title: e.target.value})}
        value={post.title} 
        type='text' 
        placeholder='Post name'/>
        <MyInput 
        onChange={e => setPost({...post, body: e.target.value})}
        value={post.body} 
        type='text' 
        placeholder='Post description'/>
        <MyButton onClick={addNewwPost} >Create post</MyButton>
        </form>
    )
}

export default PostForm