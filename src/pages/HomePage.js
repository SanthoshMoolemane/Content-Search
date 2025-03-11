import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import ContentList from "../components/ContentList";
import { getContent } from "../services/contentService";
import "../custom.css";

const HomePage = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState("");

  const fetchContents = async (newQuery, newOffset = 0) => {
    setLoading(true);
    const data = await getContent(newQuery, newOffset);
    setContents(newOffset === 0 ? data : [...contents, ...data]);
    setLoading(false);
  };

  const handleScroll = () => {
    console.log("scroll:");
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    setOffset((prevOffset) => prevOffset + 20);
  };

  useEffect(() => {
    fetchContents(query, offset);
  }, [offset]);

  useEffect(() => {
    fetchContents(query);
  }, [query]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Content Search</h1>
      <SearchBar onSearch={setQuery} />
      <h3>Content Library</h3>
      {loading && offset === 0 ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ContentList contents={contents} />
      )}
      {loading && offset > 0 && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
    </Container>
  );
};

export default HomePage;
