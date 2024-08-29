import React from 'react';
import Assignment2 from './components/Assignment2/Assignment2'
// import Card from './components/Card';
// import Card2 from './components/ClassComponents';
// import Icon from './components/use-react-icon';
// import ReactBootstrap from './components/React_Bootstrap/ReactBootstrap';
// import STATE from './components/STATE';
// import ConditionalRendering from './components/Conditional_Rendering/Index'
// import Event_Handeler_Class from './components/Event_Handeler_Class';

// import HOOKS_USESTATE1 from './components/HOOKS_USESTATE/index1'
// import HOOKS_USESTATE2 from './components/HOOKS_USESTATE/index2'

// function App() {

//   return (<div>
//        <h1 className="headerStyle">update state based on previous state</h1>
//     {/* <Card name="Card Name" desc="this is card"/>
//     <Card2 name="Class Copmonents title"/>
//     <Icon/> */}
//     {/* <ReactBootstrap />
//     <STATE />
//     <ConditionalRendering /> */}
//     {/* <Event_Handeler_Class /> */}
// <HOOKS_USESTATE1/>
// <HOOKS_USESTATE2/>
//  </div>
//   );
// }

const App = () =>{
  // const handleParentClick = (event) =>{
  // console.log("Parent event: ", event);
  // }

  // const handleChildClick = (event) =>{
  //   event.stopPropagation();
  //   console.log("Child event: ", event);
  //   }


  return (
    <div className='parent'>
           <h1 className="headerStyle">Assignment-2</h1>
           <Assignment2 />
           {/* <button onClick={handleChildClick}>+</button> */}

    </div>
  )
}
export default App;


