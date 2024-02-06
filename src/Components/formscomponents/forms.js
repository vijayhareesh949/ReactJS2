function Form() {
    const styling={
        alignContent:50,
       backgroundColor:'black',
       color:'blue'
    }
    
    return (
   
        <div>
              <form style={styling}>
                 
                    <label for="fname"/>First name:
                    
                    <input type="text" name="fname"/> <br></br>

                    <label for="lname"/>second name:

                    <input type="text" name="lname"/>
                    </form>
                  
   
        </div>
    )
}
export default Form