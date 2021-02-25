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
  const [newOwner, setNewOwner] = useState('');

  useEffect(() => {
    dispatch({ type: 'FETCH_OWNERS' });
    // eslint-disable-next-line
  }, []);

  const handleInput = (event) => {
    setNewOwner(event.target.value);
  };

  const handleSubmit = () => {
    dispatch({ type: 'NEW_OWNER', payload: newOwner });
    setNewOwner('');
  };

  const handleDelete = (id) => {
    dispatch({ type: 'REMOVE_OWNER', payload: id });
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
          value={newOwner}
          onChange={handleInput}
        />
        <Button
          variant="outlined"
          color="primary"
          endIcon={<Add />}
          onClick={handleSubmit}
        >
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
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.pet_count}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleDelete(item.id)}
                        size="small"
                      >
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
