import React from 'react';
import Card from './components/Card';
import Card2 from './components/ClassComponents';

function App() {

  return (<div>
       <h1 className="headerStyle">Class Components</h1>
    <Card name="Card Name" desc="this is card"/>
    <Card2 name="Class Copmonents title"/>
 </div>
  );
}
export default App;


