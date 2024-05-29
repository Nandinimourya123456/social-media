import React, { useContext } from 'react'
import {AiFillDelete} from 'react-icons/ai';
import { PostList } from '../store/create-store-post';

const Post = ({post})=> {

   const {deletePost}=useContext(PostList);
  return (
  
      <div className="card post-card">

  <div className="card-body " style={{background:"#D4A59A"}}>
    <h5 className="card-title py-3 "><b>{post.title}</b>
    <span className='position-absolute top-0 start-100 translate-middel badge rounded-pill bg-danger' onClick={()=>deletePost(post.id)}><AiFillDelete/>
    <span className='visually-hidden'>unread message </span></span>
    
    </h5>
    <p className="card-text"   style={{color:"#F3E0DC"}}><b>{post.body}</b>  </p>
  {post.tags.map(tag=><span  key={tag}className='badge mx-4 hashtag'>{tag}</span> )}

  <div className="alert reactions   text-danger"role="alert"    style={{background:"#A1C3D1"}}>
    this post has ben reacted by {post.reaction}people.
  </div>


  
  </div>
</div>
  
  );
};





export default Post;
