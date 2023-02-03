import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';



export default function Project() {

    return (
        <Container id="project" sx={{ p: '10%' }}>

            <Typography variant="h4" sx={{ color: '#d2a85f', textAlign: 'center' }}>
                My work
            </Typography>

            <Grid container sx={{ mt: 3 }}>
                <Card sx={{ maxWidth: 345, backgroundColor: '#19153c', }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            src="https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Final Year Project
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Check it out
                        </Button>
                    </CardActions>
                </Card>

            </Grid>

        </Container>
    )
};

