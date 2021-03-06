/* modules/App.js */

import React from 'react'
//import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Ghettohub Issues</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
        </ul>
        {/* add this */}
        {this.props.children}

      </div>
    )
  }
})
