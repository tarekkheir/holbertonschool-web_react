import React from 'react';
import { StyleSheet, css } from "aphrodite";

const Login = () => {
	return (
		<React.Fragment>
			<p>
				Login to access the full dashboard
			</p>
			<label>
				Email:
				<input
					type="email"
					name="email"
					className={css(styles.input)} />
			</label>
			<label>
				Password:
				<input
					type="password"
					name="password"
					className={css(styles.input)} />
			</label>
			<button>OK</button>
		</React.Fragment>
	)
}

const styles = StyleSheet.create({
	input: {
		margin: '0 0.5em',
	},
	label: {
		'@media (max-width: 900px)': {
			display: 'block'
		}
	}
});

export default Login;
