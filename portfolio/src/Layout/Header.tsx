import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand ms-3" href="#">Faiyaaz Kisan</a>
  <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ms-4">
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
      </ul>
  </div>
</nav>
  )
}

export default Header