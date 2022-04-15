import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../componets/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      name: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState((previusState) => ({
      ...previusState,
      [target.name]: target.value,
    }));
  }

  isButtonDisable = () => {
    const { name } = this.state;
    const MIN_LENGTH_NAME = 3;
    return name.length < MIN_LENGTH_NAME;
  }

  open = async () => {
    const { name } = this.state;
    const { history } = this.props;

    this.setState((previusState) => ({
      ...previusState,
      loading: true,
    }));

    await createUser({ name });

    history.push('/search');

    /* Referencias:
     https://www.youtube.com/watch?v=9pB_lwmLc74
     https://www.youtube.com/watch?v=-L993yF4VB8 */
  }

  render() {
    const { loading, name } = this.state;

    return (

      <div data-testid="page-login">
        {
          loading
            ? (
              <Loading />
            ) : (
              <form className="contener-form">
                <div className="contener-div">
                  <h1
                    className="sing-in"
                  >
                    Sing In

                  </h1>
                  <label
                    htmlFor="labe-name"
                  >
                    Name
                    <input
                      id="labe-name"
                      className="input-login"
                      data-testid="login-name-input"
                      type="text"
                      name="name"
                      value={ name }
                      onChange={ this.handleChange }
                    />
                  </label>
                  <button
                    className="btn-login"
                    type="submit"
                    data-testid="login-submit-button"
                    disabled={ this.isButtonDisable() }
                    onClick={ this.open }
                  >
                    Entrar
                  </button>
                </div>
              </form>
            )
        }

      </div>

    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
