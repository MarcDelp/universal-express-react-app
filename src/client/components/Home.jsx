'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTexts } from '../../common/actions';

/**
 * The homepage component of the application
 * It just renders a title, some text and a link to navigate to the 404 page
 */
class Home extends React.Component {
  componentDidMount() {
    return this.props.getTexts();
  }

  render() {
    return (
      <div>
        <h1>Home component</h1>

        <ul>
          {
            this.props.texts.map((text, idx) => (
              <li key={idx}>{ text }</li>
            ))
          }
          <li><Link to='/junk-url'>A link to show 404 page</Link></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  texts: state.textReducer.texts
});

const mapDispatchToProps = dispatch => ({
  getTexts: () => dispatch(getTexts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
