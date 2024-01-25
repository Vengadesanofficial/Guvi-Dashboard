import { useNavigate } from "react-router-dom";

function TopBar(){
  const navigate= useNavigate()
return(
<div className="main-div">
<div className="nav-bar">
  <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <a className="btn  bg-green-500 text-xl" onClick={()=>navigate("/")} >ALL</a>
    <a className="btn  bg-green-500 text-xl"  onClick={()=>navigate("/FullStack/")}>FULL STACK DEVELOPER</a>
    <a className="btn  bg-green-500 text-xl" onClick={()=>navigate("/DataScience/")}>DATA SCIENCE</a>
    <a className="btn  bg-green-500 text-xl" onClick={()=>navigate("/CyberSecurity/")}>CYBER SECURITY</a>
    <a className="btn  bg-green-500 text-xl" onClick={()=>navigate("/Career/")}>CAREER</a>
  </div>
   

</div>
</div>
</div>






)



}




export default TopBar;