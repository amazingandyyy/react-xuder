import React from 'react';
import ArticleList from '../ArticleList';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const {shallow} = Enzyme;

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a', title: 'title a'},
      b: { id: 'b', title: 'title b'},
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    ).getElement();
    expect(wrapper.props.children.length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});