import React from 'react';

const users = [
  {
    name: "Hasan",
    occupation: "Job",
    age: "30",
    phones: [
      {home: "01711555828"},
      {office: "1052556252"},
    ]
  },
  {
    name: "Sadekul Islam",
    occupation: "Job",
    age: "29",
    phones: [
      {home: "45812152"},
      {office: "75965212"},
    ]
  }
  
]

function App() {

  return (<div>
       <h1 className="headerStyle">Nested Lists</h1>
     {
       users.map((user, index)=> (
       <article key={index}>
       <h3>Name: {user.name}</h3> 
       <p>Occupation: {user.occupation}</p> 
       <p>Age: {user.age}</p>
       
       {user.phones.map((phone, index)=>(
        <div key={index}>
          <p>{phone.home}</p>
          <p>{phone.office}</p>
        </div>
       ))}
       </article>
      ))}
 
 </div>
  );
}
export default App;


