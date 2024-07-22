import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import ContentList from '../components/ContentList';
import { getContent } from '../services/contentService';

const HomePage = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchContents = async (query) => {
    setLoading(true);
    const data = await getContent(query);
    setContents(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchContents('');
  }, []);

  return (
    <Container>
      <SearchBar onSearch={fetchContents} />
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <ContentList contents={contents} />
      )}
    </Container>
  );
};

export default HomePage;
