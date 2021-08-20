
import React, { FC } from 'react';
import { useMovies, MovieCard } from './index';
import {
    Container,
    Title,
    ListContainer,
    Grid
  } from './Home.styles';

/* Home component Using the custom hook */
export const Home: FC = () => {
    const { movies, updateMovieState } = useMovies();
  
    return (
      <Container>
        <Title data-testid="count-title">Movies {`(${movies.length})`}</Title>
        <ListContainer>
          <Grid>
            {movies.map((movie, index) => (
              <MovieCard
                data-testid="MovieCard-element"
                movie={movie}
                updateMovieState={updateMovieState}
                index={index}
              />
            ))}
          </Grid>
        </ListContainer>
      </Container>
    );
  };
  
  export default Home;