import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../componets/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../componets/Loading';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      searchPrevious: '',
      nameSearchText: '',
      album: null,

    };
  }

  stateChanger = (key, value) => {
    this.setState((previusState) => ({
      ...previusState,
      [key]: value,
    }));
  }

     handleChange = ({ target }) => {
       this.setState((previusState) => ({
         ...previusState,
         [target.name]: target.value,
       }));
     }

      isDisableButtom = () => {
        const { nameSearchText } = this.state;
        const MIN_SEARCH_LENGTH = 2;
        return nameSearchText.length < MIN_SEARCH_LENGTH;
      }

     search = async () => {
       const { nameSearchText } = this.state;

       this.stateChanger('loading', true);
       this.stateChanger('nameSearchText', '');
       this.stateChanger('searchPrevious', nameSearchText);

       const albums = await searchAlbumsAPI(nameSearchText);
       this.stateChanger('albums', albums);

       this.stateChanger('loading', false);
     }

     render() {
       const { loading, nameSearchText, searchPrevious, albums } = this.state;
       return (

         <div data-testid="page-search">
           <Header />

           {
             loading
               ? (
                 <Loading />
               ) : (
                 <form>
                   <input
                     type="text"
                     name="nameSearchText"
                     data-testid="search-artist-input"
                     onChange={ this.handleChange }
                     value={ nameSearchText }
                   />

                   <button
                     type="submit"
                     data-testid="search-artist-button"
                     disabled={ this.isDisableButtom() }
                     onClick={ this.search }
                   >
                     Pesquisar

                   </button>
                 </form>
               )
           }

           {
             albums && (
               albums.length > 0
                 ? (
                   <>
                     <h2>{`Resultado de álbuns de: ${searchPrevious}` }</h2>
                     <ul>
                       {
                         albums.map(({ collectionId, collectionName }) => (
                           <li key={ collectionId }>
                             <Link
                               data-testid={ `link-to-album-${collectionId}` }
                               to={ `/album/${collectionId}` }

                             >
                               { collectionName }
                             </Link>
                           </li>
                         ))
                       }
                     </ul>
                   </>
                 ) : (
                   <span>Nenhum álbum foi encontrado</span>
                 )
             )
           }

         </div>

       );
     }
}

export default Search;
