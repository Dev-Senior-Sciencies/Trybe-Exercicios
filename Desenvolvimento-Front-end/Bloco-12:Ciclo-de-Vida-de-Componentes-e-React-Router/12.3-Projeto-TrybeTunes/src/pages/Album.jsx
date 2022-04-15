import React from 'react';
import PropTypes from 'prop-types';
import Header from '../componets/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../componets/MusicCard ';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Carregando from './Carregando';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {

      music: [],
      favorites: [],
      isLoading: false,
    };
  }

    componentDidMount = async () => {
      const {
        match: {
          params: { id },
        },
      } = this.props;

      const musics = await getMusics(id);

      this.setState({
        music: musics,

      });
      this.isFavoritsSons();
    }

     isFavoritsSons = async () => {
       this.setState({
         isLoading: true,
       });

       const mySonsFavority = await getFavoriteSongs();
       this.setState({
         favorites: mySonsFavority,
         isLoading: false,
       });
     }

    addFavorite = (favorite) => {
      const { favorites } = this.state;
      this.setState({
        favorites: [...favorites, favorite],
      });
    }

    removeFavorite = (favorite) => {
      const { favorites } = this.state;
      this.setState({
        favorites: favorites.filter((f) => f.trackId !== favorite.trackId),
      });
    }

    render() {
      const { state: { music, favorites, isLoading },
        addFavorite,
        removeFavorite } = this;
      return (

        <div data-testid="page-album">
          <Header />

          {
            music.length > 0
                  && (
                    <div>
                      <h2 data-testid="album-name">{ music[0].collectionName }</h2>

                      <h3 data-testid="artist-name">{ music[0].artistName }</h3>
                    </div>
                  )
          }

          <section>
            <ul>
              {music.filter(({ trackName, previewUrl, trackId }) => (
                trackName && previewUrl && trackId
              )).map((el) => (
                <MusicCard
                  key={ el.trackName }
                  trackId={ el.trackId }
                  previewUrl={ el.previewUrl }
                  trackName={ el.trackName }
                  favorites={ favorites }
                  addFavorite={ addFavorite }
                  removeFavorite={ removeFavorite }
                />
              ))}
            </ul>
          </section>
          <div>
            { isLoading && <Carregando loading={ isLoading } /> }
          </div>
        </div>

      );
    }
}

Album.propTypes = {
  match: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Album;
