import React, { Component } from 'react';
import propTypes from 'prop-types';

class Carregando extends Component {
  render() {
    const {
      loading,
    } = this.props;
    return (
      <div className="container-carregando">
        <div className="carregando">
          <i className="gg-search-loading" />
          {loading && <p>Carregando...</p>}
        </div>
      </div>
    );
  }
}

Carregando.propTypes = {
  loading: propTypes.bool.isRequired,
};

export default Carregando;
