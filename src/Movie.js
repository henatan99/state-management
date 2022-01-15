import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => {
  const { name, price, id } = movie;
  return (
    <div>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <h3>{id}</h3>
    </div>
  );
};

Movie.defaultProps = {
  movie: {
    name: '',
    price: null,
    id: null,
  },
};

Movie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  }),
};

export default Movie;
