import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Nav from './Nav';
import NIHData from './NIHData';
import WHOData from './WHOData'
import CDCData from './CDCData';
import PastSearches from './PastSearches'
import Home from './Home'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
   <Router>
    <div className="app-wrap">
    <Nav />
     <Switch>
     <Route path='/' component={Home} exact />
     <Route path='/PastSearches' component={PastSearches} />
     <Route path='/nihdata' component={NIHData} /> 
     <Route path='/whodata' component={WHOData} />
     <Route path='/cdcdata' component={CDCData} />
     </Switch>
     </div>
    </Router>

  );
}
export default App;
