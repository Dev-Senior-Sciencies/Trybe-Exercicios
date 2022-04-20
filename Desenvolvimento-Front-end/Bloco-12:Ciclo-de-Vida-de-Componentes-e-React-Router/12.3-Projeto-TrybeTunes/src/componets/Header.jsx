import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from '../pages/Carregando';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: null,
      isLoading: false,
    };
  }

    componentDidMount = async () => {
      this.setState({
        isLoading: true,
      });
      const { name } = await getUser();

      this.setState((previousState) => ({
        ...previousState,
        userName: name,
        isLoading: false,
      }));
    }

    render() {
      const { userName, isLoading } = this.state;

      return (
        <header
          className="contener-header"
          data-testid="header-component"
        >
          <div className="contener-header-div">

            <h1
              className="trybe-h1"
            >
              TrybeTunes

            </h1>
            {
              isLoading
                ? (<Carregando loading={ isLoading } />)

                : (
                  <h2 className="user-h2" data-testid="header-user-name">
                    {`Be Very Welcome
                    ${userName}`}
                  </h2>
                )
            }
            <nav
              className="trybe-nav"
            >
              <li className="link-li">
                <Link
                  className="link-search"
                  to="/search"
                  data-testid="link-to-search"
                >
                  Pesquisar

                </Link>
              </li>
              <li className="link-li">
                <Link
                  className="link-favorites"
                  to="/favorites"
                  data-testid="link-to-favorites"
                >
                  Favorites

                </Link>
              </li>
              <li className="link-li">
                <Link
                  className="link-profile"
                  to="/profile"
                  data-testid="link-to-profile"
                >
                  Profile

                </Link>
              </li>
            </nav>
          </div>
        </header>
      );
    }
}

export default Header;
