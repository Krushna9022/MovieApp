import React, { useState } from 'react';
import Home from '../pages/Home';
import Popular from '../pages/Popular';
import Toprate from '../pages/Toprate';
import Upcoming from '../pages/Upcoming';
import { Route, Routes, NavLink } from 'react-router-dom';

function Header() {
 
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            MovieDb
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/popular" className="nav-link active">
                  Popular
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/toprate" className="nav-link active">
                  Top Rated
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/upcoming" className="nav-link active">
                  Upcoming
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search" >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for movies..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

   
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/toprate" element={<Toprate />} />
      </Routes>
    </>
  );
}

export default Header;
