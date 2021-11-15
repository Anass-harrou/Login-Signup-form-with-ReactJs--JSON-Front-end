import React from 'react';
import axios from "axios"

class Register extends React.Component {
    
    state={
        username:'',
        password:"",
        email:''
    }

    // const [errors,setError]=useState({});
    // const [formValues, setFormValues] = useState(user)

   fcn=(e)=>{
		 e.preventDefault();
        axios.post("http://localhost:30/users",this.state)
        .then(alert("You account has been created"))
        // setError(Valider(formValues));
    }

   

    // const Valider=(values)=>{
    //     let error={};
    //     if(!values.username){
    //         error.username="user Name Required !!!!";
    //     }
    //     if(!values.password){
    //         error.password="password Required !!!!";
    //     }
    //     if(!values.email){
    //         error.email="email Required !!!!";
    //     }
    //     return error;
    // }
    render(){
		
        return (
            <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                {/* <div className="image">
                    <img src={loginImg} />
                </div> */}
                <form onSubmit={this.fcn} className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="usename" placeholder="username" required onChange={(e)=>this.setState({username:e.target.value})} value={this.state.username}/>
                        {/* <span className="err">{errors.username}</span> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" required onChange={(e)=>this.setState({email:e.target.value})} value={ this.state.email}/>
                        {/* <span className="err">{errors.email}</span> */}
                   
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" required onChange={(e)=>this.setState({password:e.target.value})} value={ this.state.password}/>
                        {/* <span className="err">{errors.password}</span> */}
                    
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn">Register</button>
                    </div>
                   
                </form>
                
            </div>
            </div>
        
  );
}
}

export default Register;
