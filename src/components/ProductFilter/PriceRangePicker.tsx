import React from "react";
import PriceRangeInput from "./PriceRangeInput";

const PriceRangePicker = () => {
  return (
    <>
      <PriceRangeInput title="From:" />
      <PriceRangeInput title="To:" />
    </>
  );
};

export default PriceRangePicker;
