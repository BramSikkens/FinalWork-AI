import React from "react";
import { connect } from "react-redux";
import { login, register } from "../redux/actions/authentication";
import {
  OpenLoginModal,
  CloseLoginModal
} from "../redux/actions/componentStateAction";

function mapStateToProps(state) {
  return {
    open: state.componentState.registerLoginModal,
    username: "",
    password: "",
    email: ""
  };
}

const mapDispatchToProps = dispatch => {
  return {
    OpenLoginModal: () => {
      dispatch(OpenLoginModal());
    },
    CloseLoginModal: () => {
      dispatch(CloseLoginModal());
    },
    login: (username, password) => {
      dispatch(login(username, password));
    },
    register: (username, password, email) => {
      dispatch(register(username, password, email));
    }
  };
};

class RegisterLoginModal extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  onSubmitRegister(e) {
    e.preventDefault();
    this.props.register(
      this.state.username,
      this.state.email,
      this.state.password
    );
  }

  render() {
    return (
      <div
        className="main-register-wrap modal"
        style={this.props.open ? { display: "block" } : { display: "none" }}
      >
        <div className="reg-overlay" style={{ display: "block" }} />
        <div className="main-register-holder tabs-act">
          <div className="main-register fl-wrap  modal_main vis_mr">
            <div className="main-register_title">
              Welcome to{" "}
              <span>
                <strong>Town</strong>Hub<strong>.</strong>
              </span>
            </div>
            <div
              onClick={() => this.props.CloseLoginModal()}
              className="close-reg"
            >
              <i className="fal fa-times" />
            </div>
            <ul className="tabs-menu fl-wrap no-list-style">
              <li className>
                <a href="#tab-1">
                  <i className="fal fa-sign-in-alt" /> Login
                </a>
              </li>
              <li className="current">
                <a href="#tab-2">
                  <i className="fal fa-user-plus" /> Register
                </a>
              </li>
            </ul>
            {/*tabs */}
            <div className="tabs-container">
              <div className="tab">
                {/*tab */}
                <div
                  id="tab-1"
                  className="tab-content first-tab"
                  style={{ display: "none" }}
                >
                  <div className="custom-form">
                    <form onSubmit={e => this.onSubmit(e)}>
                      <label>
                        Username or Email Address <span>*</span>{" "}
                      </label>
                      <input
                        name="email"
                        type="text"
                        onclick="this.select()"
                        defaultValue
                        onChange={e => {
                          this.setState({ username: e.target.value });
                        }}
                      />
                      <label>
                        Password <span>*</span>{" "}
                      </label>
                      <input
                        name="password"
                        type="password"
                        onclick="this.select()"
                        onChange={e => {
                          this.setState({ password: e.target.value });
                        }}
                        defaultValue
                      />
                      <button type="submit" className="btn float-btn color2-bg">
                        {" "}
                        Log In <i className="fas fa-caret-right" />
                      </button>
                      <div className="clearfix" />
                      <div className="filter-tags">
                        <input id="check-a3" type="checkbox" name="check" />
                        <label htmlFor="check-a3">Remember me</label>
                      </div>
                    </form>
                    <div className="lost_password">
                      <a href="#">Lost Your Password?</a>
                    </div>
                  </div>
                </div>
                {/*tab end */}
                {/*tab */}
                <div className="tab">
                  <div
                    id="tab-2"
                    className="tab-content"
                    style={{ display: "block" }}
                  >
                    <div className="custom-form">
                      <form
                        method="post"
                        name="registerform"
                        className="main-register-form"
                        id="main-register-form2"
                        onSubmit={e => this.onSubmitRegister(e)}
                      >
                        <label>
                          Full Name <span>*</span>{" "}
                        </label>
                        <input
                          name="name"
                          type="text"
                          onclick="this.select()"
                          defaultValue
                          onChange={e => {
                            this.setState({ username: e.target.value });
                          }}
                        />
                        <label>
                          Email Address <span>*</span>
                        </label>
                        <input
                          name="email"
                          type="text"
                          onclick="this.select()"
                          defaultValue
                          onChange={e => {
                            this.setState({ email: e.target.value });
                          }}
                        />
                        <label>
                          Password <span>*</span>
                        </label>
                        <input
                          name="password"
                          type="password"
                          onclick="this.select()"
                          defaultValue
                          onChange={e => {
                            this.setState({ password: e.target.value });
                          }}
                        />
                        <div className="filter-tags ft-list">
                          <input id="check-a2" type="checkbox" name="check" />
                          <label htmlFor="check-a2">
                            I agree to the <a href="#">Privacy Policy</a>
                          </label>
                        </div>
                        <div className="clearfix" />
                        <div className="filter-tags ft-list">
                          <input id="check-a" type="checkbox" name="check" />
                          <label htmlFor="check-a">
                            I agree to the <a href="#">Terms and Conditions</a>
                          </label>
                        </div>
                        <div className="clearfix" />
                        <button
                          type="submit"
                          className="btn float-btn color2-bg"
                        >
                          {" "}
                          Register <i className="fas fa-caret-right" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/*tab end */}
              </div>
              {/*tabs end */}
              <div className="log-separator fl-wrap">
                <span>or</span>
              </div>
              <div className="soc-log fl-wrap">
                <p>For faster login or register use your social account.</p>
                <a href="#" className="facebook-log">
                  {" "}
                  Facebook
                </a>
              </div>
              <div className="wave-bg">
                <div className="wave -one" />
                <div className="wave -two" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterLoginModal);
