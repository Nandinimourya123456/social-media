import { createContext, useReducer ,useState,useCallback,useEffect} from "react";

export const PostList = createContext({

    postList: [],
    addPost: () => { },
    fetching:false,
    deletePost: () => { },

});



const postListReducer = (currPostList, action) => {

    let newPostList = currPostList;

    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)


    }

    else if (action.type === 'ADD_POST') {

        newPostList = [action.payload, ...currPostList]
    }


    
    else if (action.type === 'ADD_INITIAL_POST') {
        newPostList=action.payload.posts;

    }

    return newPostList;
};






const PostListProvider = ({ children }) => {



    const [postList, disptachPostList] = useReducer(postListReducer, []);


   
  


    const addPost = (post) => {

        disptachPostList({

            type: 'ADD_POST',
            payload:post,
        });

    };

    //addintial post

    const addInitialPosts = (posts) => {

        disptachPostList({

            type: 'ADD_INITIAL_POST',
            payload: {

                posts

            },
        });

    };


    const deletePost =useCallback((postId) => {


        disptachPostList({

            type: 'DELETE_POST',

            payload: {
                postId,
            },

        });
    },[disptachPostList]);






    const [fetching, setFetching] = useState(false);

    //use a pro useEffect in our code 
  
  
    useEffect(() => {
      
      setFetching(true);
      const controller = new AbortController();
      const signal = controller.signal;
  
  
      fetch(`https://dummyjson.com/posts`, { signal })
        .then((res) => res.json())
        .then((data) => {
  
          addInitialPosts(data.posts);
          setFetching(false);
  
        });
  
      return () => {
        console.log("cleening up using efect ");
  
        controller.abort();
      };
  
    }, []);
  
    return (<PostList.Provider value={{
        postList,
        fetching,
        addPost,
        deletePost,
    }}
    > {children}</PostList.Provider>

    );
};



export default PostListProvider;