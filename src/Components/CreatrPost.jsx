import { useContext, useRef } from "react";


import { PostList } from "../store/create-store-post";

const CreatrPost = () => {

  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();



  const handlesubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const PostBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    tagsElement.current.value = "";
    reactionsElement.current.value = "";


    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {


          title: postTitle,
          body: PostBody,
          reactions: reactions,
          userId: userId,
          tags: tags,
        }),

    })
      .then(res => res.json())
      .then(post=>addPost(post));

  };

  return <form className="crete-post p-4" onSubmit={handlesubmit}>
    <center className="fs-5 mb-5"><h1>Write the post here:-</h1></center>
    <div className="mb-3">


      <label htmlFor="userId" className="form-label fs">Enter your user  Id here</label>
      <input type="text" ref={userIdElement} className="form-control" id="user
      Id" placeholder="your user id " />

    </div>
    <div className="mb-5">
      <label htmlFor="title" className="form-label fs">post title</label>
      <input type="text" ref={postTitleElement} className="form-control" rows="5" id="title" placeholder="how are u feeling today" />

    </div>


    <div className="mb-5">
      <label htmlFor="body" className="form-label fs">post content</label>
      <textarea type="text" ref={postBodyElement} className="form-control" id="body" placeholder="tells us more about it" />

    </div>

    <div className="mb-5">
      <label htmlFor="reactions" className="form-label fs">Number of reaction</label>
      <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="how many peole reaction to this post" />

    </div>



    <div className="mb-5">
      <label htmlFor="tags" className="form-label  fs">enter your hashtag here</label>
      <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="please enter tag using this space" />

    </div>
    
    <button type="submit" className="btn fss ">Create_post</button>
  </form>
}
export default CreatrPost;
