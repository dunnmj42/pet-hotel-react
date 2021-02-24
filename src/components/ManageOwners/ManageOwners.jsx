import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  makeStyles,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { Close, Add } from '@material-ui/icons';

// Dummy data for building purposes
const owners = [
  { owner: 'Mike', pets: 2 },
  { owner: 'Kevin', pets: 1 },
  { owner: 'Sean', pets: 4 },
  { owner: 'Woody', pets: 1 },
];

// Component styling
const useStyles = makeStyles((theme) => ({
  inputs: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  inputTitle: {
    marginRight: theme.spacing(2),
  },
  table: {
    maxWidth: 500,
  },
}));

function ManageOwners() {
  const classes = useStyles();
  const [owner, setOwner] = useState('');

  const handleInput = (event) => {
    setOwner(event.target.value);
  };

  const handleDelete = () => {
    console.log('clicked handleDelete');
  };

  return (
    <>
      <Box p={2} display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h5" className={classes.inputTitle}>
          Add an Owner:
        </Typography>
        <TextField
          className={classes.inputs}
          label="Owner Name"
          value={owner}
          onChange={handleInput}
        />
        <Button variant="outlined" color="primary" endIcon={<Add />}>
          Add Owner
        </Button>
      </Box>
      <Box display="flex" justifyContent="center">
        <TableContainer
          component={Paper}
          className={classes.table}
          elevation={4}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Number of Pets</Typography>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {owners.map((item, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{item.owner}</TableCell>
                    <TableCell>{item.pets}</TableCell>
                    <TableCell>
                      <IconButton onClick={handleDelete} size="small">
                        <Tooltip title="Delete">
                          <Close fontSize="small" />
                        </Tooltip>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default ManageOwners;
