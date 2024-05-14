import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeDetails from './EmployeeDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/employees/:id" component={EmployeeDetails} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default App;
