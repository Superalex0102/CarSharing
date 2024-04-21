import * as React from 'react';
import { Card, Typography, Container, CardContent } from '@mui/material';

function RegisterInfo() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                pt: { xs: 2, sm: 2 },
            }}
        >
            <Typography variant="h5" fontWeight="bold">
                Why is it worth registering?
            </Typography>
            <Card
                variant="outlined"
                sx={{
                    bgcolor: 'gray.100',
                    p: 1,
                    mt: { xs: 2, sm: 2 },
                }}
            >
                <CardContent>
                    <Typography paragraph>
                        With a single registration, you can fully utilize the services of CarSharing.hu.
                    </Typography>
                    <Typography paragraph>
                        On CarSharing.hu, once logged in, you can advertise 1 used vehicle for free. You can access your saved settings, searches, and convenience services from any of your devices (computer, mobile, tablet). You can enable the Ad Alert service for your saved searches, while the 'Parking Lot' allows you to collect advertisements that truly interest you.
                    </Typography>
                    <Typography paragraph>
                        On CarPartsSharing.hu, you can advertise 2 parts, accessories, tires, or rims for free.
                    </Typography>
                    <Typography paragraph>
                        Our other websites include CarNavigation.hu, where you can actively participate in a car community.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default RegisterInfo;