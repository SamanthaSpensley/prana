import React from 'react';
import { Link } from 'react-router';

const Landing = (props) => {
  return (
    <div className="home">
      <div className="container">
        <div className="row" >
          <div className="col-xs-12 col-md-8 banner">
            <h1>Start realizing the mind-body benefits of breathing</h1>
            <Link to={ "/breathers" } className="btn btn-lg pull-left">Take a Breather</Link>
          </div>
          <div className="hidden-sm-down col-md-4 banner">
            <img className="logo" src='../../assets/logo.jpg' alt="logo" />
          </div>
        </div>
      </div>
      <div className="welcome container-fluid">
        <div className="row">
          <h1>Welcome to Prana No. 5</h1>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Landing;


// its as easy as 1, 2, breathe....
// 1. choose a breathing sequence
// 2. select optional settings
// 3. breathe!

//
