import React, { SyntheticEvent } from "react";

class Checkout extends React.Component{
    state = { name: "" , email: ""};
    emailRef: any = null;
    componentDidMount():void{
        if (this.emailRef){
            this.emailRef.focus();
        }
    }
    saveData(e: SyntheticEvent){
        e.preventDefault();
        console.log("checkout Submitted", this.state, this.emailRef.value);
    }
    render() {
        return(
            <form onSubmit={(ev)=>this.saveData(ev)}>
                {/* Controlled Behaviour */}
                <input type="text" 
                placeholder="Name"
                onChange={(e)=> this.setState({name:e.target.value})}
                ></input>
                {this.state.name === ""? <small>Name is required</small>: null}
                {/* UnControlled Behaviour */}
                <input type="text" 
                placeholder="Email" 
                ref={(r)=>(this.emailRef = r)}
                onChange={(e)=> this.setState({email:e.target.value})}>
                
                </input>

                {this.state.email === ""? <small>Email is required</small>: null}
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Checkout