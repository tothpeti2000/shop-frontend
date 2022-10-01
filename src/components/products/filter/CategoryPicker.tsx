import { useGetAllCategories } from "../../../api";
import Loading from "../../Loading";
import { createCategoryGroups } from "./utils";

const CategoryPicker = () => {
  const { data, isLoading } = useGetAllCategories({
    query: {
      onSuccess: (data) => createCategoryGroups(data.categories!),
    },
  });

  return <Loading isLoading={isLoading}></Loading>;
};

export default CategoryPicker;
