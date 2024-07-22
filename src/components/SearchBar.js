import React, { useState, useEffect } from 'react';
import { Form, FormControl } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query, onSearch]);

  return (
    <Form className="mb-4">
      <FormControl
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search content..."
      />
    </Form>
  );
};

export default SearchBar;
