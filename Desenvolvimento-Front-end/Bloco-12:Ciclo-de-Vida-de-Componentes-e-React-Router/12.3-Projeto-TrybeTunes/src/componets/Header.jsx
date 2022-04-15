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
        <header data-testid="header-component">
          <h1>TrybeTunes</h1>
          {
            isLoading
              ? <Carregando loading={ isLoading } />
              : <h2 data-testid="header-user-name">{userName}</h2>
          }
          <nav>
            <li>
              <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
            </li>
            <li>
              <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/profile" data-testid="link-to-profile">Profile</Link>
            </li>
          </nav>
        </header>
      );
    }
}

export default Header;
