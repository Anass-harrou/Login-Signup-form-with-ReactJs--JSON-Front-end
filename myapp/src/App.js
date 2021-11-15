import React from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';
import Login from './login';
import Register from './Register';
import Nav from './Nav';
import './styles.css'
import Home from './home';


class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    {
      (!localStorage.getItem("email"))?(
        <div className="App">
        <Nav />
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
    </div>
      ):(
        <Home />
      )
    }
    </BrowserRouter>
  );

}}

export default App;
