import * as React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box, Container, TextField, Typography, Button, Card, CardContent } from '@mui/material';

export default function Search() {

    const [filters, setFilters] = React.useState({
        brand: '',
        bodyStyles: [],
        fuel: [],
        startYear: '',
        endYear: '',
        startPrice: '',
        endPrice: ''
    });

    const startYearOptions = Array.from({ length: new Date().getFullYear() - 1899 }, (_, index) => (new Date().getFullYear() - index).toString());

    const handleFilterChange = (name) => (event) => {
        setFilters({ ...filters, [name]: event.target.value });
    };

    return (
        <Container maxWidth="lg">
            <Card variant="outlined" sx={{ bgcolor: 'gray.100', p: 2, mt: 2 }}>
                <CardContent>
                    <Box display="flex" justifyContent="center" flexWrap="wrap" mb={2}>
                        <Box sx={{ m: 1, minWidth: 120, flex: '1 0 150px' }}>
                            <InputLabel id="brand-label">Brand</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    labelId="brand-label"
                                    id="brand-select"
                                    value={filters.brand}
                                    label="Brand"
                                    onChange={handleFilterChange('brand')}
                                >
                                    <MenuItem value="BMW">BMW (90)</MenuItem>
                                    <MenuItem value="Audi">Audi (4)</MenuItem>
                                    <MenuItem value="MERCEDES-BENZ">MERCEDES-BENZ (3)</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ m: 1, minWidth: 120, flex: '1 0 150px' }}>
                            <InputLabel id="body-style-label">Body Style</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    labelId="body-style-label"
                                    id="body-style-select"
                                    value={filters.bodyStyles}
                                    name="bodyStyle"
                                    label="Body Style"
                                    multiple
                                    onChange={handleFilterChange('bodyStyles')}
                                >
                                    <MenuItem value="Pickup">Pickup</MenuItem>
                                    <MenuItem value="Cabrio">Cabrio</MenuItem>
                                    <MenuItem value="Coupe">Coupe</MenuItem>
                                    <MenuItem value="Sedan">Sedan</MenuItem>
                                    <MenuItem value="Hatchback">Hatchback</MenuItem>
                                    <MenuItem value="Compact">Compact</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ m: 1, minWidth: 120, flex: '1 0 130px' }}>
                            <InputLabel id="fuel-label">Fuel</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    labelId="fuel-label"
                                    id="fuel-select"
                                    value={filters.fuel}
                                    name="fuel"
                                    label="Fuel"
                                    multiple
                                    onChange={handleFilterChange('fuel')}
                                >
                                    <MenuItem value="Petrol">Petrol</MenuItem>
                                    <MenuItem value="Diesel">Diesel</MenuItem>
                                    <MenuItem value="LPG">LPG</MenuItem>
                                    <MenuItem value="Electric">Electric</MenuItem>
                                    <MenuItem value="Hybrid">Hybrid</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ m: 1, minWidth: 120, flex: '1 0 120px' }}>
                            <InputLabel id="startYear-label">Year From</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    labelId="startYear-label"
                                    id="startYear-select"
                                    value={filters.startYear}
                                    name="startYear"
                                    label="From"
                                    onChange={handleFilterChange('startYear')}
                                >
                                    {startYearOptions.map((year) => (
                                        <MenuItem key={year} value={year}>{year}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ m: 1, minWidth: 120, flex: '1 0 120px' }}>
                            <InputLabel id="endYear-label">Year To</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    labelId="endYear-label"
                                    id="endYear-select"
                                    value={filters.endYear}
                                    name="endYear"
                                    label="To"
                                    onChange={handleFilterChange('endYear')}
                                >
                                    {startYearOptions.map((year) => (
                                        <MenuItem key={year} value={year}>{year}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ m: 1, minWidth: 120, flex: '1 0 150px' }}>
                            <InputLabel id="start-price-label">Price From</InputLabel>
                            <FormControl fullWidth>
                                <TextField
                                    id="start-price"
                                    label="Price From"
                                    value={filters.startPrice}
                                    onChange={handleFilterChange('startPrice')}
                                    type="number"
                                />
                            </FormControl>
                        </Box>
                        <Box sx={{ m: 1, minWidth: 120, flex: '1 0 150px' }}>
                            <InputLabel id="end-price-label">Price To</InputLabel>
                            <FormControl fullWidth>
                                <TextField
                                    id="end-price"
                                    label="Price To"
                                    value={filters.endPrice}
                                    onChange={handleFilterChange('endPrice')}
                                    type="number"
                                />
                            </FormControl>
                        </Box>
                    </Box>
                    <Box sx={{ m: 1, minWidth: 240, flex: '1 0 150px', display: 'flex', justifyContent: 'flex-end' }}>
    <Button variant="contained" style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 'fit-content', minWidth: '175px' }}>
        <Typography style={{ fontSize: '1rem' }}>Search</Typography>
        <Typography variant="subtitle2" style={{ fontSize: '0.8rem' }}>1 Found</Typography>
    </Button>
</Box>
                </CardContent>
            </Card>
        </Container>
    );
}