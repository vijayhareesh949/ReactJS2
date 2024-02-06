export const Image=()=>{
    const Details={
        Name:'Ms dhoni',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mahendra_Singh_Dhoni_receiving_Padma_Bhushan.jpg/330px-Mahendra_Singh_Dhoni_receiving_Padma_Bhushan.jpg',
        imageAlT:"MsDhoni",
        content:'Mahendra Singh Dhoni (born 7 July 1981) is an Indian professional cricketer. He is a right handed batter and a wicket-keeper. Widely regarded as one of the most prolific wicket-keeper-batsmen and captains, he represented the Indian cricket team and was the captain of the side in limited-overs formats from 2007 to 2017 and in test cricket from 2008 to 2014. Dhoni has captained the most international matches and is the most successful Indian captain with wins in the 2007 ICC World Twenty20, the 2011 Cricket World Cup, the 2013 ICC Champions Trophy and the Asia Cup in 2010, 2016 and 2018. He plays for and captains Chennai Super Kings in the Indian Premier League (IPL). '
  
    }
    const {Name,image,imageALT:altertext,content}=Details
    return(
        <div>
            <h2>{Name}</h2>

         <img
            src={image}
            alt={altertext}
         
            />

         <ul>
           <li>{content}</li>
        

         </ul>
        </div>

    )

}


// export const Images=()=>{
//     const Imagelis={
//         image1:['https://images.pexels.com/photos/2549944/pexels-photo-2549944.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=600']
     


//     }
//     const {image1}=Imagelis
//     return(
//         <div>
// <img
// src={image1[0]}

// />
// <img
// src={image1[1]}    

// />


//         </div>
//     )
// }

















