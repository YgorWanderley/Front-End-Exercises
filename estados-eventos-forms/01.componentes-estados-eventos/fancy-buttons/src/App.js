import React from 'react'


class App extends React.Component{
  
  state = {
    clicksBtnOne: 0,
    clicksBtnTwo: 0,
    clicksBtnThree: 0,
  };

  handleButtonOne = () => {
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }));
  }
  handleButtonTwo = () => {
    this.setState((prevState) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }));
  }
  handleButtonThree = () => {
    this.setState((prevState) => ({
      clicksBtnThree: prevState.clicksBtnThree + 1,
    }));
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <>
      <button
      type='button'
      onClick={ this.handleButtonOne }
      >
        {`Cliques botão 1: ${clicksBtnOne}`}
      </button>
      <button
      onClick={ this.handleButtonTwo }
      >
        {`Cliques botão 2: ${clicksBtnTwo}`}
      </button>
      <button
      onClick={ this.handleButtonThree }
      >
        {`Cliques botão 3: ${clicksBtnThree}`}
      </button>
      </>
    )
  }
}

export default App;
