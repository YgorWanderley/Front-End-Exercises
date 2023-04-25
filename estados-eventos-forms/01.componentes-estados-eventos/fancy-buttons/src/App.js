import React from 'react'


class App extends React.Component{
  
  state = {
    clicksBtnOne: 0,
    clicksBtnTwo: 0,
    clicksBtnThree: 0,
  };

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

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
      style={ { backgroundColor: this.getButtonColor(clicksBtnOne) } }
      >
        {`Cliques botão 1: ${clicksBtnOne}`}
      </button>
      <button
      type='button'
      onClick={ this.handleButtonTwo }
      style={ { backgroundColor: this.getButtonColor(clicksBtnTwo) } }
      >
        {`Cliques botão 2: ${clicksBtnTwo}`}
      </button>
      <button
      type='button'
      onClick={ this.handleButtonThree }
      style={ { backgroundColor: this.getButtonColor(clicksBtnThree) } }
      >
        {`Cliques botão 3: ${clicksBtnThree}`}
      </button>
      </>
    )
  }
}

export default App;
