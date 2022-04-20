import React from 'react';
import Header from '../componets/Header';
import Carregando from './Carregando';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../componets/MusicCard ';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      favorites: [],
    };
  }

  componentDidMount() {
    this.getFavoritesApi();
  }

   getFavoritesApi = async () => {
     this.setState({ isLoading: true });
     const sons = await getFavoriteSongs();
     this.setState({
       isLoading: false,
       favorites: sons,
     });
   }

  removeFavorite = (favorite) => {
    const { favorites } = this.state;
    this.setState({
      favorites: favorites.filter((f) => f.trackId !== favorite.trackId),
    });
  }

  render() {
    const { state: { isLoading, favorites }, removeFavorite } = this;
    return (

      <div data-testid="page-favorites">
        <Header />
        <div>
          {isLoading && <Carregando loading={ isLoading } />}
        </div>
        <div className="container-favorites-div">
          <div className="container-favorites">

            {favorites.map((f) => (
              <MusicCard
                key={ f.trackId }
                trackId={ f.trackId }
                previewUrl={ f.previewUrl }
                trackName={ f.trackName }
                favorites={ favorites }
                removeFavorite={ removeFavorite }
              />
            ))}
          </div>

        </div>
      </div>

    );
  }
}

export default Favorites;
