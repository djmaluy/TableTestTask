import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useContacts } from "./useContacts";
import { Typography } from "@material-ui/core";
import { ContactsTable } from "../ContactsTable/ContactsTable";
import Grid from "@material-ui/core/Grid";
import "./Contacts.css";

const VIEW_MODE = {
  TABLE: "table",
  GRID: "grid",
};
export const Contacts = () => {
  const contacts = useContacts();
  const [viewMode, setViewMode] = useState(VIEW_MODE.TABLE);

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
      {(() => {
        if (contacts.isLoading) {
          return <div>...Loading</div>;
        }
        if (viewMode === VIEW_MODE.TABLE) {
          return (
            <Grid item xs={12}>
              <ContactsTable data={contacts.data} />
            </Grid>
          );
        }
        if (viewMode === VIEW_MODE.GRID) {
          return <div>Grid</div>;
        }
        return null;
      })()}
    </Container>
  );
};
