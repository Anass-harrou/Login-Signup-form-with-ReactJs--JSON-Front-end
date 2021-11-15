import React from 'react';
import loginImg from "./download.png";
import axios from "axios";
import  {useState} from 'react';
function Login() {
    let user={username : "", password:""};
    const [formval,setval]=useState(user);
    

    const fcn=(d)=>{
        d.preventDefault();
        axios.get("http://localhost:30/users").then(user=>{
            for(let i=0;i<user.data.length;i++){
            if(user.data[i].username==formval.username && user.data[i].password==formval.password){
                console.log(user.data[i].username);
            }
            }
            }
            );
            
   }
  return (
      
    <div className="base-container" >
    <div className="header">Login</div>
    <div className="content">
        {/* <div className="image">
            <img src={loginImg} />
        </div> */}
        <form onSubmit={fcn} className="form">
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="usename" placeholder="username" required onChange={(e)=>setval({username:e.target.value})}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" required onChange={(e)=>setval({password:e.target.value})}/>
            </div>
            <div className="footer">
        <button type="submit" className="btn">Login</button>
    </div>
        </form>
    </div>
   
</div>
);
}

export default Login;
