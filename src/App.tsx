// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import EventPage from './pages/EventPage';
import Sidebar from './components/Sidebar';
import { Sports } from './config';

const sports = Sports

const App = () => {
  return (
    <Router>
      <div className='flex'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          {sports.map((sport) => (
            <Route
              key={sport}
              path={`/sport/${sport}`}
              element={<Category type={sport} />}
            />
          ))}
          {sports.map((sport) => (
            <Route
              key={`${sport}-id`}
              path={`/sport/${sport}/:id`}
              element={<EventPage sport={sport}/>}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;