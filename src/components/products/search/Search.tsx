import { SubmitHandler, useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useProductListContext } from "../../../context/ProductListContext";
import InputField from "../../form/InputField";

interface QueryData {
  query: string;
}

const Search = () => {
  const { control, handleSubmit } = useForm<QueryData>();
  const { updateSearchQuery } = useProductListContext();

  const onSubmit: SubmitHandler<QueryData> = (data) => {
    updateSearchQuery(data.query);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        type="text"
        name="query"
        placeholder="Type here to search..."
        control={control}
        icon={FaSearch}
      />
    </form>
  );
};

export default Search;
