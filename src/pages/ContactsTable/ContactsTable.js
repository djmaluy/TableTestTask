import React from "react";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import { CopyToClipboard } from "../../components/CopyToClipboard";
import { NATIONALITY_HUMAN_NAME } from "../../constants/nationality";

export const ContactsTable = ({ data }) => {
  return (
    <TableContainer component={Paper} data-testid="contacts-table-container">
      <Table aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Avatar</TableCell>
            <TableCell>FullName</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contact) => (
            <TableRow key={contact.login.uuid}>
              <TableCell>
                <Avatar alt="avatar" src={contact.picture.thumbnail} />
              </TableCell>
              <TableCell>
                {contact.name.title} {contact.name.first} {contact.name.last}
              </TableCell>
              <TableCell>
                <Typography>
                  {format(parseISO(contact.dob.date), "MM/dd/yyyy")}
                </Typography>
                <Typography>{contact.dob.age} years</Typography>
              </TableCell>
              <TableCell>
                <CopyToClipboard text={contact.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboard text={contact.phone} />
              </TableCell>
              <TableCell>
                <strong>/{contact.location.country}/</strong>
                <div>
                  {contact.location.postcode} {contact.location.city}{" "}
                  {contact.location.street.name}{" "}
                  {contact.location.street.number}
                </div>
              </TableCell>
              <TableCell>{NATIONALITY_HUMAN_NAME[contact.nat]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
