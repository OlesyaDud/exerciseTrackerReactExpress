import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to='/'>ETracker</Link>
        <div>
          <ul>
            <li>
              <Link to='/'>Exercises</Link>
            </li>
            <li>
              <Link to='/create'>Create Exercise</Link>
            </li>
            <li>
              <Link to='/user'>Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
