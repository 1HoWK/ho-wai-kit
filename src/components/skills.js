import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export default function Skills() {

    const technologies = [

        { icon: 'https://img.icons8.com/color/48/null/react-native.png', name: 'React JS' },
        { icon: 'https://img.icons8.com/color/48/null/nextjs.png', name: 'Next.JS' },
        { icon: 'https://img.icons8.com/color/48/null/html-5--v1.png', name: 'HTML' },
        { icon: 'https://img.icons8.com/color/48/null/css3.png', name: 'CSS' },
        { icon: 'https://img.icons8.com/color/48/null/javascript--v1.png', name: 'JavaScript' },
        { icon: 'https://img.icons8.com/color/48/null/material-ui.png', name: 'Material UI' },
        { icon: 'https://img.icons8.com/color/48/null/java-coffee-cup-logo--v1.png', name: 'Java' },
        { icon: 'https://img.icons8.com/color/48/null/c-programming.png', name: 'C' },
        { icon: 'https://img.icons8.com/offices/48/null/php-logo.png', name: 'PHP' },
        { icon: 'https://img.icons8.com/fluency/48/null/laravel.png', name: 'Laravel' },
        { icon: 'https://img.icons8.com/color/48/null/solidity.png', name: 'Solidity' },
        { icon: 'https://img.icons8.com/color/48/null/kotlin.png', name: 'Kotlin' },
        { icon: 'https://img.icons8.com/glyph-neue/48/ffffff/github.png', name: 'GitHub' },
        { icon: 'https://img.icons8.com/color/48/null/android-studio--v2.png', name: 'Android Studio' },
        { icon: 'https://img.icons8.com/color/48/null/mysql-logo.png', name: 'MySQL' },
        { icon: 'https://img.icons8.com/color/48/null/mongoose.png', name: 'Mongoose DB' },
        { icon: 'https://img.icons8.com/color/48/null/firebase.png', name: 'Firebase' },

    ]

    // custom card object
    const CustomCard = styled(Card)(({ theme }) => ({
        width: '12.5%',
        marginTop: 23,
        marginBottom: 23,
        marginLeft: 23,
        padding: 10,
        border: 0,
        borderRadius: 5,
        backgroundColor: '#19153c',
        "&:hover": {
            backgroundColor: '#000000',
            boxShadow: 3
        }
    }));

    return (
        <Container id="skills">

            <Typography variant="h4" sx={{ color: '#d2a85f', textAlign: 'center' }}>
                Here are a few technologies I've been working with recently:
            </Typography>

            <Grid container sx={{ backgroundColor: '#282552', mt: 3, borderRadius: 5, p: 2 }}>
                {technologies.map((skill) => (
                    <CustomCard>
                        <img src={skill.icon} alt={skill.name + "icon"} />
                        {/* <CardContent> */}
                        <Typography variant="subtitle2" component="div" sx={{ color: '#bcc6d6', m:1 }}>
                            {skill.name}
                        </Typography>
                        {/* </CardContent> */}
                    </CustomCard>

                ))}

            </Grid>
        </Container >
    )

};