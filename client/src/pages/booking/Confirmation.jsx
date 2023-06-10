import { Box, Button, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Box width="100%" height="700px" display="flex" justifyContent="center">
      <Box
        display="flex"
        width="80%"
        height="500px"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Box>
          <Typography variant="h1">
            {' '}
            Confirmation Email sent to{' '}
            <p
              style={{
                color: 'blue',
                fontWeight: 'bold',
                fontSize: '50px',
                justifyContent: 'center',
              }}
            >
              {location.state.email}!!
            </p>
            You check class detail and QR code through Email!
          </Typography>
          <Box marginTop="30px">
            <Button
              variant="contained"
              onClick={() => navigate('/')}
              sx={{ '&:hover': { cursor: 'pointer' } }}
            >
              Back to Home
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Confirmation;
