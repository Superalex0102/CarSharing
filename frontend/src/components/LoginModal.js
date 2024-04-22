import { Box, Typography, Modal, FormControl, TextField, Checkbox, Button, Divider, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export default function LoginModal({ open, onClose }) {
    const modalContent = (
        <Box
            sx={{
                position: 'absolute',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 2,
                borderRadius: 4,
                textAlign: 'left',
                width: { xs: '80%', sm: '60%', md: '50%', lg: '25%' },
            }}
        >
            <IconButton
                sx={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                }}
                onClick={onClose}
            >
                <CloseIcon />
            </IconButton>
            <Typography variant="h5" fontWeight="bold" sx={{ m: 1 }}>
                Login
            </Typography>
            <Box sx={{ m: 2 }}>
                <Box display="flex" flexDirection='column'>
                    <FormControl fullWidth sx={{ maxWidth: '100%', mb: 2 }}>
                        <TextField
                            id="outlined-required"
                            label="E-mail or username"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ maxWidth: '100%', mb: 2 }}>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </FormControl>
                    <Box display="flex" alignItems="center">
                        <Checkbox />
                        <Typography>
                            Stay logged in
                        </Typography>
                    </Box>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        component="a"
                        href="#"
                        target="_blank"
                        sx={{
                            backgroundColor: 'orangered',
                            '&:hover': {
                                backgroundColor: 'red',
                            },
                            color: 'white',
                            width: 'auto',
                            m: 1,
                        }}
                    >
                        <Typography variant="button" fontWeight="bold">Login</Typography>
                    </Button>
                    <Typography
                        component={Link}
                        to="/forgot-password"
                        sx={{ m: 'auto', textAlign: 'center', m: 2, cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        Forgot Password
                    </Typography>
                    <Divider />
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        component="a"
                        href="#"
                        target="_blank"
                        sx={{
                            backgroundColor: 'darkblue',
                            color: 'white',
                            width: 'auto',
                            m: 1,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <FacebookIcon sx={{ marginRight: '5px' }} />
                            <Typography variant="button" fontWeight="bold">Continue with Facebook account</Typography>
                        </Box>
                    </Button>
                    <Button
                        color="primary"
                        variant="outlined"
                        size="large"
                        component="a"
                        href="#"
                        target="_blank"
                        sx={{
                            backgroundColor: 'white',
                            color: 'gray',
                            width: 'auto',
                            m: 1,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <GoogleIcon sx={{ marginRight: '5px' }} />
                            <Typography variant="button" fontWeight="bold">Continue with Google account</Typography>
                        </Box>
                    </Button>
                    <Button
                        color="primary"
                        variant="outlined"
                        size="large"
                        component="a"
                        href="#"
                        target="_blank"
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            width: 'auto',
                            m: 1,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AppleIcon sx={{ marginRight: '5px' }} />
                            <Typography variant="button" fontWeight="bold">Continue with Apple account</Typography>
                        </Box>
                    </Button>
                    <Divider />
                    <Typography variant='body1' sx={{ marginTop: 2 }}>
                        <Typography
                            component={Link}
                            to="/register"
                            sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                        >Register
                        </Typography>
                        &nbsp;and save your favorite cars in the parking lot to compare them! If you're already our partner, log in to our admin interface!
                    </Typography>
                </Box>
            </Box>
        </Box>
    );

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {modalContent}
        </Modal>
    );
}