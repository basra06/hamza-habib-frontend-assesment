import React from 'react';
import './App.css'
function App() {
  return (
    <div className="App">
      <form style={{margin:'20px'}}>
        <div className='autocomplete' style={{width:'300px'}}>
          <input id="myInput" type="text" name="myCountry" placeholder="Country"/>
        </div>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
