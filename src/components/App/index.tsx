import React, { useState } from 'react';
import {
  CCollapse,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavLink,
  CToggler,
} from '@coreui/react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Users from '../Users';
import Edit from '../Users/Edit';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
      <CNavbar expandable="sm" color="info">
        <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
        <CNavbarBrand>Test</CNavbarBrand>
        <CCollapse show={isOpen} navbar>
          <CNavbarNav>
            <CNavLink to="/">Home</CNavLink>
            <CNavLink to="/users">Users</CNavLink>
          </CNavbarNav>
        </CCollapse>
      </CNavbar>
      <div className="mt-4">
        <Switch>
          <Route path="/user/add">
            <Edit />
          </Route>
          <Route path="/user/edit/:id">
            <Edit />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
