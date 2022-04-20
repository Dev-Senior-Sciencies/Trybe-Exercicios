import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const {
      filterHandle,
      filterHandlerare,
      filterHandleSuperTrunf,
    } = this.props;
    return (
      <div>
        <h3>Filtro De Buscas</h3>
        <label htmlFor="name-filter">
          <input
            name="nameFilter"
            type="text"
            data-testid="name-filter"
            id="name-filter"
            onChange={ filterHandle }
          />
        </label>
        <label htmlFor="rare-filter">
          Raridade da Carta:
          <select
            name="rare-filter"
            data-testid="rare-filter"
            onChange={ filterHandlerare }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-filter" className="label">
          <input
            type="checkbox"
            name="trunfoFilter"
            id="trunfo-filter"
            data-testid="trunfo-filter"
            onChange={ filterHandleSuperTrunf }
            className="check"
          />
          Super Trunfo
        </label>
      </div>

    );
  }
}

Search.propTypes = {
  filterHandle: PropTypes.func.isRequired,
  filterHandlerare: PropTypes.func.isRequired,
  filterHandleSuperTrunf: PropTypes.func.isRequired,
};

export default Search;
