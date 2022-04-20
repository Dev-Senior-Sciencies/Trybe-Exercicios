import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestDataUser } from '../actions/index';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isButton: true,
    };
  }

  handleChanger = ({ target }) => {
    this.setState((previusState) => ({
      ...previusState,
      [target.name]: target.value,
    }), () => this.isButtonDisable());
  }

    isButtonDisable = () => {
      const { state } = this;
      const { password, email } = this.state;
      const MIN_LENGTH_PASSWORD = 6;
      const validEmail = email.includes('@') && email.includes('.com');
      const validPassword = password.length >= MIN_LENGTH_PASSWORD;
      const validaEmailOfSenha = validEmail && validPassword;
      if (validaEmailOfSenha) {
        this.setState((previusState) => ({
          ...previusState,
          isButton: false,
        }));
      } else {
        this.setState((previusState) => ({
          ...previusState,
          isButton: true,
        }));
      }
      return state;
    }

    onClickBtnRedirect = () => {
      const { history, dispatch } = this.props;
      dispatch(requestDataUser(this.state));
      history.push('/carteira');
    }

    render() {
      const { state } = this;
      return (
        <div className="contener">
          <form>
            <div className="contener-input">
              <h1 className="Sign In">
                Sign In
              </h1>
              <label
                className="label-email"
                htmlFor="email"
              >
                <input
                  placeholder="Email"
                  className="inputEmail"
                  data-testid="email-input"
                  name="email"
                  type="email"
                  onChange={ this.handleChanger }
                />
              </label>
              <label
                className="label-password"
                htmlFor="password"
              >
                <input
                  placeholder="Senha"
                  className="inputSenha"
                  data-testid="password-input"
                  name="password"
                  type="password"
                  onChange={ this.handleChanger }
                />
                <i className="bi bi-eye-slash-fill" />
              </label>
              <button
                className="inputButton"
                disabled={ state.isButton }
                onChange={ this.handleChanger }
                onClick={ this.onClickBtnRedirect }
                type="button"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      );
    }
}
Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.objectOf(PropTypes.any).isRequired,
};
const mapStateToProps = (state) => ({
  email: state.email,
});

export default connect(mapStateToProps)(Login);
