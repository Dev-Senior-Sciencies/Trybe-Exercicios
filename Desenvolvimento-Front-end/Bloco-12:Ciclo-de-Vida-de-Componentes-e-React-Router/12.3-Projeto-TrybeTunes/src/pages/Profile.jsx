import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../componets/Header';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
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
   }

   render() {
     const {
       isLoading,
       userImage,
       userName,
       userEmail,
       userDescription } = this.state;
     return (
       <div data-testid="page-profile">
         <Header />
         {isLoading && <Carregando loading={ isLoading } /> }
         <div>
           <nav>
             <Link to="/profile/edit">Editar perfil</Link>
           </nav>
           <img
             data-testid="profile-image"
             src={ userImage }
             alt={ `Imagem de ${userName}` }
           />
           <p>{userName}</p>
           <p>{userEmail}</p>
           <p>{userDescription}</p>
         </div>
       </div>
     );
   }
}

export default Profile;
