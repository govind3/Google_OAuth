import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header=()=> {
  return (
    <div className="ui large menu" >
      <Link to="/" className="active item">
        Home
      </Link>
      <div className="right menu">
        <div className="ui compact menu">
            <div className="ui simple dropdown item">
              Select Language 
              <i className="dropdown icon"></i>
              <div className="menu">
                <Link to="/english" className="item">English</Link>
                <Link to="/hindi" className="item">Hindi</Link>
              </div>
            </div>
        </div>
        {/* <Link to="/login" className="item">
            <GoogleAuth />
        </Link>  */}
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;