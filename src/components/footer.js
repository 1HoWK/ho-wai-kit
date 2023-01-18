import * as React from 'react';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function Footer() {

    return (
        <Container sx={{ p: 3, textAlign: 'center', color: '#bcc6d6' }} >

            <Link href="https://github.com/1HoWK/ho-wai-kit" target="_blank" variant="caption"
                sx={{
                    color: '#bcc6d6',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    "&:hover": {
                        color: '#d2a85f',
                    }
                }}>
                Built by Ho Wai Kit using React JS & Material UI
            </Link>

        </Container>
    )
};
