import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const pages = ["about", "skills", "project", "contact", "CV"];

const cvUrl =
  "https://docs.google.com/document/d/14-bkMMkDxiRSm3aTfPnF1Ztn3YYC3VnNrsktleqIj4c/edit?usp=sharing";

export default function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Custom button styling
  const CustomButton = styled(Button)(({ theme }) => ({
    color: "#4b2e2e", // Coffee Brown
    m: 2,
    display: "block",
    fontWeight: "bold",
    "&:hover": {
      color: "#800020", // Rich Burgundy
      backgroundColor: "transparent",
    },
  }));

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#faf0e6" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Web view starts here */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#b87333", // copper
              textDecoration: "none",
            }}
          >
            ho wai kit
          </Typography>
          {/* Web view ends here */}

          {/* Mobile view starts here */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "#4b2e2e" },
            }}
          >
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <CustomButton
                  key={page}
                  onClick={handleCloseNavMenu}
                  href={page !== "CV" ? `#${page}` : cvUrl}
                >
                  {page}
                </CustomButton>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#b87333",
              textDecoration: "none",
            }}
          >
            ho wai kit
          </Typography>
          {/* Mobile view ends here  */}

          {/* Web view starts here */}
          <Box
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <CustomButton
                key={page}
                onClick={handleCloseNavMenu}
                href={page !== "CV" ? `#${page}` : cvUrl}
              >
                {page}
              </CustomButton>
            ))}
          </Box>
          {/* Web view ends here */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
