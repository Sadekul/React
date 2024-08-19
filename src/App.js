import React from 'react';
// import './App.css';
import Card from './components/Card';

function App() {
  return (<div>
       <h1 className="headerStyle">Page Title</h1>
       <Card  
       titleText="This is Title" 
       descText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
       footerTitle="This is Footer"
       />
       <Card 
        titleText="Title 2" 
        descText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        footerTitle="Footer 2"
       />
       <Card 
        titleText="Title 3" 
        descText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        footerTitle="This is Footer 3"
       />
 </div>
  );
}
export default App;


