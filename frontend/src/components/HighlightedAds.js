import { Box, Card, CardContent, Typography, useMediaQuery, Container, Modal, Divider } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import carImage1 from '../assets/images/car1.jpg';
import carImage2 from '../assets/images/car2.jpg';

export default function HighlightedAds() {
    const [openModal, setOpenModal] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleInfoIconClick = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const modalContent = (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: 4,
                textAlign: 'left',
                maxWidth: { xs: '80%', sm: '80%', md: 500 },
            }}
        >
            <Typography variant="h5" fontWeight="bold" sx={{ m: 1 }}>
                Highlighted Ads
                <Divider />
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ p: 1 }}>
                <Typography paragraph>Advertisers have the option to pay a fee, or to purchase highlighting using other payment methods available on the carsharing.hu website, which will display their ad in a different way from other ads on the homepage, in the designated zone.</Typography>

                <Typography paragraph>The icon next to "Highlighted Ads" indicates that the ads displayed here have this active highlighting.</Typography>

                <Typography paragraph>The vehicle's listing page may also contain additional information about the final selling price. Be sure to check there for information before making a purchase.</Typography>
            </Typography>
        </Box>
    );


    return (
        <Container maxWidth="lg" sx={{ padding: '20px' }}>
            <Card>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', paddingLeft: '10px', paddingTop: '20px' }}>
                    <InfoIcon
                        onClick={handleInfoIconClick}
                        sx={{ fontSize: '2.0rem', marginRight: '5px', cursor: 'pointer', color: '#007bff' }} // Change the color here
                    />
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Highlighted Ads
                    </Typography>
                </div>
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {modalContent}
                </Modal>
                <CardContent sx={{ p: 1 }}>
                    <Box sx={{ overflow: 'auto', maxHeight: '400px' }}>
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            justifyContent="center"
                            alignItems="center"
                            mb={3}
                        >
                            <AdBox image={carImage1} title="BMW X5 xDrive30d Pure Excellenceeeeeeeeee" price={700000} isMobile={isMobile} />
                            <AdBox image={carImage1} title="BMW X5 xDrive30d Pure Excellence" price={700000} isMobile={isMobile} />
                            <AdBox image={carImage2} title="BMW X5 xDrive30d Pure Excellence" price={700000} isMobile={isMobile} />
                            <AdBox image={carImage2} title="BMW X5 xDrive30d Pure Excellence" price={700000} isMobile={isMobile} />
                            <AdBox image={carImage1} title="BMW X5 xDrive30d Pure Excellence" price={700000} isMobile={isMobile} />
                            <AdBox image={carImage2} title="BMW X5 xDrive30d Pure Excellence" price={700000} isMobile={isMobile} />
                            <AdBox image={carImage1} title="BMW X5 xDrive30d Pure Excellence" price={700000} isMobile={isMobile} />
                            <AdBox image={carImage2} title="BMW X5 xDrive30d Pure Excellence" price={700000} isMobile={isMobile} />
                            <AdBox image={carImage2} title="BMW X5 xDrive30d Pure Excellence" price={700000} isMobile={isMobile} />
                            <AdBox image={carImage1} title="BMW X5 xDrive30d Pure Excellence" price={700000} isMobile={isMobile} />
                            <AdBox image={carImage1} title="BMW X5 xDrive30d Pure Excellence" price={700000} isMobile={isMobile} />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}

function AdBox({ image, title, price, isMobile }) {
    const formatPrice = (price) => {
        return price.toLocaleString('hu-HU') + ' Ft';
    };

    return (
        <Box
            sx={{
                width: isMobile ? 'calc(100% - 20px)' : 'calc(100% / 4)',
                height: isMobile ? 'auto' : 300,
                textAlign: 'center',
                margin: isMobile ? '0 0 20px' : '0 10px 20px',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: isMobile ? 'auto' : '70%',
                    overflow: 'hidden',
                    borderRadius: '10px',
                    boxShadow: isMobile ? 'none' : '0px 0px 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} alt="Car" />
            </Box>
            <Box sx={{ padding: '10px', backgroundColor: 'white', borderRadius: '0 0 10px 10px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="subtitle1" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: '5px' }}>{title}</Typography>
                <Typography variant="body1">{formatPrice(price)}</Typography>
            </Box>
        </Box>
    );
}