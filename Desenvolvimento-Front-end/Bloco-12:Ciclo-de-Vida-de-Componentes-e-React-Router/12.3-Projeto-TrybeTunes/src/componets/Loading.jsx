import React from 'react';

class Loading extends React.Component {
  render() {
    return (
      <div className="containe-loading">
        <div className="loading">
          <i className="gg-search-loading" />
          <h2>Carregando...</h2>
        </div>
      </div>
    );
  }
}

export default Loading;
