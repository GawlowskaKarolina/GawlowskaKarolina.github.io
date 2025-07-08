import React from 'react';
import { Box, Typography, Link, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter'; // placeholder for Bluesky

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 4,
        bgcolor: '#1b1c3a',
        color: '#e5e5e5',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      {/* Levá část */}
      <Typography
        variant="body2"
        sx={{
          flexGrow: { sm: 0 },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        &copy; Cedmo MFF 2025
      </Typography>

      {/* Střed - sociální ikony */}
      <Stack direction="row" spacing={1} justifyContent="center" flexGrow={1}>
        {[{
          href: 'https://www.facebook.com',
          icon: <FacebookIcon />,
          label: 'Facebook'
        }, {
          href: 'https://www.instagram.com',
          icon: <InstagramIcon />,
          label: 'Instagram'
        }, {
          href: 'https://blueskyweb.xyz',
          icon: <TwitterIcon />,
          label: 'Bluesky'
        }, {
          href: 'https://www.linkedin.com',
          icon: <LinkedInIcon />,
          label: 'LinkedIn'
        }].map(({ href, icon, label }) => (
          <IconButton
            key={label}
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            size="small"
            sx={{
              color: '#e5e5e5',
              '&:hover': {
                color: '#ffcd06',
              },
            }}
          >
            {icon}
          </IconButton>
        ))}
      </Stack>

      {/* Pravá část */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          flexGrow: { sm: 0 },
          justifyContent: { xs: 'center', sm: 'flex-end' },
        }}
      >
        {['Privacy', 'Terms', 'Cookies'].map((text) => (
          <Link
            key={text}
            href={`/${text.toLowerCase()}`}
            underline="hover"
            sx={{
              color: '#e5e5e5',
              '&:hover': {
                color: '#ffcd06',
              },
            }}
          >
            {text}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Footer;