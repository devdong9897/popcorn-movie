import { useQuery } from "@tanstack/react-query";
import api from "../util/api";

const fetchMovieDetail = (id) => {
  return api.get(`/movie/${id}`, {
    params: {
      language: "ko-KR",
    },
  });
};

export const useMovieDetailQuery = (id) => {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: () => fetchMovieDetail(id),
    select: (result) => result.data,
  });
};
