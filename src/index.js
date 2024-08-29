import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Sidenav from './sidenav';
import Header from './Header';
import Card from './Card';

function Student(){
  return(
    <div>
       <Sidenav/>
       <Header/>
       <Card/>
    </div>
  )
}
ReactDOM.render(<Student/>,document.getElementById("root"));