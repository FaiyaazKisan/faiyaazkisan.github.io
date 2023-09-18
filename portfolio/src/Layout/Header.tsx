import React, { useState } from 'react'

function Header(props) {
  // const [style, setStyle]=useState({
  //   color:'black',
  //   backgroundColor:'white',
  //   border:''
  // })
  // const[BtnText, setBtnText]=useState("Enable Dark Mode");

  // const ToggleStyle=()=>{
  //   if(style.color ==='black'){
  //   setStyle({
  //     color:'white',
  //     backgroundColor:'black',
  //     border:'1px solid white'
  //   })
  //   setBtnText("Enable Light Mode");
  // }
  // if(style.color ==='white'){
  //   setStyle({
  //     color:'black',
  //     backgroundColor:'white',
  //     border:''
  //   })
  //   setBtnText("Enable Dark Mode");
  // }
  // }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.modeProps} bg-${props.modeProps}`}>
  <a className="navbar-brand ms-3" href="#">Faiyaaz Kisan</a>
  <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ms-4 w-100">
      <li className="nav-item active">
        <a className="nav-link" href="#Home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#qualification">Qualification</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Resume">Resume</a>
      </li>
      <div className={`form-check form-switch text-${props.modeProps==='dark'?'light':'dark'} ms-auto mt-2 me-2`}>
      <input onChange={props.toggleModeProps} className="form-check-input" style={{cursor:"pointer"}} type="checkbox" id="flexSwitchCheckDefault" checked={props.modeProps==='light'}/>
      <label className="form-check-label" style={{cursor:"pointer"}} htmlFor="flexSwitchCheckDefault">{props.modeProps==='dark'?'Enable':'Disable'} Light Mode</label>
      </div>
      </ul>
  </div>
</nav>
  )
}

export default Header