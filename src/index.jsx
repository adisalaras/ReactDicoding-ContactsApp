// import React from "react";
// import { createRoot } from "react-dom/client";
// import ContactApp from "./ContactApp";

// import '../public/styles/style.css';

// const root=createRoot(document.getElementById('root'));
// root.render(<ContactApp/>);
import React from 'react';
import { createRoot } from 'react-dom/client';
 

function CounterDisplay({count}){
    return <p>{count} </p>
}
function IncreaseButton({increase}){
    return (
        <div>
            <button onClick={increase}>+ increase</button>
        </div>
    )
}

function ResetButton({reset}){
    return (
        <div>
            <button onClick={reset}>Reset bos</button>
        </div>
    )
}

class CounterApp extends React.Component {
    constructor(props){
        super(props);

        this.state={
            count:0
        };
    }
    //event handling saat 
    onIncreaseEvent(){
        this.state((previousState)=>{
            return{
                count: previousState+1
            };
        });
    }
    onResetEvent(){
        this.setState(()=>{
            return{
                count:0
            };
        });
    }
  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEvent} />
        <CounterDisplay count={this.state.count} />
        <ResetButton Reset={this.onResetEvent} />
      </div>
    );
  }
}
 
const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />);
