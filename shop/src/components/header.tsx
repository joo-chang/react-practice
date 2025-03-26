import React, { useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';

const pages = ['Home', 'Product', 'Post', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = useCallback(
    (page: string) => {
      setAnchorElNav(null);
      if (page === 'Home') {
        navigate('/');
      } else if (page === 'Product') {
        navigate('/product');
      } else if (page === 'About') {
        navigate('/about');
      } else if (page === 'Post') {
        navigate('/post');
      }
    },
    [navigate],
  );

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ShoeShop
          </Typography>
          <Box sx={{ display: { md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
