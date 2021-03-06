import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';

export default class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext() {
    // + childContextTypes
    // the return value will be the context object
    return {
      store: this.props.store
    };
  }
  state = this.props.store.getState();
  render() {
    const { articles } = this.state;
    return (
      <div>
        <ArticleList
          articles={articles}
          store={this.props.store}
        />
      </div>
    );
  }
}