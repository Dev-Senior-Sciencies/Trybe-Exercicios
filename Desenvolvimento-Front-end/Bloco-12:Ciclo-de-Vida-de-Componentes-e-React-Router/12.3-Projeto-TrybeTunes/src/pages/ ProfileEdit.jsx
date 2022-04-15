import React, { Component } from 'react';
import propTypes from 'prop-types';
import Header from '../componets/Header';
import { getUser, updateUser } from '../services/userAPI';
import Carregando from './Carregando';

class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisableButton: true,
      isLoading: false,
      userName: '',
      userEmail: '',
      userDescription: '',
      userImage: '',
    };
  }

  componentDidMount() {
    this.getUserapi();
  }

  onInputChanger = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.isValid());
  }

   onSaveButtonClick = async (e) => {
     e.preventDefault();
     await this.isUpdate();
     const { history } = this.props;
     history.push('/profile');
   }

   getUserapi = async () => {
     this.setState({ isLoading: true });

     const user = await getUser();
     this.setState({
       isLoading: false,
       userName: user.name,
       userEmail: user.email,
       userDescription: user.description,
       userImage: user.image,
     });
     this.isValid();
   }

   isUpdate = async () => {
     const { userName, userEmail, userDescription, userImage } = this.state;
     this.setState({ isLoading: true });
     await updateUser({
       email: userEmail,
       image: userImage,
       description: userDescription,
       name: userName,
     });

     this.setState({ isLoading: false });
   }

   isValid = () => {
     const {
       userEmail,
       userImage,
       userDescription,
       userName } = this.state;
     if (userImage && userName && userDescription && this.checkEmail(userEmail)) {
       this.setState({ isDisableButton: false });
     } else {
       this.setState({ isDisableButton: true });
     }
   }

  checkEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  render() {
    const {
      state: {
        isDisableButton,
        isLoading,
        userImage,
        userName,
        userEmail,
        userDescription }, onInputChanger, onSaveButtonClick } = this;

    return (
      <div data-testid="page-profile-edit">
        <Header />
        <form>
          <label htmlFor="edit-input-name">
            Nome:
            <input
              name="userName"
              data-testid="edit-input-name"
              type="text"
              value={ userName }
              onChange={ onInputChanger }
            />
          </label>
          <label htmlFor="edit-input-email">
            E-mail:
            <input
              name="userEmail"
              data-testid="edit-input-email"
              type="email"
              value={ userEmail }
              onChange={ onInputChanger }
            />
          </label>
          <label htmlFor="edit-input-description">
            Descrição:
            <input
              name="userDescription"
              data-testid="edit-input-description"
              type="text"
              value={ userDescription }
              onChange={ onInputChanger }
            />
          </label>
          <label htmlFor="edit-input-image">
            Foto:
            <input
              name="userImage"
              data-testid="edit-input-image"
              type="text"
              value={ userImage }
              onChange={ onInputChanger }
            />
          </label>
          <button
            name="isDisableButton"
            onClick={ onSaveButtonClick }
            disabled={ isDisableButton }
            data-testid="edit-button-save"
            type="submit"
          >
            Salvar alteração
          </button>
        </form>
        <div>
          {isLoading && <Carregando loading={ isLoading } />}
        </div>
      </div>

    );
  }
}

ProfileEdit.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default ProfileEdit;
