


import Card from "./card"
function Bootstrap(){
    return(
        <><div className="container-fluid p-5 bg-primary text-white text-center">
             
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p> 
      </div>
        
      <div className="container mt-5">
        <div className="row">
        <Card  name="nithin" desigination ="ceo" />
          <div className="col-sm-4">
       <Card name ="vijay" desigination="manager"/>
          </div>
         
          <div className="col-sm-4">
          <Card name="sai" desigination="employee"/>
               
          </div>
        </div>
      </div></>
    )
}
export default Bootstrap

// props