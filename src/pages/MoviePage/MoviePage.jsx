import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { useMovieSearchQuery } from "../../hook/useMovieSearch";
import MovieCard from "../../common/MovieCard/MovieCard";
import "./MoviePage.css";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useMovieSearchQuery({
    keyword,
    page,
  });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  
  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="movie">
      {data?.results?.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
      <div className="pagination-container">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5} // 페이지네이션에서 한 번에 표시할 페이지 수의 범위
          marginPagesDisplayed={2}
          pageCount={data?.total_pages} // 전체 페이지가 몇개인지
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null} // 0일 때 페이지네이션을 어떻게 처리할지 결정
          forcePage={page - 1} // 페이지네이션의 초기 선택된 페이지를 강제로 설정
        />
      </div>
    </div>
  );
};

export default MoviePage;
