import React from 'react';
import './CSS/style.css'
// // @ts-ignore
// const DotNetCoreLogo=require('../src/Images/DotNetCoreLogo.svg').default;
// // @ts-ignore
// const ReactLogo=require('../src/Images/ReactLogo.svg').default;
// // @ts-ignore
// const bootstrapLogo=require('../src/Images/bootstrapLogo.svg').default;
// @ts-ignore
const ChatOnWhatsapp=require('../src/Images/WhatsAppButtonGreenLarge.png');
// @ts-ignore
const LinkedInLogo=require('../src/Images/LinkedInLogo.svg').default;
// @ts-ignore
const Certificate=require('../src/Images/Certificate.jpg');
// @ts-ignore
const Udemy=require('../src/Images/Udemy.jpg');
// @ts-ignore
const CV_FaiyaazKisan=require('../src/Documents/CV_FaiyaazKisan.pdf');

function Home() {
  return (
    <div className='container mt-2'>
        <h1 id="Home">My Portfolio</h1>
        <span>I am a full stack Web Developer. I have the following skillset:
            <ul>
                <li>Asp.net Core Web API (Restful API)</li>
                <li>C#</li>
                <li>Entity Framework Core</li>
                <li>React js</li>
                <li>Redux Toolkit</li>
                <li>Bootstrap</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </span>
        <h2 id="Contact">Contacts</h2>
        <p><i className="bi bi-telephone-fill" style={{color:"darkgreen", fontSize:"30px"}}></i>&nbsp;&nbsp;&nbsp;+91 9969926811 <a aria-label="Chat on WhatsApp" href="https://wa.me/919969926811" target="_blank"> <img alt="Chat on WhatsApp" src={ChatOnWhatsapp} style={{width:"100%", maxWidth:"130px"}}/></a></p>
        <p style={{marginTop:"-10px"}}><i className="bi bi-envelope-fill" style={{color:"gold", fontSize:"30px"}}></i>&nbsp;&nbsp;&nbsp;fmkisan@gmail.com</p>
        <p><a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/faiyaaz-kisan-34967775/" target="_blank"><img src={LinkedInLogo} style={{width:"30px"}} alt=""/>&nbsp;&nbsp;&nbsp;<span style={{marginTop:"100px"}}>Contact on LinkedIn</span></a></p>
        
        {/* <h2>Working Technologies</h2>
        <div className='row'>
            <div className='col-md-4 col-12 text-center'>
                <img src={DotNetCoreLogo} style={{width:"100%", maxWidth:"100%", height:"100%", maxHeight:"80%"}}/>
                <p><b>Asp.net core Web Api</b></p>
            </div>
            <div className='col-md-4 col-12 text-center'>
                <img src={ReactLogo} style={{width:"100%", maxWidth:"100%", height:"100%", maxHeight:"80%"}}/>
                <p><b>React JS</b></p>
            </div>
            <div className='col-md-4 col-12 text-center'>
                <img src={bootstrapLogo} style={{width:"100%", maxWidth:"100%", height:"100%", maxHeight:"75%"}}/>
                <p className='mt-3'><b>Bootstrap</b></p>
            </div>
        </div> */}
        <h2 id="qualification">Qualification</h2>
        <p>I have done my Graduation in Bsc Information Technology from G.N. Khalse College, Mumbai.</p>
        <img src={Certificate} style={{width:"100%", maxWidth:"1000px"}} className="mb-3" alt='Graduation Certificate from Mumbai University'/>
        <p>I have also taken a few courses from udemy to learn better.<br/><b>Certificate Verification:</b> <a href="https://www.udemy.com/certificate/UC-427f50a3-04b7-43cb-a194-ad6f82b9cf05/">https://www.udemy.com/certificate/UC-427f50a3-04b7-43cb-a194-ad6f82b9cf05/</a></p>
        <img src={Udemy} style={{width:"100%", maxWidth:"1000px", border:"1px solid black"}} className="mb-3" alt=''/>
        <h2 id="Resume">My Resume</h2>
        <a href={CV_FaiyaazKisan} target="_blank">
        <button className='btn btn-primary mb-5 mt-2 sky-neon'><b>Download Resume</b></button>
        </a>
    </div>
  )
}

export default Home