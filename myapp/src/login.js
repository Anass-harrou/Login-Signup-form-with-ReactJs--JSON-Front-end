import React,{ Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { SetStateAction } from 'react';



class Login extends Component {
    state={username : "", password:""};
    
    fcn=(e)=>{
        var v=false;
        e.preventDefault();
        axios.get("http://localhost:30/users")
        .then(user=>{
                user.data.map(us=>{
                    if(us.username===this.state.username && us.password===this.state.password){
                        
                        localStorage.setItem("email",us.email);
                        window.location.reload();
                                        } 
                });
            }

        );
        console.log(this.state.username,this.state.password)       
   }

    render(){
    return (
        
        <div className="base-container" >
        <div className="header">Login</div>
            <form onSubmit={this.fcn} className="form">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="usename" placeholder="username" required onChange={(e)=>setState({username:e.target.value})}/>
                
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" required onChange={(e)=>setState({password:e.target.value})}/>
                
                <button type="submit" className="btn">Login</button>
            </form>
    
        </div>
        );
    }
}

export default  Login;