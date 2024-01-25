import { useState } from "react"
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
export default function FullstackDeveloper(){

const fullstack=[

{
    img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers-768x480.webp"/>,
title:"FULL STACK DEVELOPER",
Description: "Top Ways to Assess Soft Skills in Full Stack Developers in 2023 ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer--768x480.webp" />,    
title:"FULL STACK DEVELOPER",
Description: "Top Differences: Full Stack Developer vs Software Engineer 2023 ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design-768x480.webp" />,
 title:"FULL STACK DEVELOPER",
Description: "Horizontal vs Vertical Scaling for Efficient System Design ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development-768x480.webp" />,
 title:"FULL STACK DEVELOPER",
Description: "Best Books to Learn Full-Stack Development ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers-768x480.webp" />,
 title:"FULL STACK DEVELOPER",
Description: "Top 10 Product-Based Companies for Full-Stack Developers [2023] ",
},
{
 img: <img src="https://cdn.pixabay.com/photo/2017/07/31/11/46/laptop-2557586_640.jpg" />,
 title:"FULL STACK DEVELOPER",
Description: "7 Best Full-Stack Development Online Courses [2023]",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses-768x480.webp" />,
 title:"DATA SCIENCE",
Description: "The Top 10 Tools Every Full-Stack Developer Should Master in 2023",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer--768x480.webp" />,
 title:"FULL STACK DEVELOPER",
Description: "The Ultimate Guide to Real-World Full-Stack Development Applications",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design-768x480.webp"/>,
 title:"FULL STACK DEVELOPER",
Description: "Best Ways to Learn Full Stack Development in 2023 ",
}

]
const[fullStack,setFullStack]=useState(fullstack)
const navigate=useNavigate()
return(
  
<div>
  
  <div className="">
{/* <button className="btn btn-info" onClick={()=>navigate("/")}>Back to All</button> */}
  <TopBar/>
  </div>
  
<div className="indro"> 
<h3 className="h3">Full Stack Development  : )</h3>
<br></br>
<p className="p">Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!

The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>
</div>



<div className="card-main-div">
     {fullStack && (
    <>
    {fullStack?.map((fullstack,idx)=>(

  
<div key={idx} className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>{fullstack.img}</figure>
  <div className="card-body">
    <h2 className="card-title">{fullstack.title}</h2>
    <p>{fullstack.Description}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>



    ))}
    </>
   )

   }
</div>



 









</div>






)

}














