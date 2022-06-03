import logo from '../assets/holberton_logo.jpg';
import React from 'react';
import { StyleSheet, css } from "aphrodite";
import AppContext from '../App/AppContext';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.context;

    return (
      <div className={css(styles.AppHeader)}>
        <img src={logo} className={css(styles.headerImg)} />
        <h1>School dashboard</h1>

        {user.isLoggedIn && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logOut} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span>
          </p>
        )}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  AppHeader: {
    fontSize: 'calc(10px + 2vmin)',
    height: '200px',
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    alignItems: 'center',
    fontSize: '20px',
    color: 'rgba(223, 21, 21, 0.808)',
    borderBottom: 'solid 3px rgba(223, 21, 21, 0.808)',
  },
  headerImg: {
    width: "200px",
  },
  logoutSection: {
    color: "black",
    position: "absolute",
    right: 0,
    paddingRight: "20px",
    alignSelf: "flex-end",
  },
  logoutSectionSpan: {
    fontStyle: "italic",
    cursor: "pointer",
  }
});

Header.contextType = AppContext;

export default Header;
