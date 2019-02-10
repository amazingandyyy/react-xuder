import React, { Component } from 'react';
import axios from 'axios';

import ArticleList from './ArticleList';
import DataApi from 'state-api';

export default class App extends Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
  }
  async componentDidMount() {
    if(this.props.initialData.articles.length == 0) {
      const resp = await axios.get('/data');
      const api = new DataApi(resp.data);
      this.setState(()=>({
        articles: api.getArticles(),
        authors: api.getAuthors(),
      }));
    }
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