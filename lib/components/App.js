import React, { Component } from 'react';
import ArticleList from './ArticleList';

export default class App extends Component {
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