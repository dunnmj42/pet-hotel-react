import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const dispatch = useDispatch();
  const classes = useStyles();
  const owners = useSelector((store) => store.owners);
  const [owner, setOwner] = useState('');

  useEffect(() => dispatch({ type: 'FETCH_OWNERS' }), []);

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
              {owners.map((item) => {
                return (
                  <TableRow key={item[0]}>
                    <TableCell>{item[1]}</TableCell>
                    <TableCell>pets go here</TableCell>
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
