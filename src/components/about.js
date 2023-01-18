import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProfilePicture from '../assets/HoWaiKit.jpg';

export default function About() {

    //   12022A,100027 150134, 
    return (

        <Container id="about" sx={{ color: '#d2a85f', border: 1, p: '15%' }}>
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
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" >
                        I'm a final year Software Systems Development student in Tunku Abdul Rahman University of Management and Technology (TAR UMT). I will begin my internship as a Software Engineer (JAVA) and complete my bachelor's degree before August 2023. I'm interested in Web, Mobile and Blockchain App Development. My dream job is to work in Google as a Software Engineer.
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar alt="Ho Wai Kit" src={ProfilePicture} sx={{ width: 200, height: 200 }} />
                </Grid>
            </Grid>
        </Container>


    )
};