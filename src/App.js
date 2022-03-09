import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Student from './Student'

function App() {
  
  return (
    <div className="App">

     <h1>Props in React :)</h1>

     <Student name={"user"} email="guruva@gmail.com"/>
     <Student name={"ramesh"} email="user@gmail.com" />
     <Student name={"kishore"} email="kishore@gmail.com" />


    </div>
  );
}

export default App;