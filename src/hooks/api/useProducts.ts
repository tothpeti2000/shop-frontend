import { useState } from "react";

const useProducts = () => {
  const [page, setPage] = useState(1);

  return { page, setPage };
};

export default useProducts;
