import React from "react";
import { Container } from "@material-ui/core";
import { useContacts } from "./useContacts";
import { Typography } from "@material-ui/core";
import { ContactsTable } from "../ContactsTable/ContactsTable";
import Grid from "@material-ui/core/Grid";

export const Contacts = () => {
  const contacts = useContacts();

  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Contacts
        </Typography>
      </Grid>
      {contacts.isLoading ? (
        <div>...Loading</div>
      ) : (
        <Grid item xs={12}>
          <ContactsTable data={contacts.data} />
        </Grid>
      )}
    </Container>
  );
};
