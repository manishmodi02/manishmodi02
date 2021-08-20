import React, { FC, useEffect, useMemo, useState } from 'react';
import { Movie } from 'apps/fe-wtc-tech-test/types/movie';
import {
  CardContainer,
  Poster,
  PosterContainer,
  IconContainer,
  RatingsContainer,
  Ratings,
  StarsContainer,
} from './Home.styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
/*
Custom Hook useMovies
returns
list of movies and
updated state of the watched and saved variabl
*/
export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  /* side-effect */
  useEffect(() => {
    fetchMovies();
  }, []);

  /* fetches movies */
  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:3333/api/movies');

      const data: Movie[] = await response.json();

      if (data.length) {
        setMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  /* updates the state of the movie */
  const updateMovieState = async (movieId, body) => {
    try {
      const response = await fetch(
        `http://localhost:3333/api/movies/id/${movieId}`,
        {
          method: 'PUT',
          headers: {
            accept: '*/*',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `saved=${body.saved}&watched=${body.watched}`,
        }
      );

      if (response.status === 200) {
        fetchMovies();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    movies,
    updateMovieState,
  };
};

/* calculates the star ratings of a movie */
const StarRatings: FC<{ ratings: number }> = ({ ratings = 0 }) => {
  const starsArray = Array.from({ length: 5 });

  return (
    <StarsContainer>
      {starsArray.map((i, index) =>
        index >= Math.floor(ratings / 2) ? (
          <StarBorderIcon key={`${i}-${index}`} />
        ) : (
          <StarIcon key={`${i}-${index}`} />
        )
      )}
    </StarsContainer>
  );
};

/* interface */
type MovieCardProps = {
  movie: Movie;
  index: number;
  updateMovieState: (movieId: string, body: object) => void;
};
/* Movie Card Component */
export const MovieCard: FC<MovieCardProps> = ({
  movie,
  index,
  updateMovieState,
}) => {
  const EyeIcon = useMemo(
    () => (movie.Watched === 'True' ? VisibilityIcon : VisibilityOffIcon),
    [movie.Watched]
  );

  const HeartIcon = useMemo(
    () => (movie.Saved === 'True' ? FavoriteIcon : FavoriteBorderIcon),
    [movie.Saved]
  );

  return (
    <CardContainer key={`${movie.imdbID}-${index}`}>
      <IconContainer>
        <div
          data-testid="view-btn-div"
          onClick={() =>
            updateMovieState(movie.imdbID, {
              watched: movie.Watched !== 'True',
              saved: movie.Saved
            })
          }
        >
          <EyeIcon />
        </div>
        <div data-testid="like-btn-div"
          onClick={() =>
            updateMovieState(movie.imdbID, {
              saved: movie.Saved !== 'True'
            })
          }
        >
          <HeartIcon />
        </div>
      </IconContainer>
      <PosterContainer>
        <Poster src={movie.Poster} />
      </PosterContainer>
      <RatingsContainer data-testid="rating-container">
        <Ratings>{`(${movie.imdbRating})`}</Ratings>
        <StarRatings ratings={Number(movie.imdbRating)} />
      </RatingsContainer>
    </CardContainer>
  );
};


