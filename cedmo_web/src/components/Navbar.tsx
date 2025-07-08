import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'CEDMO Trends', to: '/trends' },
    { label: 'CEDMO Index', to: '/index' },
    { label: 'CEDMO Tracking', to: '/tracking' },
    { label: 'About Us', to: '/about' },
    { label: 'Publications', to: '/publications' },
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: '#1b1c3a' }}>
      <Toolbar>
       <Box sx={{ flexGrow: 1 }}>
        <img src={Logo} alt="CEDMO Logo" style={{ height: 40 }} />
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              onClick={handleMenuOpen}
              aria-controls="nav-menu"
              aria-haspopup="true"
              aria-label="menu"
              sx={{
                color: '#e5e5e5',
                '&:hover': { color: '#ffcd06' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="nav-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {menuItems.map(({ label, to }) => (
                <MenuItem
                  key={label}
                  component={Link}
                  to={to}
                  onClick={handleMenuClose}
                  sx={{
                    color: '#1b1c3a',
                    '&:hover': { backgroundColor: '#ffcd06', color: '#1b1c3a' },
                  }}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map(({ label, to }) => (
              <Button
                key={label}
                component={Link}
                to={to}
                sx={{
                  color: '#e5e5e5',
                  '&:hover': { color: '#ffcd06' },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;