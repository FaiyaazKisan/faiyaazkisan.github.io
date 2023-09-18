import React, { useEffect, useState } from 'react'
// @ts-ignore
import Home from './Home.tsx'
// @ts-ignore
import Footer from './Layout/Footer.tsx'
// @ts-ignore
import Header from './Layout/Header.tsx'

function App() {
    const[mode, setMode]=useState(localStorage.getItem('mode')??'dark');
    const[bgColor, setBgColor]=useState(localStorage.getItem('bgColor')??'black');
    const[color, setColor]=useState(localStorage.getItem('color')??'white');
    const toggleMode=()=>{
        if(mode==='light'){
            setMode('dark');
            setBgColor('black');
            setColor('white');
        }
        else{
            setMode('light');
            setBgColor('white');
            setColor('black');
        }
    }

    useEffect(()=>{
        localStorage.setItem('mode', mode);
        localStorage.setItem('bgColor', bgColor);
        localStorage.setItem('color', color);

        document.body.style.backgroundColor=bgColor;
        document.body.style.color=color;
    },[toggleMode])
  return (
    <div>
        <Header modeProps={mode} toggleModeProps={toggleMode}/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App