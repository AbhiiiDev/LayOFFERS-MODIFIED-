import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  
  return (
    <div className="App">

      <Header/>
      <div className="app_body">
           <Sidebar/>
      <Feed/>
      </div>
    </div>
  );
}

export default App;
