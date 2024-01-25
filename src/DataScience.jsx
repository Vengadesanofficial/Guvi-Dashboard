import { useState } from "react"
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";


export default function DataScience(){

const datascience=[

{
    img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers-768x480.webp"/>,
title:"DATA SCIENCE",
Description: "Top 10 High Paying Non-Coding Jobs in Data Science in 2023 ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer--768x480.webp"/>,    
title:"DATA SCIENCE",
Description: "Impact of Certification Programs on Hiring Data Scientists ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design-768x480.webp"/>,
 title:"DATA SCIENCE",
Description: "Top Product-Based Companies for Data Science Freshers ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development-768x480.webp"/>,
 title:"DATA SCIENCE",
Description: "What is the Difference between Data Science and Data Engineering? ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers-768x480.webp"/>,
 title:"DATA SCIENCE",
Description: "Top 10 Data Science Tools in 2023 ",
},
{
 img: <img src="https://cdn.pixabay.com/photo/2017/07/31/11/46/laptop-2557586_640.jpg"/>,
 title:"DATA SCIENCE",
Description: "Best Data Science Books to Learn 2023",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses-768x480.webp"/>,
 title:"DATA SCIENCE",
Description: "Top Product-Based Companies for Data Scientists in 2023",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer--768x480.webp"/>,
 title:"DATA SCIENCE",
Description: "Useful Python Libraries & Tools for Data Science Beginners",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers-768x480.webp"/>,
 title:"DATA SCIENCE",
Description: "Extraordinary Data Science Projects for Beginners As Well as Veterans ",
}

]
const[dataScience,setDataSciemce]=useState(datascience)
const navigate=useNavigate()
return(
<div>
  <div className="">
{/* <button className="btn btn-info" onClick={()=>navigate("/")}>Back to All</button> */}
<TopBar/>

  </div>
<div className="indro"> 
<h3 className="h3">Data Science  : )</h3>
<br></br>
<p className="p">One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration.

The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts</p>
</div>


    
<div className="card-main-div">
     {dataScience && (
    <>
    {dataScience?.map((datascience,idx)=>(

  
<div key={idx} className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>{datascience.img}</figure>
  <div className="card-body">
    <h2 className="card-title">{datascience.title}</h2>
    <p>{datascience.Description}</p>
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














