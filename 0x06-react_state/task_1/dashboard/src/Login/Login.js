import React from 'react';
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleLoginSubmit() {
    this.setState({ isLoggedIn: true, });
  }

  handleChangeEmail(event) {
    if (event.target.value !== '' && this.state.password !== '') {
      this.setState({ enableSubmit: true });
    } else this.setState({ enableSubmit: false });

    this.setState({ email: event.target.value })
  }

  handleChangePassword(event) {
    if (event.target.value !== '' && this.state.email !== '') {
      this.setState({ enableSubmit: true });
    } else this.setState({ enableSubmit: false });

    this.setState({ password: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <p>Login to access the full dashboard</p>
        <form action='' onSubmit={this.handleLoginSubmit}>
          <label className={css(styles.label)}>Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
            className={css(styles.input)} />
          <label className={css(styles.label)}>Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
            className={css(styles.input)} />
          <input type="submit" disabled={!this.state.enableSubmit} />
        </form>
      </React.Fragment >
    )
  }
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
