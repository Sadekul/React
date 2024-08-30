import React from 'react';

import Child from './components/STATE_LIFTING/Child';

const App = () =>{

  const data = "I am from parent (app)"

const handleChildData = (childData) => {
  console.log("App: " + childData);
}
  return (
    <div className='parent'>
           <h1 className="headerStyle">passing data from child to parent component</h1>
        

        <Child data={data} onChildData={handleChildData}/>
    </div>
  )
}
export default App;


