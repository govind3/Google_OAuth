import React from 'react'
import { Router } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import SearchBar from './SearchBar';
import Filter from './Filter';

const App = () => {
  return (
    <div className="ui container" style={{marginTop:'15px'}}>
      <Router history={history}>
        <div>
          <Header />
          <hr style={{height:'2px',backgroundColor:'olive'}} />
          <SearchBar />
          <Filter />
        </div>
        </Router>
    </div>
  )
}

export default App;