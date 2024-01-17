import React from 'react'
 export default class Form extends React.Component{
render(){
return(
    <>
    {/* right side image */}
    <div className='image'>
        <img src="https://cdn.pixabay.com/photo/2022/12/01/04/40/backpacker-7628303_1280.jpg" alt="login" />
    </div>
     {/* left side form */}
    <form className="form">
        <h1 className='heading'>Explore Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, nobis.</p>
        <div className='mail'>
            <input type="email" placeholder='Email'/>
            {/* icon */}
            <i className="fa-regular fa-envelope" ></i>
         
        </div>
        <div className='password'>
            <input type="password" placeholder='Password'/>
            {/* icon */}
            <i className="fa-solid fa-lock" ></i>
        </div>
        <input type="submit" value="login" className='login-btn'/>
        <button>Sign In with Google  <i className="fa-brands fa-google" style={{color: "#EA4335",fontSize:"18px",fontWeight:"bolder"}}></i> </button>
        <button>Sign In with Github  <i className="fa-brands fa-github" style={{color: "#000000",fontSize:"20px"}}></i> </button>
        <div className='signup'>
            <p>don't have an account yet ? <a href='#'>Sign Up</a></p>
          
        </div>
    </form>
</>
)}
}
