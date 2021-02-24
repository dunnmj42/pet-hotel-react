import { Box, Typography, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// Component styling
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Nav() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box
      boxShadow="3"
      p={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography
        variant="h4"
        onClick={() => history.push('/dashboard')}
        style={{ cursor: 'pointer' }}
      >
        Welcome to Pet Hotel
      </Typography>
      <Box>
        <Button
          className={classes.button}
          onClick={() => history.push('/dashboard')}
        >
          Dashboard
        </Button>
        <Button
          className={classes.button}
          onClick={() => history.push('/owners')}
        >
          Owners
        </Button>
      </Box>
    </Box>
  );
}

export default Nav;
