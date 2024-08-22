import React from 'react';
// import Card from './components/Card';
// import Card2 from './components/ClassComponents';
// import Icon from './components/use-react-icon';
import ReactBootstrap from './components/React_Bootstrap/ReactBootstrap';
import STATE from './components/STATE';
import ConditionalRendering from './components/Conditional_Rendering/Index'

function App() {

  return (<div>
       <h1 className="headerStyle">Class Components</h1>
    {/* <Card name="Card Name" desc="this is card"/>
    <Card2 name="Class Copmonents title"/>
    <Icon/> */}
    <ReactBootstrap />
    <STATE />
    <ConditionalRendering />
 </div>
  );
}
export default App;


