import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from '../pages/Resume';
import Project from '../pages/Project';
import Aboutme from '../pages/Aboutme';
import Contact from '../pages/Contact';
import Footer from './Footer';
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <Aboutme />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (<>
  
    <header>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
    </header>
      {renderPage()}
      <Footer />
  </>);
}
