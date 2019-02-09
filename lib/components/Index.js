import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    answer: 42,
  }
  asyncFunc = () => {
    return Promise.resolve(55);
  }
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }
  render() {
    return (
      <h5>Hi, {this.state.answer}</h5>
    );
  }
}

export default App;

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);