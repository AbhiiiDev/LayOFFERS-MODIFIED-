import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';
import Login from './Components/Login'
import {Provider} from 'react-redux'
import store from './app/store'
function App() {
  
  return (
    
    <Provider store={store}>
    <div className="App">
<Login/>
      <Header/>
      <div className="app_body">
           <Sidebar/>
           <Feed/>
           <Widgets/>
      </div>
    </div>
    </Provider>
      
  );
}

export default App;
