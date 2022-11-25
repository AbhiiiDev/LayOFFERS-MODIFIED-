import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';
import Login from './Components/Login'
import { useSelector} from 'react-redux'

import { selectUser } from './features/userSlice';
function App() {
  const user = useSelector(selectUser)
  return (
    
  
    <div className="App">
      {user?<Login/>:(
        <>
        <Header/>
              <div className="app_body">
                
              <Sidebar/>
              <Feed/>
              <Widgets/>
         </div>
         </>
      )}
      

    </div>
      
  );
}

export default App;
