import React, { Component } from 'react';

import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  }
  render() {
    const { articles } = this.state;
    return (
      <div>
        <ArticleList
          articles={articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}