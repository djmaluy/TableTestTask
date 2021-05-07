import React, { useState, useCallback } from "react";
import { Container } from "@material-ui/core";
import { useContacts } from "./useContacts";
import { Typography } from "@material-ui/core";
import { ContactsTable } from "../ContactsTable/ContactsTable";
import Grid from "@material-ui/core/Grid";
import "./Contacts.css";
import { useViewMode } from "./useViewMode";
import { VIEW_MODE } from "../../constants";

import { ContactsFilters } from "./ContactsFilters";

const filtersDefaultValue = {
  fullname: "",
  gender: "all",
  nationality: "all",
};
export const Contacts = () => {
  const contacts = useContacts();

  const [viewMode, setViewMode] = useViewMode();
  const [filters, setFilters] = useState(filtersDefaultValue);

  const updateFilter = useCallback((name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(filtersDefaultValue);
  }, []);

  const filterByFullname = ({ first, last }, fullname) =>
    first?.toLocaleLowerCase().includes(fullname.toLocaleLowerCase()) ||
    last?.toLocaleLowerCase().includes(fullname.toLocaleLowerCase());

  const filterByGender = (value, gender) => {
    if (gender === "all") {
      return true;
    }
    return value === gender;
  };
  const filterByNationality = (value, nationality) => {
    if (nationality === "all") {
      return true;
    }
    return value === nationality;
  };

  const filteredContacts = contacts.data
    .filter((c) => filterByFullname(c.name, filters.fullname))
    .filter((c) => filterByGender(c.gender, filters.gender))
    .filter((c) => filterByNationality(c.nat, filters.nationality));

  return (
    <Container>
      <Grid item xs={12} className="viewMode">
        <Typography variant="h4" component="h4">
          Contacts
        </Typography>
        <div>
          <button onClick={() => setViewMode(VIEW_MODE.GRID)}>Grid</button>
          <button onClick={() => setViewMode(VIEW_MODE.TABLE)}>Table</button>
        </div>
      </Grid>
      <Grid item xs={12} className="filters">
        <ContactsFilters
          clearFilters={clearFilters}
          filters={filters}
          updateFilter={updateFilter}
        />
      </Grid>
      {(() => {
        if (contacts.isLoading) {
          return <div>...Loading</div>;
        }
        if (viewMode === VIEW_MODE.TABLE) {
          return <ContactsTable data={filteredContacts} />;
        }
        if (viewMode === VIEW_MODE.GRID) {
          return <div>Grid</div>;
        }
        return null;
      })()}
    </Container>
  );
};
