import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TopBar from "./TopBar";



export default function CyberSecurity(){

const cybersecurity=[

{
    img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp"/>,
title:"CYBER SECURITY",
Description: "What Is Hacking? Types of Hacking & More ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design-768x480.webp"/>,    
title:"CYBER SECURITY",
Description: "Cybersecurity Vs Ethical Hacking: Top 10 Differences ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design-768x480.webp"/>,
 title:"CYBER SECURITY",
Description: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023! ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design-768x480.webp"/>,
 title:"CYBER SECURITY",
Description: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023! ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp"/>,
 title:"CYBER SECURITY",
Description: "8 Different Types of Cybersecurity and Threats Involved ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp"/>,
 title:"CYBER SECURITY",
Description: "Top 7 Cyber Security Attacks in Real Life",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp"/>,
 title:"CYBER SECURITY",
Description: "The Ultimate Cybersecurity Roadmap for Beginners",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design-768x480.webp"/>,
 title:"CYBER SECURITY",
Description: "How Is Cyber Security Important To Our Lives?",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp"/>,
 title:"CYBER SECURITY",
Description: "Extraordinary Data Science Projects for Beginners As Well as Veterans ",
}

]
const[cyberSecurity,setCyberSecurity]=useState(cybersecurity)
const navigate=useNavigate()
return(
<div>

  <div className="">
{/* <button className="btn btn-info" onClick={()=>navigate("/")}>Back to All</button> */}
<TopBar/>


  </div>

   <div>
<div className="carousel rounded-box">
  <div className="carousel-item">
    <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-1536x340.webp" alt="Burger" />
  </div> 
</div>
</div>



<div className="card-main-div">
     {cyberSecurity && (
    <>
    {cyberSecurity?.map((cybersecurity,idx)=>(

  
<div key={idx} className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>{cybersecurity.img}</figure>
  <div className="card-body">
    <h2 className="card-title">{cybersecurity.title}</h2>
    <p>{cybersecurity.Description}</p>
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














