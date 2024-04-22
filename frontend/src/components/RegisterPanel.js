import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { Card, Typography, Container, TextField, CardContent, Checkbox, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

const defaultInputValues = {
    name: '',
    email: '',
    emailConfirm: '',
    postcode: '',
    password: '',
    passwordConfirm: '',
};

const RegisterPanel = ({}) => {
    const [values, setValues] = useState(defaultInputValues);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid.'),
        emailConfirm: Yup.string()
            .required('Email is required')
            .email('Email is invalid.')
            .oneOf([Yup.ref('email')], 'Emails must match'),
        postcode: Yup.string()
            .required('Postcode is required')
            .min(4, 'Postcode must be at least 4 characters')
            .max(4, 'Postcode must be maximum 4 characters'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        passwordConfirm: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const handleChange = (value) => {
        setValues(value)
    };

    useEffect(() => {
        setValues(defaultInputValues);
    }, true)

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                pt: { xs: 3, sm: 3 },
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
                    <Box display="flex" flexDirection='column' sx={{
                        xs: 'column',
                        sm: 'row',
                        mb: 2,
                        mx: 1,
                        '& .MuiTextField-root': { m: 1, width: { xs: '100%', sm: '30%' } },
                    }}>
                        <Box>
                            <TextField
                                placeholder="Name"
                                name="name"
                                label="Name"
                                required
                                {...register('name')}
                                error={errors.name ? true : false}
                                helperText={errors.name?.message || "The name must be at least 3 characters long"}
                                value={values.name}
                                onChange={(event) => handleChange({ ...values, name: event.target.value })}
                            />
                            <TextField
                                placeholder="E-mail"
                                name="email"
                                label="E-mail"
                                type="email"
                                required
                                {...register('email')}
                                error={errors.email ? true : false}
                                helperText={errors.email?.message}
                                value={values.email}
                                onChange={(event) => handleChange({ ...values, email: event.target.value })}
                            />
                            <TextField
                                placeholder="E-mail again"
                                name="emailConfirm"
                                label="E-mail again"
                                type="email"
                                required
                                {...register('emailConfirm')}
                                error={errors.emailConfirm ? true : false}
                                helperText={errors.emailConfirm?.message}
                                value={values.emailConfirm}
                                onChange={(event) => handleChange({ ...values, emailConfirm: event.target.value })}
                            />
                        </Box>
                        <Box>
                            <TextField
                                placeholder="Postcode"
                                name="postcode"
                                label="Postcode"
                                type="number"
                                required
                                {...register('postcode')}
                                error={errors.postcode ? true : false}
                                helperText={errors.postcode?.message}
                                value={values.postcode}
                                onChange={(event) => handleChange({ ...values, postcode: event.target.value })}
                            />
                            <TextField
                                placeholder="Password"
                                name="password"
                                label="Password"
                                type="password"
                                required
                                {...register('password')}
                                error={errors.password ? true : false}
                                helperText={errors.password?.message || "The password must be at least 8 characters long"}
                                value={values.password}
                                onChange={(event) => handleChange({ ...values, password: event.target.value })}
                            />
                            <TextField
                                placeholder="Password again"
                                name="passwordConfirm"
                                label="Password again"
                                type="password"
                                required
                                {...register('passwordConfirm')}
                                error={errors.passwordConfirm ? true : false}
                                helperText={errors.passwordConfirm?.message}
                                value={values.passwordConfirm}
                                onChange={(event) => handleChange({ ...values, passwordConfirm: event.target.value })}
                            />
                        </Box>
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

                    <Box display="flex" flexDirection="column">
                        <Box display="flex" alignItems="center">
                            <Checkbox />
                            <Typography>
                                I have read and accept the Terms and Conditions *
                            </Typography>
                        </Box>
                        <Box ml={5}>
                            <Typography variant="caption" display="block" gutterBottom>
                                I consent to receiving push notification advertisements from CarSharing Kft. regarding the services of CarSharing, as well as advertisements from its business partners, in accordance with the Privacy Policy.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        onClick={handleSubmit(onSubmit)}
                        sx={{ width: { xs: '100%', sm: 'auto' } }}
                    >
                        <Typography variant="button" fontWeight="bold">Registration</Typography>
                    </Button>
                </Box>
            </Card>
        </Container>
    );
}

export default RegisterPanel;