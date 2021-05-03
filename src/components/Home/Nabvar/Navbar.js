import React from 'react';
import logo from '../../../images/my-name1.png'
import './Nab.css'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src={logo} alt ="" height="80px" width ="120px"/> </a>
    <button class="navbar-toggler box" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-white"> == </span>
    </button>
    <div class="collapse navbar-collapse text-white" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item style">
                <a class="nav-link ms-5 active text-white nav-Style" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item style">
                <a class="nav-link ms-5 active text-white nav-Style" aria-current="page" href="/project">Project</a>
              </li>
              <li class="nav-item style">
                <a class="nav-link ms-5 active text-white nav-Style" aria-current="page" href="/blogs">Blogs</a>
              </li>
             
              <li class="nav-item">
                <a class="nav-link ms-5 active text-white nav-Style" aria-current="page" href="/about">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5 active text-white nav-Style" aria-current="page" href="/contact">Contact</a>
              </li>
            </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;