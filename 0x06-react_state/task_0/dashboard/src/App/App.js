import React, { Component } from 'react';
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import propTypes from "prop-types";
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from "aphrodite";


const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, value: 'New course available', type: 'default' },
  { id: 2, value: 'New resume available', type: 'urgent' },
  { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayDrawer: false };
    this.listener = this.listener.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.listener);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.listener);
  }

  listener = (event) => {
    if (event.key === 'h' && event.ctrlkey === true) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  }

  render() {
    return (
      <React.Fragment>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer} />
        <div className="App">
          <Header />
          <div className={('App-body', css(styles.AppBody))}>
            {this.props.isLoggedIn ?
              <BodySectionWithMarginBottom title="Course List">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom> :
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>}
            <BodySection title="News from the School">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </React.Fragment >
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { }
};

App.propTypes = {
  isLoggedIn: propTypes.bool,
  logOut: propTypes.func,
};

const styles = StyleSheet.create({
  AppBody: {
    padding: '50px'
  },

  footer: {
    padding: '0',
  },
});

export default App;
