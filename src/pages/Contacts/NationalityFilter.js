import React, { memo } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { NATIONALITY_HUMAN_NAME } from "../../constants/nationality";

export const NationalityFilter = memo(({ filters, onFiltersChange }) => {
  return (
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
  );
});
