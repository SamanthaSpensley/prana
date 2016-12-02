import React from 'react';
import { Link } from 'react-router';

const Landing = (props) => {
  return (
    <div className="home">
      <div className="container">
        <div className="row" >
          <div className="col-xs-12 col-md-8 banner">
            <h1>Start unleashing the mind-body benefits of breathing</h1>
            <Link to={ "/breathers" } className="btn btn-lg pull-left">Take a Breather</Link>
          </div>
          <div className="hidden-sm-down col-md-4 banner">
            <img className="logo" src='../../assets/logo.jpg' alt="logo" />
          </div>
        </div>
      </div>
      <div className="welcome">
        <div className="container">
          <h1 className="flex">Welcome to Sync</h1>
          <h4 className="flex">Learn to breathe consciously and with awareness to help restore balance in the mind and body</h4>
          <div className="row">
            <div className="col-xs-12 col-md-6 recap">
              <h5>Benefits of a regular breathing practice include:</h5>
              <ul>
                <h5><li>Reduced anxiety and depression</li></h5>
                <h5><li>Increased energy levels</li></h5>
                <h5><li>Lower, more stabilized blood pressure</li></h5>
                <h5><li>Decreased feelings of stress</li></h5>
                <h5><li>Boosted immune system</li></h5>
              </ul>
            </div>
            <div className="col-xs-12 col-md-6 recap">
              <h5>Getting started is as easy as 1, 2, breathe...</h5>
              <h3>1. Choose a breathing sequence</h3>
              <h5>First, select a sequence that meets your needs</h5>
              <h3>2. Select optional settings</h3>
              <h5>Next, customize settings like the total duration or inhale and exhale counts</h5>
              <h3><Link to={ "/breathers" }>3. Breathe!</Link></h3>
            </div>
          </div>

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
