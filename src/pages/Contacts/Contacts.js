import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useContacts } from "./useContacts";
import { Typography } from "@material-ui/core";
import { ContactsTable } from "../ContactsTable/ContactsTable";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "./Contacts.css";
import { useViewMode } from "./useViewMode";
import { VIEW_MODE } from "../../constants";

const filtersDefaultValue = {
  fullname: "",
};
export const Contacts = () => {
  const contacts = useContacts();
  const [viewMode, setViewMode] = useViewMode();
  const [filters, setFilters] = useState(filtersDefaultValue);

  const onFiltersChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  const filterByFullname = ({ first, last }, fullname) =>
    first?.toLocaleLowerCase().includes(fullname.toLocaleLowerCase()) ||
    last?.toLocaleLowerCase().includes(fullname.toLocaleLowerCase());

  const filteredContacts = contacts.data.filter((c) =>
    filterByFullname(c.name, filters.fullname)
  );

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
        <TextField
          name="fullname"
          label="Search by full name"
          variant="outlined"
          size="small"
          value={filters.fullname}
          onChange={onFiltersChange}
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
