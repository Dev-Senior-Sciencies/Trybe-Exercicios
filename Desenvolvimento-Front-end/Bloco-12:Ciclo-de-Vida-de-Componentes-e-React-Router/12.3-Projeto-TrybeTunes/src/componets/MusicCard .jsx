import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Carregando from '../pages/Carregando';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      isFavorites: false,
      isLoading: false,
    };
  }

  saveFavoritAlbumSons = async () => {
    this.setState({
      isLoading: true,
    });
    const { trackName, previewUrl, trackId, addFavorite } = this.props;
    const song = { trackName, previewUrl, trackId };
    await addSong(song);
    addFavorite(song);

    this.setState({
      isLoading: false,
      isFavorites: true,
    });
  }

   removeFavoritAlbumsSons = async () => {
     this.setState({ isLoading: true });
     const { trackName, previewUrl, trackId, removeFavorite } = this.props;
     const song = { trackName, previewUrl, trackId };
     await removeSong(song);
     removeFavorite(song);
     this.setState({ isLoading: false, isFavorites: false });
   }

  changeCheckboxIsNot = ({ target }) => {
    const { checked } = target;
    if (checked) {
      this.saveFavoritAlbumSons();
    } else {
      this.removeFavoritAlbumsSons();
    }
  }

  render() {
    const { trackName, previewUrl, trackId, favorites } = this.props;
    const { state: { isLoading, isFavorites }, changeCheckboxIsNot } = this;
    const favorited = favorites.some((m) => m.trackId === trackId);

    return (
      <div className="containe-header-music">
        <div className="containe-music">
          <h3 className="trackname">{ trackName }</h3>
          <audio
            className="previurl"
            data-testid="audio-component"
            src={ previewUrl }
            controls
          >
            <track
              kind="captions"
            />
            O seu navegador não suporta o elemento
            <code>
              audio
            </code>
            .
          </audio>
          <div>
            <label htmlFor={ trackId }>
              Favorita
              <input
                id={ trackId }
                type="checkbox"
                checked={ favorited || isFavorites }
                onChange={ changeCheckboxIsNot }
                data-testid={ `checkbox-music-${trackId}` }
              />
            </label>
          </div>
          <div>
            {isLoading && <Carregando loading={ isLoading } />}
          </div>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  /* requisito 8 trackid */
  trackId: PropTypes.number.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default MusicCard;
