import LinkedInIcon from '@mui/icons-material/LinkedIn';
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

        <Container id="about" sx={{ color: '#d2a85f', border: 1 }}>
            <Grid container spacing={7} sx={{ textAlign: "left", color: '#bcc6d6', border: 1 }}>
                <Grid item xs={8}>
                    <Typography variant="h2" sx={{ color: '#d2a85f' }}>
                        Hey, I'm Ho Wai Kit
                    </Typography>
                    <p style={{ fontSize: '1.2rem' }}>I will begin my internship as a Software Engineer (JAVA) and complete my bachelor's degree before August 2023.<br />
                        <br />Here are a few technologies I've been working with recently:
                    </p>
                    <ul>
                        <li>Material UI</li>
                        <li>Ant Design</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>React</li>
                        <li>NextJS</li>
                        <li>Mongoose database</li>
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