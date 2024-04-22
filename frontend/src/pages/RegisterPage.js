import React from 'react';
import AppAppBar from '../components/Navbar';
import Footer from '../components/Footer';
import RegisterPanel from '../components/RegisterPanel';
import RegisterInfo from '../components/RegisterInfo';
import Box from '@mui/material/Box';

function RegisterPage() {
  return (
    <React.StrictMode>
      <AppAppBar />
      <RegisterPanel />
      <RegisterInfo />
      <Footer />
    </React.StrictMode>
  );
}

export default RegisterPage;