

export const Jsx=()=>{

const obj={
    Name:'vijay hareesh',
    age:24,
    place:'ramachandrapuram'

}
const {Name,age,place}=obj
return(
    <>

    <h1>{Name}</h1>
    <h2>{age}</h2>
    <h3>{place}</h3>
    </>
)

}

export const Jsxarray=()=>{
    const arr=[
        'https://images.pexels.com/photos/2048434/pexels-photo-2048434.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3401285/pexels-photo-3401285.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        'https://images.pexels.com/photos/1553962/pexels-photo-1553962.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    ]
    const {image1,image2,image3}=arr
    return(
<>
<img 
src={arr[0]}
/>
<img 
src={arr[1]}

/>
<img 
src={arr[2]}
/>
</>


    )
}