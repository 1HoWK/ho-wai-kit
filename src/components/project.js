import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Project() {

    return (
        <Container id="project" sx={{ color: '#d2a85f', border: 1, p: 3 }}>
            <Typography variant="h4" sx={{ color: '#d2a85f', textAlign: 'left' }}>
                My work
            </Typography>
        </Container>
    )
};

