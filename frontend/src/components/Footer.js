import { Box, Container } from '@mui/material';
import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0px 0px 0px',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
        marginTop: '20px',
    };

    const brandButtonStyle = {
        backgroundColor: 'transparent',
        color: '#fff',
        padding: '8px 16px',
        margin: '5px',
        textDecoration: 'none',
        display: 'inline-block',
        border: '1px solid #fff',
        cursor: 'pointer',
        textTransform: 'uppercase',
        borderRadius: '20px',
    };

    const brandSectionStyle = {
        textAlign: 'left',
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: '20px',
    };

    const lastSectionStyle = {
        backgroundColor: '#222',
        padding: '15px',
    };

    const topBrands = ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Volkswagen', 'Hyundai', 'Nissan'];

    return (
        <footer>
            <Box sx={footerStyle}>
                <Container sx={{footerStyle}}>
                    <Box style={brandSectionStyle}>
                        <h3>Top Brands</h3>
                        {topBrands.map((brand, index) => (
                            <button key={index} style={brandButtonStyle}>{brand}</button>
                        ))}
                    </Box>
                </Container>
                <div style={lastSectionStyle}>
                    © Made by Alex Somogyi
                </div>
            </Box>
        </footer >
    );
}

export default Footer;