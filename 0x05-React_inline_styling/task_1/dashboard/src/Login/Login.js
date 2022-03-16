import React from 'react';
import { StyleSheet, css } from "aphrodite";

const Login = () => {
	return (
		<div className={css(styles.AppLogin)}>
			<p>
				Login to access the full dashboard
			</p>
			<label>Email:</label>
			<input type="text" />
			<label>Password:</label>
			<input type="password" />
			<button>OK</button>
		</div>
	)
}

const styles = StyleSheet.create({
	AppLogin: {
		padding: '2rem',
		fontSize: '1.2rem',
		height: '400px',
		borderBottom: 'solid 3px rgba(223, 21, 21, 0.808)',
	}
});

export default Login;
