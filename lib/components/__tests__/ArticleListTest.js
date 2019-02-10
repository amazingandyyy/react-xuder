import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a', title: 'title a'},
      b: { id: 'b', title: 'title b'},
    },
    store: {
      lookupAuthor: jest.fn(()=>({}))
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});