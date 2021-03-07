import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Remult with React</h1>
      <Switch>
        <Route exact path={["/", "/tasks"]} component={TaskList} />
      </Switch>
    </div>
  );
}

export default App;
