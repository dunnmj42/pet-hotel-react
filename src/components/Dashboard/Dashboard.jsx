import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  Button,
  TextField,
  makeStyles,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
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
import {
  Add,
  Close,
  CheckCircle,
  CheckCircleOutline,
} from '@material-ui/icons';

// Component styling
const useStyles = makeStyles((theme) => ({
  inputs: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  inputTitle: {
    marginRight: theme.spacing(2),
  },
  tableButtons: {
    marginRight: theme.spacing(1.5),
  },
  table: {
    maxWidth: 1000,
  },
}));

function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pets = useSelector((store) => store.pets);
  const owners = useSelector((store) => store.owners);
  const [petInputs, setPetInputs] = useState({
    owner: '',
    pet: '',
    breed: '',
    color: '',
    checked_in: Date.now(),
  });

  useEffect(() => {
    dispatch({ type: 'FETCH_OWNERS' });
    dispatch({ type: 'FETCH_PETS' });
    // eslint-disable-next-line
  }, []);

  const handleInputs = (key) => (event) => {
    setPetInputs({ ...petInputs, [key]: event.target.value });
  };

  const formatDate = (date) => {
    if (date) {
      return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
    } else {
      return 'No';
    }
  };

  const handleDelete = () => {
    console.log('clicked handleDelete');
  };

  const handleCheckInOut = () => {
    console.log('clicked handleCheckInOut');
  };

  return (
    <>
      <Box p={2} display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h5" className={classes.inputTitle}>
          Add a Pet:
        </Typography>
        <TextField
          className={classes.inputs}
          label="Pet Name"
          onChange={handleInputs('pet')}
        />
        <TextField
          className={classes.inputs}
          label="Breed"
          onChange={handleInputs('breed')}
        />
        <TextField
          className={classes.inputs}
          label="Color"
          onChange={handleInputs('color')}
        />
        <FormControl className={classes.inputs}>
          <InputLabel id="owner-label">Owner</InputLabel>
          <Select
            labelId="owner-label"
            value={petInputs.owner}
            onChange={handleInputs('owner')}
          >
            {owners.map((item, i) => {
              return (
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          className={classes.inputs}
          color="primary"
          endIcon={<Add />}
        >
          Add Pet
        </Button>
      </Box>
      <Box display="flex" justifyContent="center">
        <TableContainer
          className={classes.table}
          component={Paper}
          elevation={4}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Owner</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Pet Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Breed</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Color</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Checked In</Typography>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pets.map((item, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      {owners.find((owner) => owner.id === item.owner_id)?.name}
                    </TableCell>
                    <TableCell>{item.pet_name}</TableCell>
                    <TableCell>{item.breed}</TableCell>
                    <TableCell>{item.color}</TableCell>
                    <TableCell>{formatDate(item.check_in)}</TableCell>
                    <TableCell>
                      <IconButton
                        className={classes.tableButtons}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckInOut}
                      >
                        {item.checked_in ? (
                          <Tooltip title="Check Out">
                            <CheckCircle color="primary" fontSize="small" />
                          </Tooltip>
                        ) : (
                          <Tooltip title="Check In">
                            <CheckCircleOutline fontSize="small" />
                          </Tooltip>
                        )}
                      </IconButton>
                      <IconButton
                        className={classes.tableButtons}
                        onClick={handleDelete}
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

export default Dashboard;
