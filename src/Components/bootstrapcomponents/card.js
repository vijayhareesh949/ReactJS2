import ImageCard from './images.jpeg'
function Card(vijay){
    return(
        // console.log(vijay)
        <>
    <div className="card" style={{width:"400px"}}>
  <img className="card-img-top" src={ImageCard}alt="Card image" style={{width:'400px'}}></img>
  <div className="card-body">
    <h4 className="card-title">{vijay.name}</h4>
    <p className="card-text">{vijay.desigination}.</p>
    <a href="#"className="btn btn-primary">see more</a>
  </div>
</div></>
    )
}
export default Card