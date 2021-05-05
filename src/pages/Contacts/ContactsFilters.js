import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

export const ContactsFilters = ({ filters, updateFilter }) => {
  const onFiltersChange = (e) => {
    updateFilter(e.target.name, e.target.value);
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   [e.target.name]: e.target.value,
    // }));
  };
  return (
    <>
      <TextField
        name="fullname"
        label="Search by full name"
        variant="outlined"
        value={filters.fullname}
        onChange={onFiltersChange}
      />
      <FormControl variant="outlined" className="selectGender">
        <InputLabel id="Gender">Gender</InputLabel>
        <Select
          size="small"
          labelId="Gender"
          name="gender"
          value={filters.gender}
          onChange={onFiltersChange}
          label="Gender"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
