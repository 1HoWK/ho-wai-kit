import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {

    const socialMedias = [
        {
            name: <EmailIcon fontSize='medium' sx={{
                color: '#bcc6d6',
                textDecoration: 'none',
                border: 2,
                borderRadius: 20,
                padding: 1,
                "&:hover": {
                    color: '#d2a85f',
                }
            }} />, link: 'mailto:waikitho01@gmail.com'
        },
        {
            name: <LinkedInIcon fontSize='medium' sx={{
                color: '#bcc6d6',
                textDecoration: 'none',
                border: 2,
                borderRadius: 20,
                padding: 1,
                "&:hover": {
                    color: '#d2a85f',
                }
            }} />, link: 'http://www.linkedin.com/in/ho-wai-kit'
        },
        {
            name: <GitHubIcon fontSize='medium' sx={{
                color: '#bcc6d6',
                textDecoration: 'none',
                border: 2,
                borderRadius: 20,
                padding: 1,
                "&:hover": {
                    color: '#d2a85f',
                }
            }} />, link: 'https://github.com/1HoWK/ho-wai-kit'
        }
    ]

    return (
        <Container id="contact" sx={{ p: '15%' }}>

            <Typography variant="h4" sx={{ color: '#d2a85f', textAlign: 'center' }}>
                Let's Connect
            </Typography>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                p={2}
                marginTop={3}
            >
                {
                    socialMedias.map((socialMedia) => (
                        <Link href={socialMedia.link} target="_blank">
                            {socialMedia.name}
                        </Link>
                    ))
                }
            </Stack>
        </Container>
    )
};