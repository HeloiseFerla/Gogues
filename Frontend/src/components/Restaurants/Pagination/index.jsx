import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SPagination from './style';
import List from './List';
import PageNumbers from './PageNumbers';

export default function Pagination({ city }) {
  const [results, setResults] = useState([]);
  const [isUpdate, setIsupdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/restaurants?city=${city}`)

      .then(({ data }) => {
        setIsupdate(false);
        setResults(data);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
        setIsupdate(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <SPagination>
      <h3>Les restaurants de {city}</h3>
      {isUpdate && (
        <>
          <List
            results={results}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
          <PageNumbers
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </SPagination>
  );
}

Pagination.propTypes = {
  city: PropTypes.string,
};
Pagination.defaultProps = {
  city: '',
};
