// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="profile-container">
        {/* Navigation Bar (Tabs) */}
        <nav className="tabs">
          <NavLink
            to="/profile/overview"
            className="tab-link"
            activeClassName="active"
          >
            Overview
          </NavLink>
          <NavLink
            to="/profile/orders"
            className="tab-link"
            activeClassName="active"
          >
            Orders
          </NavLink>
          <NavLink
            to="/profile/settings"
            className="tab-link"
            activeClassName="active"
          >
            Settings
          </NavLink>
        </nav>

        {/* Tab Content */}
        <div className="tab-content">
          <Routes>
            <Route
              path="/profile/overview"
              element={
                <div>
                  <h2>Overview</h2>
                  <p>This is the overview section of your profile.</p>
                </div>
              }
            />
            <Route
              path="/profile/orders"
              element={
                <div>
                  <h2>Your Orders</h2>
                  <p>Here you can see your recent orders.</p>
                </div>
              }
            />
            <Route
              path="/profile/settings"
              element={
                <div>
                  <h2>Settings</h2>
                  <p>Manage your account settings here.</p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
