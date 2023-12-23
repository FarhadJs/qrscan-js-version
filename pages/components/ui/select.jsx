import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

export default function App({ items }) {
  return (
    <Select aria-label="Select" items={items} variant="bordered">
      {(items) => (
        <SelectItem className="text-black" key={items.value}>
          {items.label}
        </SelectItem>
      )}
    </Select>
  );
}
