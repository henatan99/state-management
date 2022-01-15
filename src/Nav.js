import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
          <h3>Dev Ed</h3>
          <p>List of Movies: {movies.length}</p>
        </div>
    );
};

export default Nav;
