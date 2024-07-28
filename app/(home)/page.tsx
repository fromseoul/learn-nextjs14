import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(API_URL);
  return await response.json();
}

export default async function HomePage() {

  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => {
        return (
          <Movie title={movie.title} id={movie.id} poster_path={movie.poster_path} key={movie.id} />
        );
      })}
    </div>);
}