import './App.css';
import React, { useState, createContext } from 'react';
import UserChanger from './UserChanger';

export const UserContext = createContext();

function App() {
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <UserContext.Provider value={{ userName, setUserName}}>
        <div>App.js: username = {userName}</div>
        <UserChanger />
      </UserContext.Provider>
    </div>
  );
}

export default App;
