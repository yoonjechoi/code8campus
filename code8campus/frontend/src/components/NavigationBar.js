import React from 'react';
import {NavLink} from 'react-router-dom';
import code8campusLogo from 'images/code8campus-logo-alt.png';

const HomeItem = props => (
  <li className="nav-item">
    <NavLink exact to="/" className="nav-link">
      Home <span className="sr-only">(current)</span>
    </NavLink>
  </li>
);

const CoursesItem = props => (
  <li className="nav-item dropdown">
    <NavLink
      to="/courses/"
      className="nav-link dropdown-toggle"
      id="navbarDropdown" role="button"
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      >
      Courses
    </NavLink>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <NavLink
        to="/courses/htmlcss/"
        className="dropdown-item">
        Introduction to HTML/CSS
      </NavLink>
      <div className="dropdown-divider"></div>
      <NavLink
        to="/courses/python/"
        className="dropdown-item">
        Introduction to Python
      </NavLink>
      <NavLink
        to="/courses/django/"
        className="dropdown-item">
        Introduction to Django
      </NavLink>
      <div className="dropdown-divider"></div>
      <NavLink
        to="/courses/coding-interview/"
        className="dropdown-item">
        Cracking Coding Interview
      </NavLink>
    </div>
  </li>
);

const BlogItem = props => (
  <li className="nav-item">
    <NavLink to="/blog/" className="nav-link">Blog</NavLink>
  </li>
);

const ContactItem = props => (
  <li className="nav-item">
    <NavLink to="/contact/" className="nav-link">문의하기</NavLink>
  </li>
);

const NavigationBar = props => (
  <div className="container-fluid">
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <NavLink
        activeClassName="active"
        to="/"
        className="navbar-brand">
        <img className="code8campus-logo" src={code8campusLogo} alt="code8campus"/>
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <HomeItem></HomeItem>
          <CoursesItem></CoursesItem>
          <BlogItem></BlogItem>
          <ContactItem></ContactItem>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
);


export default NavigationBar;
