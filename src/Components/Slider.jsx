
import { IoShareSocialSharp } from "react-icons/io5";

const  Slider=({selectedTab,setselectedTab })=> {




  return   <div className="d-flex flex-column flex-shrink-0 p-3  sidebar" style={{width: "250px",background:"#46344E"}}>
        <center className="social"><IoShareSocialSharp /></center>

       
    
 
  <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
  </a>


  <hr/>
  <ul className="nav nav-pills flex-column mb-auto ">
    <li className="nav-item kk"   onClick={()=>{
           // console.log(" create post clicked")
        setselectedTab("Home")}}>{/* activive ko selected bnana hai dynamically */}
      <a  href="#" className= {`nav-link text-white ${selectedTab==="Home"&&"active"}`} aria-current="page">

        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
        Home
      </a>
    </li  >    
    <li   className="kk" onClick={()=>{
        
      //  console.log("  create posty clicked");
        setselectedTab("Create post")}}>
      <a href="#" className=  {`nav-link text-white ${selectedTab==="Create post"&&"active"}`}  >
        <svg className="bi pe-none me-2" width="19" height="16"><use xlinkHref="#speedometer2"></use></svg>
        Create post
      </a>
    </li>
    
  </ul>

  
  <hr/>

</div>;
  }

export default Slider;
