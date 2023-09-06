import React from 'react';
import './App.css';
import { Navbar } from "../Navbar/Navbar";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { RockCounter } from "../RockCounter/RockCounter";
import { RockList } from "../RockList/RockList";

function App() {
    return (
        <div>
            <Navbar/>
            <header>
                <h1>React Rock Pickers</h1>
            </header>
            <ProfilePage/>
            <RockList />
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
