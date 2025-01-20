import { useQuery } from "@tanstack/react-query";
import api from "../util/api";

const fetchMovieVideo = (id) => {
  return api.get(`/movie/${id}/videos`, {
    params: {
      language: "ko-KR",
    },
  });
};

export const useMovieVideoQuery = (id) => {
  return useQuery({
    queryKey: ["movie-video", id],
    queryFn: () => fetchMovieVideo(id),
    select: (result) => result.data,
    // id가 존재할 때만 쿼리 실행
    enabled: !!id,
  });
};
