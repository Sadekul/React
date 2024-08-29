import React, {useState} from 'react';
import Style from './form.module.css'

export default function FORM() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [passward, setPassword] = useState('');

const handleNameChange = (e) =>{
   setName(e.target.value);
}

const handleEmailChange = (e) =>{
    setEmail(e.target.value);
}

const handlePasswardChange = (e) =>{
   setPassword(e.target.value)
}
const handleSubmit = (e) =>{
    console.log("form is submitted");

   let userInfo = {
//property and value same thakle dui bar likher dorkar nai
// Ex: name: name, = name,

    // name : name,
    // email : email,
    // passward : passward
        name,
        email,
        passward
   }

   console.log(userInfo);

    //this line for page not reload or refresh autometically
    e.preventDefault();
}


  return (
    <div>
     <h2> Registration</h2>
     <form action='' onSubmit={handleSubmit}>
       <div className={Style.fromGroup}>
            <label htmlFor="name">Name: </label>
            <input type='text' name='name' id='name' value={name} onChange={handleNameChange} required />
       </div>
        <div className={Style.fromGroup}>
             <label htmlFor="email">Email: </label>
            <input type='email' name='email' id='email' value={email} onChange={handleEmailChange} required />
        </div>
        <div className={Style.fromGroup}>
             <label htmlFor="passward">Passward: </label>
            <input type='passward' name='passward' id='passward' value={passward} onChange={handlePasswardChange} required />
        </div>
        <div>
            <button type='submit'>Register</button>
        </div>
     </form>
    </div>
  )
}
