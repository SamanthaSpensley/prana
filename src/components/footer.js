import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <h5>Copyright <FontAwesome name="fa fa-at" aria-hidden="true" /> Samantha Spensley 2016 | Powered by All The Feels</h5>
        </div>
      </footer>
    )
  }
}
