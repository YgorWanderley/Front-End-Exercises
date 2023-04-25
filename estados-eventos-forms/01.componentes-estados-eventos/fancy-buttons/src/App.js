import React from 'react'

const handleButtonOne = () => {
  console.log('Clicou no botão 1');
}
const handleButtonTwo = () => {
  console.log('Clicou no botão 2');
}
const handleButtonThree = () => {
  console.log('Clicou no botão 3');
}

class App extends React.Component{
  render() {
    return (
      <>
      <button onClick={ handleButtonOne }>Botão 1</button>
      <button onClick={ handleButtonTwo }>Botão 2</button>
      <button onClick={ handleButtonThree }>Botão 3</button>
      </>
    )
  }
}

export default App;
