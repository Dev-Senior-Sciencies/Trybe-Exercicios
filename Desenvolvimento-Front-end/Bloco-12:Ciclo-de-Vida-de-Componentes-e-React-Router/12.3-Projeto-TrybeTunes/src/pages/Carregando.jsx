import React, { Component } from 'react';
import propTypes from 'prop-types';

class Carregando extends Component {
  render() {
    const {
      loading,
    } = this.props;
    return (
      <div>
        {loading && <p>Carregando...</p>}
      </div>
    );
  }
}

Carregando.propTypes = {
  loading: propTypes.bool.isRequired,
};

export default Carregando;
