import React from 'react'


class App extends React.Component{
  constructor() {
    super()
  this.handleButtonOne = this.handleButtonOne.bind(this)
  }
  handleButtonOne() {
    console.log('Clicou no botão 1', this);
  }
  handleButtonTwo = () => {
    console.log('Clicou no botão 2');
  }
  handleButtonThree = () => {
    console.log('Clicou no botão 3');
  }
  render() {
    return (
      <>
      <button onClick={ this.handleButtonOne }>Botão 1</button>
      <button onClick={ this.handleButtonTwo }>Botão 2</button>
      <button onClick={ this.handleButtonThree }>Botão 3</button>
      </>
    )
  }
}

export default App;
