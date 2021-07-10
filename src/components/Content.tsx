import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { api } from "../services/api";
import "../styles/content.scss";
import "../styles/global.scss";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

type ContentProps = {
  property: {
    selectedGenre: GenreResponseProps;
    movies: MovieProps[];
  };
};

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {props.property.selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {props.property.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
