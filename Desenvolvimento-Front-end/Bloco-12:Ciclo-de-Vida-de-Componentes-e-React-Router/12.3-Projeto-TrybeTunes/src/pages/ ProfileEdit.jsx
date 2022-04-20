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
        <form className="containe-form">
          <div className="containe-input-form">

            <label
              className="label-edit-profile"
              htmlFor="edit-input-name"
            >
              Nome:
              <input
                className="userName-edit-prof"
                name="userName"
                data-testid="edit-input-name"
                type="text"
                value={ userName }
                onChange={ onInputChanger }
              />
            </label>
            <label
              className="label-edit-profile"
              htmlFor="edit-input-email"
            >
              Email:
              <input
                className="userEmail-edit-prof"
                name="userEmail"
                data-testid="edit-input-email"
                type="email"
                value={ userEmail }
                onChange={ onInputChanger }
              />
            </label>
            <label
              className="label-edit-profile"
              htmlFor="edit-input-description"
            >
              Descrição:
              <input
                className="userDescription-edit-prof"
                name="userDescription"
                data-testid="edit-input-description"
                type="text"
                value={ userDescription }
                onChange={ onInputChanger }
              />
            </label>
            <label
              className="label-edit-profile"
              htmlFor="edit-input-image"
            >
              Foto:
              <input
                className="userImage-edit-prof"
                name="userImage"
                data-testid="edit-input-image"
                type="text"
                value={ userImage }
                onChange={ onInputChanger }
              />
            </label>
            <button
              className="button-edit-prof"
              name="isDisableButton"
              onClick={ onSaveButtonClick }
              disabled={ isDisableButton }
              data-testid="edit-button-save"
              type="submit"
            >
              Salvar alteração
            </button>
          </div>
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
