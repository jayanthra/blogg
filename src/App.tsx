import Home from './components/home/home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './components/create/Create';
import Details from './components/details/Details';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blog/:id">
            <Details/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
