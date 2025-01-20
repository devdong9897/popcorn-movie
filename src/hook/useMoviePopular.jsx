import { useQuery } from "@tanstack/react-query";
import api from "../util/api";

const fetchMoviePopular = () => {
  return api.get(`/movie/popular`, {
    params: {
      language: "ko-KR",
    },
  });
};

export const useMoviePopularQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchMoviePopular,
    select: (result) => result.data,
  });
};
