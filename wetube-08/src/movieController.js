import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  const allMovies = getMovies();
  res.render("home", { pageTitle: "Movies!!", allMovies });
};

export const movieDetail = (req, res) => {
  const curMovie = getMovieById(req.params.id);
  res.render("detail", {
    pageTitle: curMovie.title,
    summary: curMovie.summary,
    genres: curMovie.genres
  });
};

export const filterMovie = (req, res) => {
  let filteredMovie = [];
  let searchText = "";
  const { year, rating } = req.query;

  if (year) {
    filteredMovie = getMovieByMinimumYear(year);
    searchText = `years : ${year}`;
  } else if (rating) {
    filteredMovie = getMovieByMinimumRating(rating);
    searchText = `rating : ${rating}`;
  }

  res.render("filter", {
    pageTitle: `Serching by ${searchText}`,
    filteredMovie
  });
};
