import React from "react";

class Demo extends React.Component{
    state= { location: "A", count: 1};
    shouldComponentUpdate(nextProps: any, nextState:any): boolean{
        console.log("ShouldComponentUpdate");
        return this.state.location !== nextState.location || nextState.count === 6;   }
    //every component must have a render method
    render() {
        console.log("Render", this.state);
        //every render must return something
        //each render should retuyrn single html
        //{} are called jsx expression which can be used to call any const, variable
        const name = "varun";
        return (
        <div>
        <h1>Demo Component</h1>
        <p> some more content</p>
        {this.state.count >5 ? <p>Hello from <>{name.toUpperCase()}</></p>: null}
        <button onClick={()=>this.setState({count:this.state.count + 1})}>Increment</button>
        <h2>{9+10}</h2>
        <button onClick={() => this.setState({ location: "A" })}>A</button>
        <button onClick={() => this.setState({ location: "B" })}>B</button>
        
        </div>
        );
    }   
}

export default Demo;