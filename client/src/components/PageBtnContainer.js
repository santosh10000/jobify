import { useAppContext } from "../context/appContext";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";

const PageBtnContainer = () => {
  const { numOfPages, page, changePages } = useAppContext();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePages(newPage);
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    changePages(newPage);
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => (
          <button
            className={pageNumber === page ? "pageBtn active" : "pageBtn"}
            key={pageNumber}
            onClick={() => changePages(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button className="prev-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
        Next
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
