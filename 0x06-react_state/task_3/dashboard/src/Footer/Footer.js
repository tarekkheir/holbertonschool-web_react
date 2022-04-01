import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils'
import React from 'react';
import AppContext, { user } from "../App/AppContext";

const Footer = () => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            {context.user.isLoggedIn && (<a href="#">Contact us</a>)}
          </div>
        );
      }}
    </AppContext.Consumer>
  )
}

export default Footer;
