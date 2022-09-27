import { Flex } from "@chakra-ui/layout";
import { Skeleton, Text, Heading, Icon, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { QueryCache, useQueryClient, useQuery } from "react-query";
import { useGetProducts } from "../../../api";
import useProducts from "../../../hooks/api/useProducts";
import Loading from "../../Loading";

const ProductList = () => {
  const { page, setPage } = useProducts();
  const queryCache = useQueryClient();
  const { data, isLoading } = useGetProducts();

  const HasPreviousPage = () => {
    // return data?.data.currentPage! > 1;
  };

  const HasNextPage = () => {
    // return data?.data.currentPage! < data?.data.totalPages!;
  };

  const HandlePageChange = (diff: number) => {
    setPage(page + diff);
    queryCache.invalidateQueries("products");
  };

  return (
    <Loading isLoading={isLoading}>
      <Flex px={5} mb={5}>
        <Heading>
          {/* Page {data?.data.currentPage} of {data?.data.totalPages} */}
        </Heading>

        <IconButton
          aria-label="PrevPage"
          icon={<Icon as={BsArrowLeft} boxSize="80%" />}
          mx={5}
          // disabled={!HasPreviousPage()}
          onClick={() => HandlePageChange(-1)}
        />

        <IconButton
          aria-label="NextPage"
          icon={<Icon as={BsArrowRight} boxSize="80%" />}
          mx={5}
          // disabled={!HasNextPage()}
          onClick={() => HandlePageChange(1)}
        />
      </Flex>

      <Flex wrap="wrap" justifyContent="space-around">
        {/* {data?.data.items.map((p) => {
            return <ProductListItem key={p.id} {...p} />;
          })} */}
      </Flex>
    </Loading>
  );
};

export default ProductList;
