import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProfilePicture from '../assets/HoWaiKit.jpg';


export default function About() {

    //   12022A,100027 150134, 
    return (

        <Container id="about">
            <Grid container spacing={2} sx={{ textAlign: "left", color: '#bcc6d6', my: 22, mx: 2 }}>
                <Grid item xs={8}>
                    <Typography variant="h2" sx={{ color: '#d2a85f' }}>
                        Hey, I'm Ho Wai Kit
                    </Typography>
                    <p style={{ fontSize: '1.2rem' }}>My name is Ho Wai Kit and I'm a final year student who wants to be a backend Software Engineer.<br />
                        <br />Here are a few technologies I've been working with recently:
                    </p>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>NextJS</li>
                        <li>Java</li>
                        <li>SpringBoot</li>
                    </ul>
                    <Stack
                        direction="row" spacing={2} color="#d2a85f"
                    >
                        <GitHubIcon fontSize="medium" />
                        <LinkedInIcon fontSize="medium" />
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Avatar alt="Ho Wai Kit" src={ProfilePicture} sx={{ width: 200, height: 200 }} />
                </Grid>
            </Grid>
        </Container>

    )
};