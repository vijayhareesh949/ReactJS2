import { Component } from "react";

class Childern extends Component{
    render(){
        return(
            <button onClick={()=>this.props.handleIncrementMethod(3)}>increment </button>
        )
    }
}
export default Childern