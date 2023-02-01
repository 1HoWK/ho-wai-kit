import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import ReactJSIcon from '../assets/reactjs-icon.png';
import NextJSIcon from '../assets/nextjs-icon.png';
import JSIcon from '../assets/js-icon.png';
import MongooseIcon from '../assets/mongoose-icon.png';
import JavaIcon from '../assets/java-icon.png';

export default function Skills() {

    const skills = [
        { icon: JSIcon, name: 'JavaScript' },
        { icon: ReactJSIcon, name: 'React JS' },
        { icon: NextJSIcon, name: 'Next.JS' },
        { icon: JavaIcon, name: 'Java' },
        { icon: MongooseIcon, name: 'Mongoose DB' },
    ]

    return (
        <Container id="skills" sx={{ p: '15%' }}>

            <Typography variant="h4" sx={{ color: '#d2a85f', textAlign: 'center', border: 1 }}>
                Here are a few technologies I've been working with recently:
            </Typography>

            <Grid container>
                {skills.map((skill) => (
                    // <Grid item xs={4}>
                    <Card sx={{
                        width: '12.5%',
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
                            image={skill.icon}
                            alt={skill.name + "icon"}
                        />
                        <CardContent sx={{ border: 2, borderColor: 'green', }} >
                            <Typography gutterBottom variant="h7" component="div" sx={{ color: '#bcc6d6' }}>
                                {skill.name}
                            </Typography>
                        </CardContent>
                    </Card>
                    // </Grid>
                ))}

                {/* {console.log(skills)} */}

            </Grid>

        </Container >
    )

};