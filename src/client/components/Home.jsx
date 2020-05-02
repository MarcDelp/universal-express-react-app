'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * The homepage component of the application
 * It just renders a title, some text and a link to navigate to the 404 page
 */
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home component</h1>

        <ul>
          <li>Some text</li>
          <li>Some more text</li>
          <li><Link to='/junk-url'>A link to show 404 page</Link></li>
        </ul>
      </div>
    );
  }
}
