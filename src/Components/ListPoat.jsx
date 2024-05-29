
import { useContext} from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/create-store-post"
import WelcomeMassge from "./WelcomeMassge";
import LodingSpinner from "./LodingSpinner";



const ListPoat = () => {


  const { postList, fetching} = useContext(PostListData);


  //use a pro useEffect in our code 


  /*useEffect(() => {
    
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

  }, []);*/











  /*useEffect(() => {


    setFetching(true);

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {

        addInitialPosts(data.posts);
        setFetching(false);

      });

    return () => {
      console.log("cleening up using efect ");
    }

  }, []);
  ese use kr skte hai [] parameter *empty 

  jab mera listpoat m agr change kre to  to dobare data fetch nhi hone chiye baar run n ho issliy use state k use krege*/





  return (
    <>

      {fetching && <LodingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMassge />}

      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}

    </>
  );
};

export default ListPoat;
