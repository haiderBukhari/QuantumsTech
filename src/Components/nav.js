import '../style.css'
import Logo from '../assets/logo.png'
import signature from '../assets/my_signature_cocosign.png'
import { useState } from 'react'
import './animated.css'
export const Nav = () => {
    let [show, setshow] = useState(false);
    function handleshow() {
        setshow(!show);
    }
    return (
        <nav class="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-white ap-pa">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img class="logo img-logo" src={Logo} alt="" />
                    <img class="logo mr-2" src={signature} alt="" />
                </a>
                <button onClick={handleshow}  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon set-time"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto m-center">
                        <li class="nav-item">
                            <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#features">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#join">Join Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#team">Team</a>
                        </li>
                    </ul>
                    <a href="#contact">
                        <button class="btn btn-primary ms-lg-3">Contact Us</button>
                    </a>
                </div>
            </div>
            {
                show && <div class="showit" id="navbarNav">
                    <ul class="navbar-nav ms-auto showit1">
                        <li onClick={()=>{setshow(false)}} class="nav-item">
                            <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li onClick={()=>{setshow(false)}} class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li onClick={()=>{setshow(false)}} class="nav-item">
                            <a class="nav-link" href="#features">Features</a>
                        </li>
                        <li onClick={()=>{setshow(false)}} class="nav-item">
                            <a class="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li onClick={()=>{setshow(false)}} class="nav-item">
                            <a class="nav-link" href="#join">Join Us</a>
                        </li>
                        <li onClick={()=>{setshow(false)}} class="nav-item">
                            <a class="nav-link" href="#team">Team</a>
                        </li>
                    </ul>
                    <div onClick={()=>{setshow(false)}} className='cont-dive'>
                    <a href="#contact cont1">
                        <button class="btn btn-primary ms-lg-3 cont2">Contact Us</button>
                    </a>
                    </div>
                </div>
            }
        </nav>
    )
}
