import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Navbar } from "../Navbar/Navbar";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { RockCounter } from "../RockCounter/RockCounter";

function App() {
    return (
        <div>
            <Navbar/>
            <header>
                <h1>React Rock Pickers</h1>
            </header>
            <ProfilePage/>
            <h2>Luke</h2>
            <RockCounter />
            <h2>JJ</h2>
            <RockCounter />
            <h2>Sam</h2>
            <RockCounter />
            <h2>Pete</h2>
            <RockCounter />
        </div>
    );
}

export default App;
