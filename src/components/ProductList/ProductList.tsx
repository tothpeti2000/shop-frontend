import { Flex } from "@chakra-ui/layout";
import { Skeleton, Text, Heading, Icon, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { QueryCache, useQueryClient } from "react-query";
import useProducts from "../../api/useProducts";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const { GetProducts, page, setPage } = useProducts();
  const queryCache = useQueryClient();
  const { isLoading, error, data } = GetProducts("all");

  const HasPreviousPage = () => {
    return data?.data.currentPage! > 1;
  };

  const HasNextPage = () => {
    return data?.data.currentPage! < data?.data.totalPages!;
  };

  const HandlePageChange = (diff: number) => {
    setPage(page + diff);
    queryCache.invalidateQueries("products");
  };

  return (
    <Flex direction={"column"} flex="3">
      <Skeleton isLoaded={!isLoading} minH="100vh">
        <Flex px={5} mb={5}>
          <Heading>
            Page {data?.data.currentPage} of {data?.data.totalPages}
          </Heading>

          <IconButton
            aria-label="PrevPage"
            icon={<Icon as={BsArrowLeft} boxSize="80%" />}
            mx={5}
            disabled={!HasPreviousPage()}
            onClick={() => HandlePageChange(-1)}
          />

          <IconButton
            aria-label="NextPage"
            icon={<Icon as={BsArrowRight} boxSize="80%" />}
            mx={5}
            disabled={!HasNextPage()}
            onClick={() => HandlePageChange(1)}
          />
        </Flex>

        <Flex wrap="wrap" justifyContent="space-around">
          {data?.data.items.map((p) => {
            return <ProductListItem key={p.id} {...p} />;
          })}
        </Flex>
      </Skeleton>
    </Flex>
  );
};

export default ProductList;
