
import React from 'react';

export default function coe() {
      return (
        <>
        
        <div>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style dangerouslySetInnerHTML={{__html: "\n* {box-sizing: border-box}\n.mySlides1{display: none}\nimg {vertical-align: middle;}\n\n/* Slideshow container */\n.slideshow-container {\n  max-width: 2000px;\n  position: relative;\n  margin: auto;\n}\n\n/* The dots/bullets/indicators */\n.dot {\n  height: 0.8px;\n  width: 0.8px;\n  margin: 0 1px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active {\n  background-color: #717171;\n}\n\n/* Fading animation */\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n\n@keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n\n/* On smaller screens, decrease text size */\n@media only screen and (max-width: 300px) {\n  .text {font-size: 11px}\n}\n" }} />
          <div> 
            <div className="slideshow-container">
              <div className="mySlides fade">
                <div className="numbertext">1 /15</div>
                <img src="about-comp.jpg" style={{height: '500px', width: '1000px', border: '2px solid black'}} />
                <div className="text">MES collage of engineering</div>
              </div>
              <div className="mySlides fade">
                <div className="numbertext">2 /15</div>
                <img src="simple_img_7.jpg" style={{height: '500px', width: '1000px', border: '2px solid black'}} />
                <div className="text"></div>
              </div>
              <div className="mySlides fade">
                <div className="numbertext">3 /15</div>
                <img src="123.jpg" style={{height: '500px', width: '1000px', border: '2px solid black'}} />
                <div className="text"> </div>
              </div>
            </div>
            <br />
            <div style={{textAlign: 'center'}}>
              <span className="dot" /> 
              <span className="dot" /> 
              <span className="dot" />
            </div>
          </div>
        </div>
        </>
      );
    }
