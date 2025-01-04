import React from 'react';
import PageContainer from './pageContainer';
import Navbar from './navbar';

const Layout = ({ children }) => (
  <PageContainer>
    <Navbar />
    {children}
  </PageContainer>
);

export default Layout;
