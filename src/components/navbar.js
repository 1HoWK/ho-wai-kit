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
import MenuItem from '@mui/material/MenuItem';


const pages = ['about', 'skills', 'project', 'contact'];

export default function NavigationBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    //   12022A,100027 150134, 
    return (
        <AppBar color="transparent" position="static">
            <Container maxWidth="xl">
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
                            color: '#bbbace',
                            textDecoration: 'none',
                        }}
                    >
                        howaikit
                    </Typography>
                    {/* Responsive */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color: '#bbbace' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* Responsive  */}
                    <Typography
                        variant="h5"
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
                            color: '#4b4777',
                            textDecoration: 'none',
                        }}
                    >
                        howaikit
                    </Typography>
                    {/* Normal menu */}
                    <Box justifyContent="flex-end"
                        alignItems="flex-end" sx={{
                            flexGrow: 1, display: { xs: 'none', md: 'flex' }
                        }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                href={"#" + page }

                                sx={{ my: 2, color: '#bbbace', display: 'block', }}
                            >
                                {page}
                            </Button>
                        ))}
                        <Button
                            sx={{ my: 2, color: '#bbbace', display: 'block' }}
                        >
                            Resume
                        </Button>
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
};
