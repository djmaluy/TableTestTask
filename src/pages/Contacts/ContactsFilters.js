import React, { useCallback, memo } from "react";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import { Box } from "@material-ui/core";
import "./Contacts.css";
import { GendersFilter } from "./GendersFilter";
import { NationalityFilter } from "./NationalityFilter";
import { SearchFilter } from "./SearchFilter";

export const ContactsFilters = memo(
  ({ filters, updateFilter, clearFilters }) => {
    const onFiltersChange = useCallback(
      (e) => {
        updateFilter(e.target.name, e.target.value);
      },
      [updateFilter]
    );
    return (
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <SearchFilter filters={filters} onFiltersChange={onFiltersChange} />
          <GendersFilter filters={filters} onFiltersChange={onFiltersChange} />
          <NationalityFilter
            filters={filters}
            onFiltersChange={onFiltersChange}
          />
        </Box>
        <Button size="small" startIcon={<ClearIcon />} onClick={clearFilters}>
          Clear
        </Button>
      </Box>
    );
  }
);
