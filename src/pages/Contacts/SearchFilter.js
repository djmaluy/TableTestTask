import React, { memo } from "react";
import TextField from "@material-ui/core/TextField";

export const SearchFilter = memo(({ filters, onFiltersChange }) => {
  return (
    <TextField
      name="fullname"
      label="Search by full name"
      variant="outlined"
      value={filters.fullname}
      onChange={onFiltersChange}
    />
  );
});
