import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
// import Resume from '../assets/resume.pdf';

const pages = ['about', 'skills', 'project', 'contact'];

export default function NavigationBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const ResumeButton = styled(Button)(({ theme }) => ({
        border: '2px solid',
        color: '#bcc6d6',
        borderColor: '#bcc6d6',
        '&:hover': {
            color: '#d2a85f',
            borderColor: '#d2a85f',
            backgroundColor: 'transparent',
        },
    }));

    const Buttons = styled(Button)(({ theme }) => ({
        color: '#bcc6d6',
        '&:hover': {
            color: '#d2a85f',
            backgroundColor: 'transparent',
        },
    }));

    return (

        <AppBar position="fixed" sx={{ backgroundColor: '#100027' }}>
            <Container maxWidth="xl" sx={{ color: '#d2a85f' }}>
                <Toolbar disableGutters>
                    {/* Normal */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#d2a85f',
                            textDecoration: 'none',
                        }}
                    >
                        howaikit
                    </Typography>
                    {/* Responsive */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color: '#bcc6d6' } }}>
                        <IconButton
                            size="large"
                            aria-label="sections"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none', },
                            }}
                        >
                            {pages.map((page) => (
                                <Buttons
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    href={"#" + page}
                                    sx={{ m: 2, display: 'block', fontWeight: 'bold', color: '#100027' }}
                                >
                                    {page}
                                </Buttons>
                            ))}
                            <ResumeButton
                                sx={{ m: 2, color: '#100027', borderColor: '#100027', display: 'block', fontWeight: 'bold' }}
                            // href={Resume}
                            // target="_blank"
                            >
                                Resume
                            </ResumeButton>

                        </Menu>
                    </Box>
                    {/* Responsive  */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#d2a85f',
                            textDecoration: 'none',
                        }}
                    >
                        howaikit
                    </Typography>
                    {/* Normal */}
                    <Box justifyContent="flex-end"
                        alignItems="flex-end" sx={{
                            flexGrow: 1, display: { xs: 'none', md: 'flex' }
                        }}>
                        {pages.map((page) => (
                            <Buttons
                                key={page}
                                onClick={handleCloseNavMenu}
                                href={"#" + page}
                                sx={{ m: 2, display: 'block', fontWeight: 'bold' }}
                            >
                                {page}
                            </Buttons>
                        ))}
                        <ResumeButton
                            sx={{ m: 2, color: '#bcc6d6', display: 'block', fontWeight: 'bold' }}
                        // href={Resume}
                        // target="_blank"
                        >
                            Resume
                        </ResumeButton>
                    </Box>

                    {/* <h1 id="title">Survey Form</h1>
                    <p id="description">This is a short survey form</p>
                    <form id="survey-form">
                        <label id="name-label">Name :</label>
                        <input id="name" type="text" placeholder="Enter your name" />
                        <label id="email-label">Email :</label>
                        <input id="email" type="email" placeholder="Enter your email" />
                        <label id="number-label">Number :</label>
                        <input id="number" type="number" min="1" max="8" placeholder="Enter a number" />
                        <label>Gender :</label>
                        <select id="dropdown" >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input name="prefer" value="front-end-projects" type="checkbox" class="input-checkbox" />

                        <textarea id="w3review" name="w3review" rows="4" cols="50">
                        </textarea>

                    </form> */}

                </Toolbar>
            </Container>
        </AppBar>
    );
};
