import { useState } from 'react';
import PropTypes from 'prop-types';
import left from 'assets/left.svg';
import right from 'assets/right.svg';
import SPageNumbers from './style';

export default function PageNumbers({
  totalPages,
  setCurrentPage,
  currentPage,
}) {
  const [pageNbLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const pages = [];
  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }
  const changePage = (e) => {
    setCurrentPage(Number(e.target.id));
  };
  const renderPageNumbers = pages.map((number) => {
    return number > minPageNumberLimit && number <= maxPageNumberLimit ? (
      <li key={number}>
        <button
          id={number}
          onClick={changePage}
          className={currentPage === number ? 'active' : null}
          type="button"
        >
          {number}
        </button>
      </li>
    ) : null;
  });
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNbLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNbLimit);
    }
  };

  const handlePreviousBtn = () => {
    setCurrentPage(currentPage - 1);

    if (currentPage - 1 <= minPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNbLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNbLimit);
    }
  };

  return (
    <SPageNumbers>
      {totalPages > 2 ? (
        <>
          <li>
            <button
              onClick={handlePreviousBtn}
              className="previous"
              type="button"
              disabled={currentPage === pages[0]}
            >
              <img src={left} alt="Flèche précedent" />
            </button>
          </li>
          {renderPageNumbers}
          <li>
            <button
              onClick={handleNextBtn}
              className="next"
              type="button"
              disabled={currentPage === pages[pages.length - 1]}
            >
              <img src={right} alt="Flèche précedent" />
            </button>
          </li>
        </>
      ) : null}
    </SPageNumbers>
  );
}

PageNumbers.propTypes = {
  totalPages: PropTypes.number,
  setCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
};
PageNumbers.defaultProps = {
  totalPages: 0,
  setCurrentPage: () => {},
  currentPage: 1,
};
