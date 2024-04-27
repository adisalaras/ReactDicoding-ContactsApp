import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./ContactApp";

import '../public/styles/style.css';

const root=createRoot(document.getElementById('root'));
root.render(<ContactApp/>

);
// import React from 'react';
// import { createRoot } from 'react-dom/client';

 

// function CounterDisplay({count}){
//     if(count === 0){    
//         return <p>{count}</p>;
//     }

//     if(count % 5 === 0 && count % 7===0)
//     {
//         return <p>FizzBuzz</p>;
//     }
//     if(count % 5 === 0){
//         return <p>Fizz</p>;
//     }
//     if(count % 7 === 0){
//         return <p>Buzz</p>
//     }

//     return <p>{count}</p>

// }
// function IncreaseButton({increase}){
//     return (
//         <div>
//             <button onClick={increase}>+ increase</button>
//         </div>
//     );
// }

// function ResetButton({reset}){
//     return (
//         <div>
//             <button onClick={reset}>Reset bos</button>
//         </div>
//     );
// }



// class CounterApp extends React.Component {
//     constructor(props){
//         super(props);
//         //inisialisasi nilai count ada didalam state
//         this.state={
//             count:0
//         };
//         this.onIncreaseEvent=this.onIncreaseEvent.bind(this);
//         this.onResetEvent=this.onResetEvent.bind(this);
//     }
//     //event handling saat 
//     onIncreaseEvent(){
//         this.setState((previousState)=>{
//             return{
//                 count: previousState.count + 1
//             };
//         });
//     }
//     onResetEvent(){
//         this.setState(()=>{
//             return{
//                 count: 0
//             };
//         });
//     }
//   render() {
//     return (
//       <div>
//         <IncreaseButton increase={this.onIncreaseEvent} />
//         <CounterDisplay count={this.state.count} />
//         <ResetButton reset={this.onResetEvent} />
        
//       </div>
//     );
//   }
// }
 
// const root = createRoot(document.getElementById('root'));
// root.render(<CounterApp />);
