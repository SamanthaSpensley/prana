import React from 'react';
import { Link } from 'react-router';

const Landing = (props) => {
  return (
    <div className="container">
      <div className="row" >
        <div className="col-xs-12 col-md-8 landing">
          <h1>Realize the mind-body benefits of breathing</h1>
          <Link to={ "/breathers" } className="btn btn-lg pull-left">Take a Breather</Link>
        </div>
        <div className=" col-xs-12 col-md-4 landing">
          <img className="logo" src='../../assets/logo.jpg' alt="logo" />
        </div>
      </div>

      <div className="row">
        <p></p>
      </div>
      <h4></h4>
    </div>
  )
}

export default Landing;


// its as easy as 1, 2, breathe....
// 1. choose a breathing sequence
// 2. select optional settings
// 3. breathe!

//
