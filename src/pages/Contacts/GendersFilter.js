import React, { memo } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export const GendersFilter = memo(({ filters, onFiltersChange }) => {
  return (
    <FormControl variant="outlined" className="selectGender">
      <InputLabel id="Gender">Gender</InputLabel>
      <Select
        labelId="Gender"
        name="gender"
        value={filters.gender}
        onChange={onFiltersChange}
        label="Gender"
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </Select>
    </FormControl>
  );
});
