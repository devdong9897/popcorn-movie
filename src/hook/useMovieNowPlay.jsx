import { useQuery } from "@tanstack/react-query";
import api from "../util/api";

const fetchNowPlay = () => {
  return api.get(`/movie/now_playing`, {
    params: {
      language: "ko-KR",
    },
  });
};

export const useMovieNowPlayQuery = () => {
  return useQuery({
    queryKey: ["movie-now_playing"],
    queryFn: fetchNowPlay,
    select: (result) => result.data,
  });
};
