
import React  from 'react'

export default function Sign() {
   
  


   
   
    
    

    
  return (
   <div className="section5">
    <h3 className="heading5">About  Us</h3> 
    <h6 className="log"> Already have an account? <b>log in</b> </h6>
    <form>
      <div className="container">

        <h4 className="Account"> Create Account</h4> 
        <div className="form">
        
        <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

   
     <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    
    
    <label for="psw-repeat"><b>Confirm Password</b></label>
    <input type="password" placeholder="Confirm Password" name="psw-repeat" required/>
    </div>
    <button className="signbutton"> Sign Up for more access</button>
  

      </div>

    </form>
  
   


   </div>
  )
  }


