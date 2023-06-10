import { Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { shades } from '../theme';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="fiex"
      alignItems="center"
      width="100%"
      height="100px"
      backgroundColor={shades.orange[200]}
      color="black"
      position="sticky"
      top="0"
      left="0"
      zIndex="1"
      marginBottom="10px"
      borderBottom={`1px solid ${shades.primary[900]}`}
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' } }}
          color={shades.primary[600]}
        >
          <Typography variant="h2" fontWeight="bold">
            OJ Dance
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <Box
            onClick={() => navigate('/courses')}
            sx={{ '&:hover': { cursor: 'pointer' } }}
          >
            Courses
          </Box>
          <Box
            onClick={() => navigate('/aboutus')}
            sx={{ '&:hover': { cursor: 'pointer' } }}
          >
            About Us
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
