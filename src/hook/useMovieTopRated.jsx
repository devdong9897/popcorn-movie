import { useQuery } from "@tanstack/react-query";
import api from "../util/api";

const fetchMovieTopRated = () => {
  return api.get(`/movie/top_rated`);
};

export const useMovieTopRatedQuery = () => {
  return useQuery({
    queryKey: ["movie-top_rated"],
    queryFn: fetchMovieTopRated,
    select: (result) => result.data,
  });
};
