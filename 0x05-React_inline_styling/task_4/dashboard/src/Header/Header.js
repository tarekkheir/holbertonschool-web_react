import logo from '../assets/holberton_logo.jpg';
import React from 'react';
import { StyleSheet, css } from "aphrodite";


const Header = () => {
	return (
		<div className={('App-header', css(styles.AppHeader))}>
			<img src={logo} alt="holberton logo" height="200" />
			<h1>School dashboard</h1>
		</div>
	)
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
	}
});

export default Header;
