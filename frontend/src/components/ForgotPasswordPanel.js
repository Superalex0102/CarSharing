import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, Typography, Container, TextField, FormControl, CardContent, Checkbox, Button } from '@mui/material';

function ForgotPasswordPanel() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                pt: { xs: 14, sm: 15 },
            }}
        >
            <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: 2 }}>
                Are you having trouble with logging in?
            </Typography>
            <Typography variant="h6" fontWeight="bold">
                Please provide your email address!
            </Typography>
            <Typography variant='subtitle2' fontWeight="bold" sx={{ marginBottom: 2 }}>
                Please provide your email address!
            </Typography>
            <FormControl fullWidth sx={{ maxWidth: '100%', mb: 2 }}>
                <TextField
                    required
                    id="outlined-required"
                    label="E-mail / username"
                />
            </FormControl>
            <Button
                color="primary"
                variant="contained"
                size="large"
                component="a"
                href="#"
                target="_blank"
                sx={{
                    backgroundColor: 'orangered',
                    color: 'white',
                    width: '10%',
                }}
            >
                <Typography variant="button" fontWeight="bold">Login</Typography>
            </Button>
        </Container>
    );
}

export default ForgotPasswordPanel;