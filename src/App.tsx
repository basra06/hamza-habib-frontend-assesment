import React from 'react';
import './App.css'
import AutoComplete from './AutoComplete';
 
function App() {
 
  return (
    <div className="App">
      <AutoComplete
      id="autoComplete"
      data={['Pakistan', 'India', 'Banglades', 'China', 'Australia', 'Canada']}
  />
    </div>
  );
}

export default App;
