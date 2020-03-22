import React from 'react';
import './App.css';

import Feed from './components/Feed';

function App() {
  return (
    <div>
      <div className="jumbotron text-center">
        <h2>Voteit</h2>
      </div>
      <Feed />
    </div>
  );
}

export default App;
