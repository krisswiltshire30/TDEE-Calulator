import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>

        <form action="/root">
          <p>TDEE Calculator</p>
          <p><input placeholder="Age" type="text" /></p>
          <p><input placeholder="Weight" type="text" /></p>
          <p><input placeholder="Height" type="text" /></p>
          <p><input placeholder="Activity Level" type="text" /></p>
          <p><input placeholder="Body Fat" type="text" /></p>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
