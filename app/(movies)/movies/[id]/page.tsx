import { Suspense } from "react";
import MovieVideos from "../../../../components/movie-info";
import MovieInfo from "../../../../components/movie-videos";

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {


  return (
    <div>
      <Suspense fallback={<h1>Movie Info Loading...</h1>}>
        <MovieInfo id={id}/>
      </Suspense>
      <Suspense fallback={<h1>Movie Video Loading...</h1>}>
        <MovieVideos id={id}/>
      </Suspense>
    </div>
  );
}
