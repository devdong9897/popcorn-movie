import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AppLayout.css";

const AppLayout = () => {
  const [navbarScroll, setNavbarScroll] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const searchKeyword = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/movies?q=${keyword}`);
    }
  };

  return (
    <div>
      <Navbar
        expand="lg"
        className={`navbar-custom ${navbarScroll ? "navbar-solid" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" style={{ color: "#FFD700" }}>
            Popcorn Movie
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/" style={{ color: "#FFD700" }}>
                홈
              </Nav.Link>
              <Nav.Link as={Link} to="/movies" style={{ color: "#FFD700" }}>
                영화
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button style={{ background: "#FFD700", outline: "none" }}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        style={{
          backgroundColor: "#1A1A2E",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
