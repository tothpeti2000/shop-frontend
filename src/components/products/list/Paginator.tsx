import { Box, Flex, Select, Text } from "@chakra-ui/react";
import React from "react";
import ReactPaginate from "react-paginate";
import { useProductListContext } from "../../../context/ProductListContext";
import "./Paginator.css";

const Paginator = () => {
  const { page, count, totalPages, updatePage, updateCount } =
    useProductListContext();

  const handlePageChange = (pageIdx: number) => {
    updatePage(pageIdx + 1);
  };

  const handleCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateCount(parseInt(e.target.value));
  };

  return (
    <Box className="paginator">
      <Flex alignItems="center" mb={4}>
        <Text mr={2}>Items per page:</Text>

        <Select
          value={count}
          w="80px"
          size="sm"
          onChange={(e) => handleCountChange(e)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </Select>
      </Flex>

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
