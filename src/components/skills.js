import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

// import ReactJSIcon from '../assets/reactjs-icon.png';
// import NextJSIcon from '../assets/nextjs-icon.png';
// import JSIcon from '../assets/js-icon.png';
// import MongooseIcon from '../assets/mongoose-icon.png';
// import JavaIcon from '../assets/java-icon.png';

export default function Skills() {

    const recentSkills = [
        { icon: 'https://img.icons8.com/color/48/null/javascript--v1.png', name: 'JavaScript' },
        { icon: 'https://img.icons8.com/color/48/null/react-native.png', name: 'React JS' },
        { icon: 'https://img.icons8.com/color/48/null/nextjs.png', name: 'Next.JS' },
        { icon: 'https://img.icons8.com/color/48/null/java-coffee-cup-logo--v1.png', name: 'Java' },
        { icon: 'https://img.icons8.com/color/48/null/mongoose.png', name: 'Mongoose DB' },
        { icon: 'https://img.icons8.com/glyph-neue/48/ffffff/github.png', name: 'GitHub' },
        { icon: 'https://img.icons8.com/color/48/null/material-ui.png', name: 'Material UI' },

    ]

    const skillsLearned = [
        { icon: 'https://img.icons8.com/color/48/null/firebase.png', name: 'Firebase' },
        { icon: 'https://img.icons8.com/color/48/null/material-ui.png', name: 'Material UI' },
        { icon: 'https://img.icons8.com/color/48/null/material-ui.png', name: 'Material UI' },

    ]

    // custom card object
    const CustomCard = styled(Card)(({ theme }) => ({
        width: '12.5%',
        margin: 20,
        padding: 5,
        border: 0,
        borderRadius: 5,
        backgroundColor: '#19153c',
        "&:hover": {
            backgroundColor: '#000000',
            boxShadow: 3
        }
    }));



    return (
        <Container id="skills" sx={{ p: '15%' }}>

            <Typography variant="h4" sx={{ color: '#d2a85f', textAlign: 'center', border: 1 }}>
                Here are a few technologies I've been working with recently:
            </Typography>

            <Grid container>
                {/* {skills.map((skill) => (
                    // <Grid item xs={4}>
                    <Card sx={{
                        borderRadius: 2.5,
                        backgroundColor: '#160034',
                        m: 5,
                        "&:hover": {
                            backgroundColor: '#000000',
                            boxShadow: 3
                        }
                    }}>
                        <CardMedia
                            component="img"
                            sx={{ border: 2, borderColor: 'red' }}
                            src={skill.icon}
                            alt={skill.name + "icon"}
                        />
                        <CardContent sx={{ border: 2, borderColor: 'green', }} >
                            <Typography gutterBottom variant="h7" component="div" sx={{ color: '#bcc6d6' }}>
                                {skill.name}
                            </Typography>
                        </CardContent>
                    </Card>
                    // </Grid>
                ))} */}
                {recentSkills.map((skill) => (
                    <CustomCard>
                        <img src={skill.icon} />
                        {/* <CardContent> */}
                        <Typography variant="subtitle1" component="div" sx={{ color: '#bcc6d6' }}>
                            {skill.name}
                        </Typography>
                        {/* </CardContent> */}
                    </CustomCard>

                ))}

            </Grid>
        </Container >
    )

};