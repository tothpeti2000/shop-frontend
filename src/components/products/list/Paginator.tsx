import { Box } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import { useProductListContext } from "../../../context/ProductListContext";
import "./Paginator.css";

const Paginator = () => {
  const { page, totalPages, updatePage } = useProductListContext();

  const handlePageChange = (pageIdx: number) => {
    updatePage(pageIdx + 1);
  };

  return (
    <Box className="paginator">
      <ReactPaginate
        forcePage={page - 1}
        pageCount={totalPages}
        pageRangeDisplayed={5}
        nextLabel="Next >"
        previousLabel="< Previous"
        breakLabel="..."
        onPageChange={(page) => handlePageChange(page.selected)}
      />
    </Box>
  );
};

export default Paginator;
