import React, { useState, useEffect } from "react";
import { Form, FormControl } from "react-bootstrap";
import "../custom.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query, onSearch]);

  return (
    <Form className="mb-4 d-flex justify-content-center">
      <FormControl
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search content..."
        className="form-control w-50"
      />
    </Form>
  );
};

export default SearchBar;
