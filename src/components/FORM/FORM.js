import React, {useState} from 'react';
import Style from './form.module.css'

export default function FORM() {

const [user, setUser] = useState({name: '', email: '', passward: ''})

//destructuring
const {name, email, passward} = user

//event handeler
const handleChange = (e) => {
  // ...user this is spread operator ... 3dots
  setUser({...user, [e.target.name]: e.target.value});
};

const handleSubmit = (e) =>{
   console.log("form is submitted");

   console.log(user);

    //this line for page not reload or refresh autometically
    e.preventDefault();
}
  return (
    <div>
     <h2> Registration</h2>
     <form action='' onSubmit={handleSubmit}>
       <div className={Style.fromGroup}>
            <label htmlFor="name">Name: </label>
            <input type='text' name='name' id='name' value={name} onChange={handleChange} required />
       </div>
        <div className={Style.fromGroup}>
             <label htmlFor="email">Email: </label>
            <input type='email' name='email' id='email' value={email} onChange={handleChange} required />
        </div>
        <div className={Style.fromGroup}>
             <label htmlFor="passward">Passward: </label>
            <input type='passward' name='passward' id='passward' value={passward} onChange={handleChange} required />
        </div>
        <div>
            <button type='submit'>Register</button>
        </div>
     </form>
    </div>
  )
}
