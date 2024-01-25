import { useState } from "react"



export default function AllDetail(){

const carddata=[

{
    img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp"/>,
title:"Data Science",
Description: "Top 10 Non-Coding Jobs in Data Science",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Interviewing-Techniques-for-Technical-Skill-Assessment-feature-image.webp"/>,    
title:"Tachnical skill Assesment",
Description: "Importance of Technical Skills ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-1536x804.webp"/>,
 title:"Cloud-Computing",
Description: "Top 10 High Paying Cloud-Computing Jobs without Coding ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp"/>,
 title:"High Paying...",
Description: "Top High-Paying Non-Coding Jobs in DevOps [2023 ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp"/>,
 title:"15-Product companies",
Description: "Best 15 Product-based Companies for IoT Solutions Architects ",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp"/>,
 title:"Non-Coding",
Description: "Top Product-Based Companies that Don’t Require Coding",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-1-1-1536x804.webp"/>,
 title:"UI/UX",
Description: "General Tips to Make Your UI/UX Designer Resume Stand Out",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp"/>,
 title:"Frame Work",
Description: "Kanban vs. Scrum: Choosing the Right Agile Framework for Your Project",
},
{
 img: <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Interviewing-Techniques-for-Technical-Skill-Assessment-feature-image.webp"/>,
 title:"React",
Description: "Key Differences Between React, Angular, and Vue ",
}

]
const[cardData,setCardData]=useState(carddata)

return(
<div>

<div className="card-main-div">
     {cardData && (
    <>
    {cardData?.map((carddata,idx)=>(

  
<div key={idx} className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>{carddata.img}</figure>
  <div className="card-body">
    <h2 className="card-title">{carddata.title}</h2>
    <p>{carddata.Description}</p>
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