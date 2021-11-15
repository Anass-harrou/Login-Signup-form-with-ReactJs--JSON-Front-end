import React from 'react';

function Home() {
    const logout=()=>{
        localStorage.removeItem("email");
        localStorage.clear();
    }

  return (
        <div className="base-container" >
        <div className="header">Dashboard</div>
        <div className="xcnn">
            <p>Hello <span className="em">{localStorage.getItem("email")}</span> that the dashboard page.<br /> <a onClick={logout} href="/">Logout</a></p>
            </div>
            <div class="footr">
        <h3>&copy; 2020 - 2021 | Anass</h3>
    </div>
        </div>
        
    )
}

export default Home;