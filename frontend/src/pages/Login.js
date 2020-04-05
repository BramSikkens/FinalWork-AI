import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const mapStateToProps = state => {
  const { authentication } = state;
  console.log(state);
};

const mapDispatchToProps = dispatch => {};

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>Login</p>;
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
