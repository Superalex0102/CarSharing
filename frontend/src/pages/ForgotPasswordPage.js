import React from 'react';
import AppAppBar from '../components/Navbar';
import Footer from '../components/Footer';
import ForgotPasswordPanel from '../components/ForgotPasswordPanel';

function ForgotPasswordPage() {
  return (
    <React.StrictMode>
      <AppAppBar />
      <ForgotPasswordPanel />
      <Footer />
    </React.StrictMode>
  );
}

export default ForgotPasswordPage;