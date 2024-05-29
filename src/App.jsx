
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Slider from './Components/Slider';
import CreatrPost from './Components/CreatrPost';
import ListPoat from './Components/ListPoat';
import { useState } from 'react';
import PostListProvider from './store/create-store-post';
function App() {

  const [selectedTab, setselectedTab] = useState("Home")


  return (

    <PostListProvider>
    <div className="app-container">

      <Slider selectedTab={selectedTab} setselectedTab={setselectedTab}></Slider>

      <div className='content'>

       <Header></Header>
        {selectedTab === "Home" ? (<ListPoat></ListPoat>
        ) : (<CreatrPost></CreatrPost>)}

        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
