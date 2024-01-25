import { useState } from "react"
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";


export default function CareerStatus(){

const careerstatus=[

{
    img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers-768x480.webp"/>,
title:"CAREER",
Description: "Top 5 Product-Based Companies That Don’t Require Coding ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide-768x480.webp"/>,    
title:"MACHINE LEARNING",
Description: "Machine Learning Engineer Resume Guide: 11 Important Things To Include! ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Mechanical-Engineering-Resume-Important-Things-To-Look-Out-For-768x480.webp"/>,
 title:"ENGINEERING RESUME",
Description: "Mechanical Engineering Resume: 9 Important Things To Look Out For ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-1536x804.webp"/>,
 title:"BLOCK CHAIN DEVELOPER",
Description: "Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/1-1536x804.webp"/>,
 title:"ETHICAL HACKER",
Description: "A Compelling Ethical Hacker Resume: 10 Tips and Tricks to Follow ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers-768x480.webp"/>,
 title:"PRODUCT BASED COMPANY",
Description: "Best 11 Product-Based Companies for Product Managers in India",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers-768x480.webp"/>,
 title:"AI FRESHERS",
Description: "Top 13 Product Based Companies for AI Freshers",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers-768x480.webp"/>,
 title:"UI/UX DESIGNER",
Description: "Top 8 Product-based Companies for UI/UX Designers [Freshers]",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Product-Based-Companies-for-Game-Developers-768x480.webp"/>,
 title:"GAME DEVELOPER",
Description: "Best Product-Based Companies for Game Developers in 2023 ",
}

]
const[careerStatus,setCareerStatus]=useState(careerstatus)
const navigate=useNavigate()
return(
<div>
 < div className="">
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
     {careerStatus && (
    <>
    {careerStatus?.map((careerstatus,idx)=>(

  
<div key={idx} className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>{careerstatus.img}</figure>
  <div className="card-body">
    <h2 className="card-title">{careerstatus.title}</h2>
    <p>{careerstatus.Description}</p>
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














