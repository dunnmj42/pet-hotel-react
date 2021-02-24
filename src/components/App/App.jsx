import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

// Component imports
import Nav from '../Nav/Nav';
import Dashboard from '../Dashboard/Dashboard';
import ManageOwners from '../ManageOwners/ManageOwners';
import MuiTheme from '../MuiTheme/MuiTheme';

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline />
      <Router>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/owners">
            <ManageOwners />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
