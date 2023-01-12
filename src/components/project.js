import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Project() {

    return (
        <Container id="project" sx={{ color: '#d2a85f', border: 1,  }}>
            <Typography variant="h2" sx={{ color: '#d2a85f', textAlign: 'left' }}>
                My work
            </Typography>
        </Container>
    )
};

