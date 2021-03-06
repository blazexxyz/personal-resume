import React, { Component } from 'react';
import Slide, { Flip } from 'react-reveal';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var resumeDownload = this.props.data.resumedownload;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         <Slide top cascade>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Recommendations</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
               <li className="resumedownload"><div>
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div></li>
            </ul>
         </Slide>
      </nav>

      <div className="row banner">
            <div className="banner-text">
               <Slide left>
                  <h1 className="responsive-headline">I'm {name}.</h1>
               </Slide>
               <Slide right>
                  <h3>I'm {city} based <span>{occupation}</span>. {description}.</h3>
               </Slide>
               <hr />
               <Flip bottom>
                  <ul className="social">
                     {networks}
                  </ul>
               </Flip>
            </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
