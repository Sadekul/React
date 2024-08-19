import React from 'react';
// import './App.css';
import Card from './components/Card';
import Data from './data.json'

function App() {

  // console.log(Data[0].title);



  
let items = [];
//data access using loop
// for(let x = 0; x < Data.length; x++){
//   items.push(  <Card key={x} titleText={Data[x].title} descText={Data[x].desc} footerTitle={Data[x].footerTitle} /> )
// }

//data access using maps
items = Data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc} footerTitle={item.footerTitle} />)
 
  return (<div>
       <h1 className="headerStyle">Page Title</h1>
      {items}


      {/* {Data.map((item) => <Card  titleText={item.title} descText={item.desc} footerTitle={item.footerTitle} />)} */}

       {/* <Card  
       titleText={Data[0].title}
       descText={Data[0].desc}
       footerTitle={Data[0].footerTitle}
       />
       <Card 
        titleText={Data[1].title}
        descText={Data[1].desc}
        footerTitle={Data[1].footerTitle}
       />
       <Card 
       titleText={Data[2].title}
       descText={Data[2].desc}
       footerTitle={Data[2].footerTitle}
       /> */}
 </div>
  );
}
export default App;


