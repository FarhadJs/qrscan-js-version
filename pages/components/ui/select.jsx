import React, { useEffect, useState } from "react";

const Select = ({ feeItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(feeItems);
    console.log(feeItems);
  }, [feeItems]);

  return (
    <select
      aria-label="Select"
      className="w-full bg-transparent border border-neutral-50 p-2 rounded outline-none focus-within:border-neutral-500">
      <option className="text-black hidden" defaultValue={true}></option>
      {items.map((feeItem) => (
        <option className="bg-neutral-700" key={feeItem.value}>
          {feeItem.label}
        </option>
      ))}
      {/* <option value="low">low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option> */}
    </select>
  );
};
export default Select;
