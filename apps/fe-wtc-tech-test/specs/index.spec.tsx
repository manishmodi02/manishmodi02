import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import fetchMock from 'fetch-mock';

import Home, { MovieCard } from '../pages/home';

export const movieData = {
  Actors: 'Vivica A. Fox, Ambrosia Kelley, Michael Parks, James Parks',
  Awards: 'Nominated for 2 Golden Globes. Another 22 wins & 82 nominations.',
  BoxOffice: 'N/A',
  Country: 'USA',
  DVD: 'N/A',
  Director: 'Quentin Tarantino',
  Genre: 'Action, Crime, Thriller',
  Language: 'English, Cantonese, Mandarin, Spanish',
  Metascore: '83',
  Plot:
    'The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg',
  Production: 'N/A',
  Rated: 'R',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '8.0/10' },
    { Source: 'Rotten Tomatoes', Value: '84%' },
  ],
  Released: '16 Apr 2004',
  Runtime: '137 min',
  Saved: 'False',
  Title: 'Kill Bill: Vol. 2',
  Type: 'movie',
  Watched: 'True',
  Website: 'N/A',
  Writer:
    'Quentin Tarantino, Quentin Tarantino (character The Bride), Uma Thurman (character The Bride)',
  Year: '2004',
  imdbID: 'tt0378194',
  imdbRating: '8.0',
  imdbVotes: '657,553',
};

describe('test cases for home component', () => {
  beforeAll(() => {
    fetchMock.mock('http://localhost:3333/api/movies', {
      json: () => [movieData],
    });
    jest.spyOn(window, 'fetch');
  });

  beforeEach(() => {
    render(<Home />);
  });

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    fetchMock.restore();
  });

  it('movies API should be called once', async () => {
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should render the homepage', () => {
    const HomeContainer = render(<Home />);
    expect(HomeContainer).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const HomeComponent = render(<Home />);
    expect(HomeComponent).toMatchSnapshot();
  });

  it('should render Movies title', () => {
    const TitleNode = screen.getByTestId('count-title');

    expect(TitleNode).toBeTruthy();
  });
});

describe('test cases for movie card component', () => {
  let component;
  const defaultProps = {
    movie: movieData,
    index: 0,
    updateMovieState: jest.fn(),
  };

  beforeAll(() => {
    fetchMock.mock('http://localhost:3333/api/movies/id/tt0378194', {
      json: () => 'ok',
    });
    jest.spyOn(window, 'fetch');
  });

  beforeEach(() => {
    component = render(<MovieCard {...defaultProps}></MovieCard>);
  });

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    fetchMock.restore();
  });

  it('should render movie card component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render movie card component', () => {
    expect(component).toBeTruthy();
  });

  it('should render view button container', () => {
    const ViewBtnElement = screen.getByTestId('view-btn-div');

    expect(ViewBtnElement).toBeTruthy();
  });

  it('should click on view eye button', () => {
    const ViewBtnElement = screen.getByTestId('view-btn-div');

    fireEvent.click(ViewBtnElement);

    // expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should render like button', () => {
    const LikeBtnElement = screen.getByTestId('like-btn-div');

    expect(LikeBtnElement).toBeTruthy();
  });

  it('should click on like button', () => {
    const LikeBtnNode = screen.getByTestId('like-btn-div');

    fireEvent.click(LikeBtnNode);
  });

  it('should render rating container', () => {
    const RatingContainer = screen.getByTestId('rating-container');

    expect(RatingContainer).toBeTruthy();
  });
});
