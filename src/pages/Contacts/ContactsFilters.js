import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import { NATIONALITY_HUMAN_NAME } from "../../constants/nationality";
import { Box } from "@material-ui/core";
import "./Contacts.css";

export const ContactsFilters = ({ filters, updateFilter, clearFilters }) => {
  const onFiltersChange = (e) => {
    updateFilter(e.target.name, e.target.value);
  };
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex">
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
        <FormControl variant="outlined" className="selectNationality">
          <InputLabel id="Nationality">Nationality</InputLabel>
          <Select
            labelId="Nationality"
            name="nationality"
            value={filters.nationality}
            onChange={onFiltersChange}
            label="Nationality"
          >
            <MenuItem value="all">All</MenuItem>
            {Object.entries(NATIONALITY_HUMAN_NAME).map(([key, label]) => {
              return (
                <MenuItem key={key} value={key}>
                  {label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Button size="small" startIcon={<ClearIcon />} onClick={clearFilters}>
        Clear
      </Button>
    </Box>
  );
};
