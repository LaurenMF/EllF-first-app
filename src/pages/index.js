import React from 'react';
import { Link } from 'gatsby';

const HomePage = () => {
  function onButtonClick() {
    console.log('Hi there');
  }
  
  return (
    <React.Fragment>
        <h1>Home Page</h1>
        <button onClick={onButtonClick}>Click Me</button>
        <Link to="/about">Link to about page</Link>
    </React.Fragment>
  );
  
};

export default HomePage;

