import React from 'react';
import loginImg from "./download.png";

function Home() {
  return (
    <div className="base-container" >
    <div className="header">Dashboard</div>
    <div className="content">
        {/* <div className="image">
            <img src={loginImg} />
        </div> */}
        <form className="form">
            <div className="form-group">
               
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
                <p>Hello username that the dashboard page, you don't need to login again<a href="">Logout</a></p>
            </div>
        </form>
    </div>
</div>
);
}

export default Home;