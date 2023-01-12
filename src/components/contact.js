import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Contact() {

    return (
        <Container id="contact" sx={{ color: '#d2a85f', border: 1 }}>

            <Typography variant="h2" sx={{ color: '#d2a85f', border: 1, textAlign: 'left' }}>
                Let's Connect
            </Typography>
        </Container>
    )
};