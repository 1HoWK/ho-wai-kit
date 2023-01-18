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

    // const skills = [
    //     { icon: JSIcon, name: 'JavaScript' }, { icon: ReactJSIcon, name: 'React JS' }, { icon: NextJSIcon, name: 'Next.JS' }, { icon: JavaIcon, name: 'Java' }, { icon: MongooseIcon, name: 'Mongoose DB' },
    // ]

    return (
        <Container id="skills" sx={{ color: '#d2a85f', border: 1, p: '15%' }}>

            <Typography variant="h4" sx={{ color: '#d2a85f', textAlign: 'center', border: 1 }}>
                Here are a few technologies I've been working with recently:
            </Typography>

            <Grid container>
                {/* {skills.map((skill) => (
                    // <Grid item xs={4}>
                    <Card sx={{ maxWidth: 100, border: 0, borderRadius: 2.5, backgroundColor: '#48476e' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image={skill.icon}
                            alt={skill.name + "icon"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div" sx={{ color: '#bcc6d6' }}>
                                {skill.name}
                            </Typography>
                        </CardContent>
                    </Card>
                    // </Grid>
                ))} */}

                {/* <Grid item xs={4}> */}
                <Card sx={{ maxWidth: 100, border: 0, borderRadius: 2.5, backgroundColor: '#48476e' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 100 }}
                        image={ReactJSIcon}
                        alt="react js icon"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div" sx={{ color: '#bcc6d6' }}>
                            React JS
                        </Typography>
                    </CardContent>
                </Card>
                {/* </Grid> */}

                {/* {console.log(skills)} */}

            </Grid>

        </Container >
    )

};