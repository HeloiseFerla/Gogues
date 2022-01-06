import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import SList from './style';

export default function List({ results, currentPage, itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const array = results.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems([...array]);
  }, [currentPage]);
  return (
    <SList>
      {currentItems.map((result) => {
        return <Card key={result.name} result={result} />;
      })}
    </SList>
  );
}
List.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape),
  currentPage: PropTypes.number,
  itemsPerPage: PropTypes.number,
};
List.defaultProps = {
  results: [],
  currentPage: 1,
  itemsPerPage: 10,
};
