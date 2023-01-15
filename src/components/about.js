import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProfilePicture from '../assets/HoWaiKit.jpg';

export default function About() {

    //   12022A,100027 150134, 
    return (

        <Container id="about" sx={{ color: '#d2a85f', p: 20 }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ color: '#bcc6d6' }} >
                <Grid item>
                    <Typography variant="h1" sx={{ color: '#d2a85f' }}>
                        Hey, I'm Ho Wai Kit
                    </Typography>
                    {/* <p style={{ fontSize: '1.2rem' }}>I will begin my internship as a Software Engineer (JAVA) and complete my bachelor's degree before August 2023. I'm interested in Web, Mobile and Blockchain App Development.
                    </p> */}
                </Grid>
                <Grid item mx={25}>
                    <p style={{ fontSize: '1.2rem' }}>I will begin my internship as a Software Engineer (JAVA) and complete my bachelor's degree before August 2023. I'm interested in Web, Mobile and Blockchain App Development.
                    </p>
                </Grid>
                <Grid item>
                    <Avatar alt="Ho Wai Kit" src={ProfilePicture} sx={{ width: 200, height: 200 }} />
                </Grid>
            </Grid>
        </Container>


    )
};