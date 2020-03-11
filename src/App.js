import React from 'react';
import './App.css';



function App () {

  const increment = () => {
    console.log(this.props.store);
  }
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={increment}>INCREMENT</button>

      </header>
    </div>
  );
}

export default App;
