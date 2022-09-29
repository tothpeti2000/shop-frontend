import { useGetCategories } from "../../../api";
import Loading from "../../Loading";
import { createCategoryGroups } from "./utils";

const CategoryPicker = () => {
  const { data, isLoading } = useGetCategories(undefined, {
    query: {
      onSuccess: (data) => createCategoryGroups(data.categories!),
    },
  });

  return <Loading isLoading={isLoading}></Loading>;
};

export default CategoryPicker;
