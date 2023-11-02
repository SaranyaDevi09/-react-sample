
import React,{  Component} from "react";
class Incre extends Component{
    constructor(){
        super();
        this.state={count:0}
    }
    increment()
    {
        this.setState({count:this.state.count+1})
    }
    decrement(){
        this.setState({count:this.state.count-1})
    }
    render(){

        return(
        <div>
            <p>
                count:{this.state.count}
            </p>
            <button onClick={()=>this.increment()}>increment</button>
            <button onMouseOver={()=>this.decrement()}>Decrement</button>

        </div>
        )
    }
}
export default Incre