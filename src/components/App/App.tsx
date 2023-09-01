import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {Navbar} from "../Navbar/Navbar";
import {ProfilePage} from "../ProfilePage/ProfilePage";

function App() {
  return (
    <div>
      <Navbar />
      <header>
        <h1>React Rock Pickers</h1>
      </header>
      <ProfilePage />
    </div>
  );
}

export default App;
