import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, Typography, Container, TextField, FormControl, CardContent, Checkbox, Button } from '@mui/material';

function RegisterPanel() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                pt: { xs: 14, sm: 15 },
            }}
        >
            <Typography variant="h5" fontWeight="bold">
                Register
            </Typography>
            <Card
                variant="outlined"
                sx={{
                    bgcolor: 'gray.100',
                    p: 2,
                    mt: { xs: 2, sm: 2 },
                }}
            >
                <CardContent>
                    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
                        <FormControl fullWidth sx={{ maxWidth: { xs: '100%', sm: 'calc(33.33% - 8px)' }, mb: 2, mx: 1 }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                helperText="The name must be at least 3 characters long"
                                defaultValue=""
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ maxWidth: { xs: '100%', sm: 'calc(33.33% - 8px)' }, mb: 2, mx: 1 }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="E-mail"
                                defaultValue=""
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ maxWidth: { xs: '100%', sm: 'calc(33.33% - 8px)' }, mb: 2, mx: 1 }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="E-mail again"
                                defaultValue=""
                            />
                        </FormControl>
                    </Box>
                    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
                        <FormControl fullWidth sx={{ maxWidth: { xs: '100%', sm: 'calc(33.33% - 8px)' }, mb: 2, mx: 1 }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Postcode"
                                defaultValue=""
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ maxWidth: { xs: '100%', sm: 'calc(33.33% - 8px)' }, mb: 2, mx: 1 }}>
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                helperText="The password must be at least 8 characters long"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ maxWidth: { xs: '100%', sm: 'calc(33.33% - 8px)' }, mb: 2, mx: 1 }}>
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password again"
                                type="password"
                            />
                        </FormControl>
                    </Box>
                </CardContent>
                <Typography variant="caption">
                    * A csillaggal jelölt mezők kitöltése kötelező.
                </Typography>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center">
                        <Checkbox />
                        <Typography>
                            Push Notifications
                        </Typography>
                    </Box>
                    <Box ml={5}>
                        <Typography variant="caption" display="block" gutterBottom>
                            I consent to receiving push notification advertisements from CarSharing Kft. regarding the services of CarSharing, as well as advertisements from its business partners, in accordance with the Privacy Policy.
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center">
                        <Checkbox />
                        <Typography>
                            Newsletter subscription
                        </Typography>
                    </Box>
                    <Box ml={5}>
                        <Typography variant="caption" display="block" gutterBottom>
                            I join the subscribers of CarSharing newsletter so that I don't miss out on personalized content, promotions, sweepstakes, and partner promotions! I consent to receiving emails in accordance with the Privacy Policy!
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center">
                        <Checkbox />
                        <Typography>
                            I have read and accept the Terms and Conditions and the Privacy Policy *
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        component="a"
                        href="#"
                        target="_blank"
                        sx={{ width: { xs: '100%', sm: 'auto' } }} // Set width to 100% on mobile
                    >
                        <Typography variant="button" fontWeight="bold">Registration</Typography>
                    </Button>
                </Box>
            </Card>
        </Container>
    );
}

export default RegisterPanel;